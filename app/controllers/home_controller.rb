class HomeController < ApplicationController
  def index
    if current_user
      if current_user.help_groups.present?
        redirect_to dashboard_path and return
      else
        redirect_to dashboard_path
      end
    end
  end
end
