class Api::ProductsController < ApplicationController
  def index
    @products = Products.all
  end

  def show
    @product = Product.find_by(id: params[:id])
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render 'api/posts/show'
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def update
    @product = Product.find_by(id: params[:id])
    if @product.update(post_params)
      render 'api/posts/show'
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def destroy
    @product = Product.find_by(id: params[:id])
    if @product.destroy
      render 'api/posts/show'
    else
      render json: @product.errors.full_messages, status: 422
  end

  private

  def product_params
    params.require(:product).permit(:user_id, :product_name, :description, :price)
  end
end
