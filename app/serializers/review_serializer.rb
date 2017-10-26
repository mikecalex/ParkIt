class ReviewSerializer < ActiveModel::Serializer

  attributes :id, :user_id, :rating, :body, :park_id

  belongs_to :park
end
