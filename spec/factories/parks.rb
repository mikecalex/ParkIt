FactoryGirl.define do
  factory :park do
    name "Boston Common"
    address "123 Main Street"
    city "Boston"
    state "MA"
    zip "02155"
    category "other"
    description "Best park ever."
    user
  end
end
