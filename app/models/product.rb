class Product < ApplicationRecord
  validates :user_id, :product_name, :description, :price, presence: true
  validates :product_name, length: {maximum: 35, presence: true}
  validates :description, length: {maximum: 300, presence: true}
  validate :ensure_photo

  belongs_to :user
  has_many :reviews, dependent: :destroy
  has_many :shopping_cart_items, dependent: :destroy
  has_many :categorizes, dependent: :destroy
  has_many :category, through: :categorizes
  has_one_attached :photo



  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "Must be attached"
    end
  end
end
