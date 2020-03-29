class DashboardController < ApplicationController
  before_action :authenticate
  layout 'dashboard'

  def show
    @help_group_names = HelpGroup.all.pluck(:name)
  end

  def help_groups
    @help_groups = HelpGroup.all
    @users = User.all
  end
end
