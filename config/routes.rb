Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:create], defaults: { format: :json } do
      resources :bookshelves, only: [:show, :index, :create, :update, :destroy]
      resources :books, only: [:index]
    end

    resources :bookshelves, defaults: { format: :json } do
      resources :books, only: [:index]
    end

    resources :books, only: [:show, :index, :update], defaults: { format: :json } do
      resources :bookshelves, only: [:index]
    end

    resources :statuses, only: [:update, :create]
  end

end
