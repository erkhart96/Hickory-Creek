# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_27_031239) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "character_choices", force: :cascade do |t|
    t.bigint "character_id", null: false
    t.bigint "choice_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_character_choices_on_character_id"
    t.index ["choice_id"], name: "index_character_choices_on_choice_id"
  end

  create_table "characters", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.integer "health"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "choices", force: :cascade do |t|
    t.string "choice_text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "collected_items", force: :cascade do |t|
    t.integer "character_id"
    t.integer "item_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.integer "durability"
    t.integer "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "situation_choices", force: :cascade do |t|
    t.bigint "situation_id", null: false
    t.bigint "choice_id", null: false
    t.boolean "outcome"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["choice_id"], name: "index_situation_choices_on_choice_id"
    t.index ["situation_id"], name: "index_situation_choices_on_situation_id"
  end

  create_table "situations", force: :cascade do |t|
    t.string "story_text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "location"
  end

  add_foreign_key "character_choices", "characters"
  add_foreign_key "character_choices", "choices"
  add_foreign_key "situation_choices", "choices"
  add_foreign_key "situation_choices", "situations"
end
