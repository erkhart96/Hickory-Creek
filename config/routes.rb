Rails.application.routes.draw do
  resources :collected_items
  resources :items
  resources :characters
  get '/hello', to: 'application#hello_world'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
