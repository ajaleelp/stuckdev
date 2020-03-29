class HelpGroup < ApplicationRecord
  belongs_to :owner, class_name: 'User'
  has_many :help_requests
end
