require "rails_helper"

feature "visitor sees list of parks" do
  scenario "sees park list" do
    boston_common = Park.create(name: "Boston Common", address: "139 Tremont St.", city: "Boston", state: "MA", zip: "02111", category: "State")
    cheese_park = Park.create(name: "Cheese Park", address: "139 Cheesemont St.", city: "Boston", state: "MA", zip: "02111", category: "Cheese")

    visit parks_path

    expect(page).to have_content "Parks"
    expect(page).to have_content "Boston Common"
    expect(page).to have_content "Cheese Park"
  end
end
