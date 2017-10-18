# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(first_name: "Dave", last_name: "DiRico", email: "davidjdirico@gmail.com", password: "launchacademy")

park1 = Park.create(user_id: user1.id, name: "Borderland State Park", address: "44 Grove St.", city: "Easton", state: "MA", zip: "20159", category: "state")

amenities = Amenity.create([
    {name: "Camping Allowed"},
    {name: "Pets Allowed"},
    {name: "Information Booth"},
    {name: "Handicap-Accessable"},
    {name: "Shuttle Bus Service"},
    {name: "Wifi"},
    {name: "Free Parking"},
    {name: "Public Bathrooms"},
    {name: "Drinking Water Fountain"},
    {name: "Desginated Sports Areas"},
    {name: "Picnic Tables"}
  ])

ParkAmenity.create(park_id: park1.id, amenity_id: amenities[0].name )
ParkAmenity.create(park_id: park1.id, amenity_id: amenities[3].name )

review1 = Review.create(rating: 5, park_id: park1.id, user_id: user1.id)
