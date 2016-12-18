Rails.application.routes.draw {
  devise_for :users

  root 'articles#index'

  resources :users
  resources :articles
}
