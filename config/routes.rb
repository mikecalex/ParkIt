Rails.application.routes.draw do
  resources :parks, only: [:index]
end
