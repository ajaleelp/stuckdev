class NotificationsController < ApplicationController
  before_action :authenticate
  skip_before_action :verify_authenticity_token, only: :subscribe

  def subscribe
    current_user.update!(subscription: params[:subscription])
    head :ok
  end
end
