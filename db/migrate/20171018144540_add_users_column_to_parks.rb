class AddUsersColumnToParks < ActiveRecord::Migration[5.1]
  def up
    add_column :parks, :user_id, :integer
  end
  def down
    remove_column :parks, :user_id
  end
end
