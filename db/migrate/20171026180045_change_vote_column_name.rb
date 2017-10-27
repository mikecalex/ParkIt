class ChangeVoteColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :votes, :up_vote, :vote_value
  end
end
