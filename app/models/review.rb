class Review < ApplicationRecord
  validates :user_id, :product_id, :rating, :title, :body

  belongs_to :user
  belongs_to :product
end
