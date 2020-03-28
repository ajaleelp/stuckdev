class HomeController < ApplicationController
  def index
    redirect_to dashboard_path if current_user
  end

  def subscribe
    head :ok
  end
end
