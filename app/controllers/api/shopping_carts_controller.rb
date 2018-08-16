class Api::ShoppingCartsController < ApplicationController

  def index
    @cart_items = ShoppingCartItems.where(shopping_cart_id: params[:id])
  end

  def create
    @shopping_cart = ShoppingCart.new(shopping_cart_params)
    unless @shopping_cart.save
      render json: @review.errors.full_messages, status: 422
    end
  end

  private
  def shopping_cart_params
    params.require(:cart).permit(:user_id)
  end
end
