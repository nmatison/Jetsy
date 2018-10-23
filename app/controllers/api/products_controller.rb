class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def show
    @product = Product.find_by(id: params[:id])
  end

  def create
    product_details = product_params.reject do |k,v| 
      k == "c_name" || k == "c_name2" || k == "c_name3"
    end
    @product = Product.new(product_details)
    @product = create_checker(@product)
    associate_categories
    render 'api/products/show'
  end

  def update
    @product = Product.find_by(id: params[:id])
    if @product.update(product_params)
      render 'api/products/show'
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def destroy
    @product = Product.find_by(id: params[:id])
    if @product.destroy
      render 'api/products/show'
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  private

  def product_params
    params.require(:product).permit(:id, 
      :user_id, 
      :product_name, 
      :description, 
      :price, 
      :c_name, 
      :c_name2, 
      :c_name3,
      :photo)
  end

  def create_checker(item)
    unless item.save 
      render json: item.errors.full_messages, status: 422
    end
    item
  end

  def associate_categories
    c_name = product_params[:c_name]
    c_name2 = product_params[:c_name2]
    c_name3 = product_params[:c_name3]
    category = Category.find_by(category_name: c_name) || c_name
    category2 = Category.find_by(category_name: c_name2) || c_name2
    category3 = Category.find_by(category_name: c_name3) || c_name3
    handle_categories([category, category2, category3])
  end

  def handle_categories(cat_array)
    result = []
    i = 0
    while i < cat_array.length
      cat = cat_array[i]
      next if cat == ""
      if cat.is_a?(String)
        cat = Category.new({category_name: cat})
        cat = create_checker(cat)
      end
      result << cat.id
      i += 1
    end
    create_associations(result)
  end

  def create_associations(cat_ids)
    cat_ids.each do |id|
      categorize = Categorize.new(product_id: @product.id, category_id: id)
      create_checker(categorize)
    end
    nil
  end

end
