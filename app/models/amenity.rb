class Amenity < ApplicationRecord
  has_many :park_amenities
  has_many :parks, through: :park_amenities

  validates :name, presence: true
end
