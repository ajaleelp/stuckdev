class HelpRequestsController < ApplicationController
  before_action :authenticate
  layout 'dashboard'

  def create
    help_request = HelpRequests::CreationService.create!(create_params)
    redirect_to "https://meet.jit.si/#{help_request.room_name}"
  end

  def index
    @sent_requests = current_user.help_requests.includes(:help_group).order(created_at: :desc)
    member_help_groups = HelpGroup.where("'?' = ANY (member_ids)", current_user.id)
    @received_requests = HelpRequest.where(help_group: member_help_groups)
  end

  def connect
    @help_request = HelpRequest.find(params[:id])
  end

  private

  def create_params
    params.require(:help_request).permit(:topic, :details, :help_group_id)
  end
end
