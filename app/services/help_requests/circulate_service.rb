module HelpRequests
  class CirculateService
    def initialize(help_request)
      @help_request = help_request
      @help_group = @help_request.help_group
      @target_users = User.where(id: @help_group.member_ids).where.not(subscription: nil)
    end

    def circulate!
      @target_users.each do |user|
        NotificationService.new(user).notify(title: title, message: message)
      end
    end

    private

    def title
      @title ||= begin
        name = User.find_by(id: @help_group.owner_id).first_name
        "#{name} need some help. Can you check this out?"
      end
    end

    def message
      @message ||= @help_request.topic
    end
  end
end