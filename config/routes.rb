Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show, :create, :update, :destroy] do
      resources :reviews, only: [:index, :create, :update]
    end
    resources :reviews, only: [:destroy]
    resources :search, only: [:index]
    resources :shopping_carts, only: [:create]
    resources :shopping_cart_items, only: [:index, :create, :destroy]
  end
end
