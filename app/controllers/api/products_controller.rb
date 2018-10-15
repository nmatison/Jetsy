class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def show
    @product = Product.find_by(id: params[:id])
  end

  def create
    product_details = product_params.reject{|k,v| k == "c_name"}
    @product = Product.new(product_details)
    @product = create_checker(@product)
    @category = Category.find_by(category_name: product_params[:c_name])
    unless @category
      @category = Category.new(category_name: product_params[:c_name])
      @category = create_checker(@category)
    end
    @categorize = Categorize.new(product_id: @product.id, category_id: @category.id)
    create_checker(@categorize)
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

  def create_checker(item)
    unless item.save 
      render json: @product.errors.full_messages, status: 422
    end
    item
  end

  private

  def product_params
    params.require(:product).permit(:id, :user_id, :product_name, :description, :price, :c_name, :photo)
  end
end
