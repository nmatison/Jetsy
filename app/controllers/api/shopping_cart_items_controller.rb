class Api::ShoppingCartItems < ApplicationController
  def create
    @shopping_cart_item = ShoppingCartItem.new()
  end

  def destroy

  end

  private
  def shopping_cart_item_params
    params.require(:cart_item).permit(:shopping_cart_id, :product_id, :quantity)
  end
end
