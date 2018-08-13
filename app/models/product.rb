class Product < ApplicationRecord
  validates :user_id, :product_name, :description, :price, presence: true
  validates :product_name, length: {maximum: 114, minimum: 2, presence: true}
  validates :description, length: {maximum: 450, minimum: 2, presence: true}
  has_one_attached :photo
  belongs_to :user
end
