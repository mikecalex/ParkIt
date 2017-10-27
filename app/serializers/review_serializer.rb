class ReviewSerializer < ActiveModel::Serializer

  attributes :id, :rating, :body, :up_votes, :down_votes, :user

  belongs_to :park
  belongs_to :user
  has_many :votes
end
