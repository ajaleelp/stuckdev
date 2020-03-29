class NotificationService
  def initialize(user)
    @user = user
    @subscription = @user.subscription&.deep_symbolize_keys!
  end
  
  def notify(message)
    raise 'Tried to notify without subscription!' unless @subscription

    Webpush.payload_send(
      message: message,
      endpoint: @subscription[:endpoint],
      p256dh: @subscription[:keys][:p256dh],
      auth: @subscription[:keys][:auth],
      vapid: vapid
    )
  end

  private

  def vapid
    {
      subject: "mailto:ajaleelp@gmail.com",
      public_key: Rails.application.credentials.vapid[:public_key],
      private_key: Rails.application.credentials.vapid[:private_key]
    }
  end
end