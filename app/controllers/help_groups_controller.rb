class HelpGroupsController < ApplicationController
  before_action :authenticate

  def add
    group = current_user.help_groups.find(params[:group_id])
    user_id = User.find_by(email: params[:email])&.id.to_s
    group.update!(member_ids: (group.member_ids | [user_id])) if user_id
    redirect_to dashboard_help_groups_path
  end

  def remove
    group = current_user.help_groups.find(params[:group_id])
    group.update!(member_ids: group.member_ids - [params[:user_id]])
    redirect_to dashboard_help_groups_path
  end

  def create
    current_user.help_groups.create!(name: params[:name])
    redirect_to dashboard_help_groups_path
  end
end
