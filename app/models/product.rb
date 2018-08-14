class Product < ApplicationRecord
  validates :user_id, :product_name, :description, :price, presence: true
  validates :product_name, length: {maximum: 100, presence: true}
  validates :description, length: {maximum: 400, presence: true}
  validate :ensure_photo

  belongs_to :user
  # has_many :reviews, dependent: :destroy
  has_one_attached :photo



  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "Must be attached"
    end
  end
end
