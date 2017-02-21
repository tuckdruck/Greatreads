# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170221023153) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "book_taggings", force: :cascade do |t|
    t.integer  "bookshelf_id", null: false
    t.integer  "book_id",      null: false
    t.date     "date_read"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["book_id"], name: "index_book_taggings_on_book_id", using: :btree
    t.index ["bookshelf_id", "book_id"], name: "index_book_taggings_on_bookshelf_id_and_book_id", unique: true, using: :btree
  end

  create_table "books", force: :cascade do |t|
    t.string   "title",           null: false
    t.string   "author",          null: false
    t.text     "description"
    t.string   "cover_image_url"
    t.float    "average_rating"
    t.integer  "page_length"
    t.date     "published_date"
    t.string   "publisher"
    t.string   "isbn"
    t.string   "language"
    t.string   "url_to_buy"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["author"], name: "index_books_on_author", using: :btree
    t.index ["title"], name: "index_books_on_title", using: :btree
  end

  create_table "bookshelves", force: :cascade do |t|
    t.string  "title",   null: false
    t.integer "user_id", null: false
    t.index ["title", "user_id"], name: "index_bookshelves_on_title_and_user_id", unique: true, using: :btree
    t.index ["user_id"], name: "index_bookshelves_on_user_id", using: :btree
  end

  create_table "statuses", force: :cascade do |t|
    t.integer "user_id",   null: false
    t.integer "book_id",   null: false
    t.string  "status",    null: false
    t.date    "date_read"
    t.index ["book_id"], name: "index_statuses_on_book_id", using: :btree
    t.index ["user_id", "book_id"], name: "index_statuses_on_user_id_and_book_id", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
