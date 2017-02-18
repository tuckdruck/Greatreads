class CreateBookshelves < ActiveRecord::Migration[5.0]
  def change
    create_table :bookshelves do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
    end

    add_index :bookshelves, [:title, :user_id], unique: true
    add_index :bookshelves, :user_id
  end
end
