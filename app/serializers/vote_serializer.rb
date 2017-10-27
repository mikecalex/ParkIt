class VoteSerializer < ActiveModel::Serializer

  attributes :id, :vote_value

  belongs_to :review
  belongs_to :user
end
