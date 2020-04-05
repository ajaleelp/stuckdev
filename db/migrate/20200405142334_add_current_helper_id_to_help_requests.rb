class AddCurrentHelperIdToHelpRequests < ActiveRecord::Migration[6.0]
  def change
    add_reference :help_requests, :current_helper, index: true
    add_foreign_key :help_requests, :users, column: :current_helper_id
  end
end
