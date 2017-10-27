class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.integer :up_vote
      t.integer :down_vote
      t.belongs_to :user, null: false
      t.belongs_to :review, null: false

      t.timestamps null: false
    end
  end
end
