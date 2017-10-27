class UserSerializer < ActiveModel::Serializer

  attributes :id, :first_name

  has_many :parks
  has_many :reviews
  has_many :votes
end
