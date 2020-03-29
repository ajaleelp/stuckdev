class HelpGroupsController < ApplicationController
  before_action :authenticate

  def add
    group = HelpGroup.find(params[:group_id])
    user_id = User.find_by(email: params[:email])&.id.to_s
    group.update!(user_ids: (group.user_ids | [user_id])) if user_id
    redirect_to dashboard_help_groups_path
  end

  def remove
    group = HelpGroup.find(params[:group_id])
    group.update!(user_ids: group.user_ids - [params[:user_id]])
    redirect_to dashboard_help_groups_path
  end

  def new
  end
end
