class DashboardController < ApplicationController
  before_action :authenticate
  layout 'dashboard'

  def show
    @help_group_names = current_user.help_groups.all.pluck(:name)
  end

  def help_groups
    @help_groups = current_user.help_groups.all.order(:name)
    @users = User.all.order(:first_name)
  end
end
