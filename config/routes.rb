Rails.application.routes.draw do
  resources :products
  resources :mushrooms
  
  root 'home#index'
end
