class Category < ApplicationRecord
  validates :category_name, presence: true, uniquness: true
  has_many :categorizes
  has_many :products, through: :categorizes
end