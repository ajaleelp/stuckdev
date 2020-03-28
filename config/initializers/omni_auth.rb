Rails.application.config.middleware.use OmniAuth::Builder do
  google_credentials = Rails.application.credentials.google_oauth
  provider :google_oauth2, google_credentials[:client_id], google_credentials[:secret]

  github_credentials = Rails.application.credentials.github_oauth
  provider :github, github_credentials[:client_id], github_credentials[:secret]
end