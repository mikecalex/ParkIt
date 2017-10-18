class CreateAmenities < ActiveRecord::Migration[5.1]
  def change
    create_table :amenities do |t|
      t.string :name, null: false

      t.timestamps null: false
    end
  end
end
