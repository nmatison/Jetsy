class Product < ApplicationRecord
  validates :user_id, :product_name, :description, :price, presence: true

  has_one_attached :photo
  belongs_to :user
end
