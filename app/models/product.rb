class Product < ApplicationRecord
  validates :user_id, :product_name, :description, :price, presence: true

  belongs_to :user
end
