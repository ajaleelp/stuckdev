class HelpRequestsController < ApplicationController
  before_action :authenticate
  layout 'dashboard'

  def create
    help_request = HelpRequests::CreationService.create!(create_params)
    redirect_to "https://meet.jit.si/#{help_request.room_name}"
  end

  def index
    @requests = current_user.help_requests.includes(:help_group).order(created_at: :desc)
  end

  def connect
    @help_request = HelpRequest.find(params[:id])
  end

  private

  def create_params
    params.require(:help_request).permit(:topic, :details, :help_group_id)
  end
end
