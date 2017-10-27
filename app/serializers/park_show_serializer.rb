class ParkShowSerializer < ActiveModel::Serializer

  attributes :id, :name, :address, :city, :state, :zip, :category, :description, :photo_url, :size, :user_id

  has_many :reviews
end
