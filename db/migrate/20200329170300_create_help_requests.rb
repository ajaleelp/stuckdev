class CreateHelpRequests < ActiveRecord::Migration[6.0]
  def change
    create_table :help_requests do |t|
      t.string :topic
      t.text :details
      t.references :help_group, null: false, foreign_key: true

      t.timestamps
    end
  end
end
