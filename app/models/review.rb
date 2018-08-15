class Review < ApplicationRecord
  validates :user_id, :product_id, :rating, null: false
  validates :body, length: {maximum: 175, allow_nil: true}
  validates :title, length: {maximum: 40, allow_nil: true}

  belongs_to :user
  belongs_to :product
end
