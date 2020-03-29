Rails.application.routes.draw do
  get 'notifications/subscribe'
  patch 'help_groups/add'
  patch 'help_groups/remove'
  post 'help_groups/create'
  get '/dashboard', to: 'dashboard#show'
  get '/dashboard/help_groups', to: 'dashboard#help_groups'
  get 'sessions/create'
  get 'sessions/destroy'
  root 'home#index'
  post "/subscribe", to: "notifications#subscribe"

  get 'google_login', to: redirect('/auth/google_oauth2'), as: 'google_login'
  get 'github_login', to: redirect('/auth/github'), as: 'github_login'
  get 'logout', to: 'sessions#destroy', as: 'logout'
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
end
