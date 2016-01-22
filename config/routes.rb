Rails.application.routes.draw do
  devise_for :users

  root 'articles#index'

  resources :users
  resources :articles
end
