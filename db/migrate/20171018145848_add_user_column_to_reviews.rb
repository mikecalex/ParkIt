class AddUserColumnToReviews < ActiveRecord::Migration[5.1]
  def up
    add_column :reviews, :user_id, :integer
  end
  def down
    remove_column :reviews, :user_id
  end
end
