class Review < ApplicationRecord
  belongs_to :park
  belongs_to :user
  has_many :votes

  validates :rating, presence: true

  def down_votes
    count = 0
    votes.each do |vote|
      if vote.vote_value == -1
        count += 1
      end
    end
    count
  end

  def up_votes
    count = 0
    votes.each do |vote|
      if vote.vote_value == 1
        count += 1
      end
    end
    count
  end

  def net_votes
    up_votes - down_votes
  end
end
