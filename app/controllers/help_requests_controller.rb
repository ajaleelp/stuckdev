class HelpRequestsController < ApplicationController
  before_action :authenticate, except: :help_available
  layout 'dashboard'

  def create
    help_request = HelpRequests::CreationService.create!(create_params)
    redirect_to wait_help_request_path(help_request)
  end

  def index
    @sent_requests = current_user.help_requests.includes(:help_group).order(created_at: :desc)
    member_help_groups = HelpGroup.where("'?' = ANY (member_ids)", current_user.id)
    @received_requests = HelpRequest.where(help_group: member_help_groups)
  end

  def connect
    @help_request = HelpRequest.find(params[:id])
    return if current_user == @help_request.owner

    current_helper = @help_request.current_helper
    being_helped = current_helper.present? && (current_helper != current_user)
    raise 'Already being helped by someone else!' if being_helped

    @help_request.update!(current_helper: current_user) unless current_helper
  end

  def wait
    @help_request = current_user.help_requests.find(params[:id])
    if @help_request.current_helper_id.present?
      redirect_to connect_help_request_path(@help_request)
      return
    end
  end

  def preview
    @help_request = HelpRequest.find(params[:id])
  end

  def help_available
    render json: { help_available: HelpRequest.find(params[:id]).current_helper_id.present? }
  end

  def follow_up
    @help_request = current_user.help_requests.where.not(current_helper_id: nil).find(params[:id])
  end

  def thanks
    @help_request = HelpRequest.find(params[:id])
  end

  private

  def create_params
    params.require(:help_request).permit(:topic, :details, :help_group_id)
  end
end
