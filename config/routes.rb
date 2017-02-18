Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
  end

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
  end

  resources :books, only: [:show, :index]

  namespace :api, defaults: { format: :json } do
    resources :users, defaults: { format: :json } do
      resources :bookshelves, only: [:show, :index, :create, :update, :destroy]
    end
  end

  namespace :api, defaults: { format: :json } do
    resources :bookshelves, defaults: { format: :json } do
      resources :books, only: [:index]
    end
  end

  namespace :api, defaults: { format: :json } do
    resources :users, defaults: { format: :json } do
      resources :books, only: [:index, :update]
    end
  end

  namespace :api, defaults: { format: :json } do
    resources :books, defaults: { format: :json } do
      resources :bookshelves, only: [:index]
    end
  end

  namespace :api, defaults: { format: :json } do
    resources :book_taggings, only: [:create, :destroy, :show]
  end



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
