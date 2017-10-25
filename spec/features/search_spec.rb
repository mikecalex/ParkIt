require "rails_helper"

feature "visitor searches for info in search bar" do
  scenario 'user searches parks by keyword' do
    park1 = FactoryGirl.create(:park)
    park2 = Park.create(
      address: "blah",
      city: "blah",
      state: "blah",
      zip: "02130",
      name: "blah",
      photo_url: "blah",
      description: "blah",
      category: "blah",
      user_id: 1
    )

    visit root_path
    fill_in "search", with: "best park ever"
    click_button "Search"

    visit search_parks_path

    expect(page).to have_content(park1.name)
    expect(page).to_not have_content(park2.name)
  end
end
