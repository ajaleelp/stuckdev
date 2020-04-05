# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_05_142334) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "help_groups", force: :cascade do |t|
    t.string "name"
    t.string "member_ids", default: [], array: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "owner_id"
    t.index ["owner_id"], name: "index_help_groups_on_owner_id"
  end

  create_table "help_requests", force: :cascade do |t|
    t.string "topic"
    t.text "details"
    t.bigint "help_group_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "current_helper_id"
    t.index ["current_helper_id"], name: "index_help_requests_on_current_helper_id"
    t.index ["help_group_id"], name: "index_help_requests_on_help_group_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider"
    t.string "uid"
    t.string "email"
    t.string "first_name"
    t.string "last_name"
    t.string "picture"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.jsonb "subscription"
  end

  add_foreign_key "help_groups", "users", column: "owner_id"
  add_foreign_key "help_requests", "help_groups"
  add_foreign_key "help_requests", "users", column: "current_helper_id"
end
