class ParkSerializer < ActiveModel::Serializer

  attributes :id, :name, :address, :city, :state, :zip, :category, :description, :photo_url, :size

  belongs_to :user
  has_many :reviews
end
