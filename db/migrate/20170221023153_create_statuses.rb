class CreateStatuses < ActiveRecord::Migration[5.0]
  def change
    create_table :statuses do |t|
      t.integer :user_id, null: false
      t.integer :book_id, null: false
      t.string :status, null: false
      t.date :date_read
    end

    add_index :statuses, [:user_id, :book_id], unique: true
    add_index :statuses, :book_id
  end
end
