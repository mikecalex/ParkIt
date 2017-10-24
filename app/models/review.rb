class Review < ApplicationRecord
  belongs_to :park
  has_many :votes

  validates :rating, presence: true
end
