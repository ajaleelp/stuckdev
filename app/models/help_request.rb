class HelpRequest < ApplicationRecord
  belongs_to :help_group
  has_one :owner, through: :help_group

  def room_name
    "stuckdev-request-#{id}"
  end
end
