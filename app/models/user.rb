class User < ApplicationRecord
  has_many :help_groups, foreign_key: :owner_id
  has_many :help_requests, through: :help_groups

  def self.find_or_create_from_auth_hash(auth)
    where(email: auth.info.email).first_or_initialize.tap do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.first_name = (auth.info&.first_name || auth.info.name).capitalize
      user.last_name = auth.info&.last_name&.capitalize
      user.email = auth.info.email
      user.picture = auth.info.image
      user.save!
    end
  end
end
