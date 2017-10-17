require "rails_helper"

feature "visitor sees details of individual park" do
  scenario "sees park details" do
    boston_common = Park.create(name: "Boston Common", address: "139 Tremont St.", city: "Boston", state: "MA", zip: "02111", category: "State")
    cheese_park = Park.create(name: "Cheese Park", address: "139 Cheesemont St.", city: "Boston", state: "MA", zip: "02111", category: "Cheese")

    visit park_path(boston_common)

    expect(page).to have_content "Boston Common"
    expect(page).to have_content "139 Tremont St."
    expect(page).to have_content "Boston"
    expect(page).to have_content "MA"
    expect(page).to have_content "02111"
    expect(page).to have_content "State Park"
    expect(page).not_to have_content "Cheese Park"
  end

  scenario "sees park reviews" do
    boston_common = Park.create(name: "Boston Common", address: "139 Tremont St.", city: "Boston", state: "MA", zip: "02111", category: "State")
    review1 = Review.create(rating: 5, body: "This is a great park.", park_id: boston_common.id)
    review2 = Review.create(rating: 1, body: "This park was terrible.", park_id: boston_common.id)

    visit park_path(boston_common)

    expect(page).to have_content "Rating: 5 stars"
    expect(page).to have_content review1.created_at.strftime("%B %d %Y")
    expect(page).to have_content "Review: This is a great park."
    expect(page).to have_content "Rating: 1 star"
    expect(page).not_to have_content "Rating: 1 stars"
    expect(page).to have_content review2.created_at.strftime("%B %d %Y")
    expect(page).to have_content "Review: This park was terrible."
  end
end
