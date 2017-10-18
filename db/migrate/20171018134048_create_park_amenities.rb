class CreateParkAmenities < ActiveRecord::Migration[5.1]
  def change
    create_table :park_amenities do |t|
      t.belongs_to :park, null: false
      t.belongs_to :amenity, null: false

      t.timestamps null: false
    end
  end
end
