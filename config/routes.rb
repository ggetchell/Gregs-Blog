Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #root to: "posts#index"

  get '/posts', to: "homes#index"
  get '/posts/new', to: "homes#index"
  get '/posts/:id', to: "homes#index"

  resources :posts, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :new, :create, :show, :update, :destroy] do
        resources :comments, only: [:create, :destroy]
      end
    end
  end
end
