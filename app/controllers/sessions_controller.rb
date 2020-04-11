class SessionsController < ApplicationController
  def create
    @user = User.find_or_create_from_auth_hash(request.env['omniauth.auth'])
    session[:user_id] = @user.id
    if @user.help_groups.present?
      redirect_to dashboard_path and return
    else
      redirect_to dashboard_help_groups_path and return
    end
  end

  def destroy
    current_user&.update!(subscription: nil)
    session[:user_id] = nil
    redirect_to root_path
  end
end
