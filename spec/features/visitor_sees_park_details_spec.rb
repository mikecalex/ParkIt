require "rails_helper"

feature "visitor sees details of individual park" do
  scenario "sees park details" do
    boston_common = Park.create(name: "Boston Common", address: "139 Tremont St.", city: "Boston", state: "MA", zip: "02111", category: "State")

    visit park_path(boston_common)

    expect(page).to have_content "Boston Common"
    expect(page).to have_content "139 Tremont St."
    expect(page).to have_content "Boston"
    expect(page).to have_content "MA"
    expect(page).to have_content "02111"
    expect(page).to have_content "State Park"
  end
end
