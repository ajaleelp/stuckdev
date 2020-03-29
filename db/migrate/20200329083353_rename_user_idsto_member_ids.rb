class RenameUserIdstoMemberIds < ActiveRecord::Migration[6.0]
  def change
    rename_column :help_groups, :user_ids, :member_ids
  end
end
