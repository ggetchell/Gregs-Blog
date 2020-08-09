Rails.application.routes.draw do
  #mount Ckeditor::Engine => '/ckeditor'
  root 'homes#index'
  devise_for :users
  
  get '/posts', to: "homes#index"
  get '/posts/new', to: "homes#index"
  get '/posts/:id', to: "homes#index"

  resources :posts, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :create, :edit, :update, :show, :destroy] do
        resources :comments, only: [:create, :desctroy]
      end
    end
  end
end
