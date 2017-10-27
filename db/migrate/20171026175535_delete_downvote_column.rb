class DeleteDownvoteColumn < ActiveRecord::Migration[5.1]
  def up
    remove_column :votes, :down_vote
  end

  def down
    add_column :votes, :down_vote, :integer
  end
end
