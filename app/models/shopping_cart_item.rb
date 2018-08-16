class ShoppingCartItem < ApplicationRecord
  validates :shopping_cart_id, :product_id, :quantity, presence: true

  belongs_to :shopping_cart
  belongs_to :product
end
