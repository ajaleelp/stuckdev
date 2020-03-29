class CreateHelpGroups < ActiveRecord::Migration[6.0]
  def change
    create_table :help_groups do |t|
      t.string :name
      t.string :user_ids, array: true, default: []

      t.timestamps
    end
  end
end
