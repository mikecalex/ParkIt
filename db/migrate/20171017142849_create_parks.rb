class CreateParks < ActiveRecord::Migration[5.1]
  def change
    create_table :parks do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.string :category, null: false
      t.text :description
      t.string :photo_url
      t.integer :size

      t.timestamps null: false
    end
  end
end
