class ParkAmenity < ApplicationRecord
  belongs_to :park
  belongs_to :amenity
end
