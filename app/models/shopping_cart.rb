class ShoppingCart < ApplicationRecord
  validates user_id, null: false, uniqueness: true

  belongs_to :user
  has_many :shopping_cart_items, dependent: :destroy
end
