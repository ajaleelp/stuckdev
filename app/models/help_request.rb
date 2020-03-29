class HelpRequest < ApplicationRecord
  belongs_to :help_group
  has_one :owner, through: :help_group
end
