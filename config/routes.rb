Rails.application.routes.draw do
  resources :situation_choices
  resources :character_choices
  resources :choices
  resources :situations
  resources :collected_items
  resources :items
  resources :characters
  post "/login", to: "sessions#create"
  post "/signup", to: "characters#create"
  delete "/logout", to: "sessions#destroy"

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
