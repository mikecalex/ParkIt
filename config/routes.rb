Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "parks#index"

  resources :parks do
    collection do
      get :index, :show, :search
    end
  end

  namespace :api do
    namespace :v1 do
      resources :parks, only: [:index, :show]
    end
  end

  root 'parks#index'
  # get "*path", to: 'parks#index'
  get "*path", to: 'parks#index'
  # resources :parks, only: [:index]
end
