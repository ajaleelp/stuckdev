class HelpRequest < ApplicationRecord
  belongs_to :help_group
  has_one :owner, through: :help_group
  belongs_to :current_helper, class_name: 'User', optional: true

  def room_name
    "stuckdev-request-#{id}"
  end
end
