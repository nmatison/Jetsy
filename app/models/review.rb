class Review < ApplicationRecord
  validates :user_id, :product_id, null: false
  validates :body, length: {maximum: 175, allow_nil: true}
  validates :title, length: {maximum: 40, allow_nil: true}
  validates :rating, inclusion: { in: (1..5), message: "%{value} is not a valid size"}
  belongs_to :user
  belongs_to :product
end
