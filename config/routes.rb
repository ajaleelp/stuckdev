Rails.application.routes.draw do
  root 'home#index'

  patch 'help_groups/add'
  patch 'help_groups/remove'
  post 'help_groups/create'

  get '/dashboard', to: 'dashboard#show'
  get '/dashboard/help_groups', to: 'dashboard#help_groups'

  get 'sessions/create'
  get 'sessions/destroy'

  post "/subscribe", to: "notifications#subscribe"

  resources :help_requests, only: [:create, :index] do
    member do
      get '/connect', action: 'connect'
      get '/wait', action: 'wait'
      get '/preview', action: 'preview'
      get '/help_available', action: 'help_available', constraints: { format: 'json' }
      get '/follow_up', action: 'follow_up'
      get '/thanks', action: 'thanks'
      post '/pass_notification', action: 'pass_notification', constraints: { format: 'json' }
    end
  end

  get 'google_login', to: redirect('/auth/google_oauth2'), as: 'google_login'
  get 'github_login', to: redirect('/auth/github'), as: 'github_login'
  get 'logout', to: 'sessions#destroy', as: 'logout'
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'code_of_conduct', to: 'home#code_of_conduct', as: 'code_of_conduct'
end
