class HelpRequestsController < ApplicationController
  before_action :authenticate
  layout 'dashboard'

  def create
    HelpRequests::CreationService.create!(create_params)
    redirect_to help_requests_path
  end

  def index
    @requests = current_user.help_requests.includes(:help_group).order(created_at: :desc)
  end

  private

  def create_params
    params.require(:help_request).permit(:topic, :details, :help_group_id)
  end
end
