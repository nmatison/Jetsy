class Review < ApplicationRecord
  validates :user_id, :product_id, :rating, null: false

  # belongs_to :user
  # belongs_to :product
end
