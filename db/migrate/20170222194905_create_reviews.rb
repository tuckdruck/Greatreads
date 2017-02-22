class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :book_id, null: false
    end

    add_index :reviews, [:user_id, :book_id], unique: true
    add_index :reviews, :book_id
  end
end
