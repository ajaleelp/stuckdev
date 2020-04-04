module HelpRequests
  class CreationService
    def self.create!(create_params)
      help_request = HelpRequest.create!(create_params)
      HelpRequests::CirculateService.new(help_request).circulate!
      help_request
    end
  end
end