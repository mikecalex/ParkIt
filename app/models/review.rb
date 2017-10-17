class Review < ApplicationRecord
  belongs_to :park

  validates :rating, presence: true
end
