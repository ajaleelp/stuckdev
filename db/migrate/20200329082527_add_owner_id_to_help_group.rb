class AddOwnerIdToHelpGroup < ActiveRecord::Migration[6.0]
  def change
    add_reference :help_groups, :owner, index: true
    add_foreign_key :help_groups, :users, column: :owner_id
  end
end
