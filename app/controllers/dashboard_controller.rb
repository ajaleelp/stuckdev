class DashboardController < ApplicationController
  before_action :authenticate
  layout 'dashboard'

  def show
    @help_request = HelpRequest.new
    @help_groups = current_user.help_groups.where.not(member_ids: [])
  end

  def help_groups
    @help_groups = current_user.help_groups.all.order(:name)
    @users = User.all.order(:first_name)
  end
end
