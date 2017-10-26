class ParkSerializer < ActiveModel::Serializer

  attributes :id, :name, :address, :city, :state, :zip, :category, :description, :photo_url, :size, :user_id, :reviews

  has_many :reviews
end
