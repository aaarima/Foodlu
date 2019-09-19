
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, except: [:index]
    resources :movies, only: [:index]
    resources :series, only: [:index] do
      resources :episodes, only: [:index]
    end
    resources :genres, only: [:index]
    resources :episodes, only: [:index]
    resource :session, only: [:create, :destroy]
  end
end
