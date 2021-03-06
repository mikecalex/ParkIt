Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :parks, except: [:show] do
    collection do
      get :search
    end
  end

  namespace :api do
    namespace :v1 do
      resources :parks, only: [:index, :show, :create]
      resources :reviews, only: [:index, :show, :create]
      resources :votes
      resources :users
    end
  end

  root 'parks#index'
  get "*path", to: 'parks#index'

end
