class CreateBookTaggings < ActiveRecord::Migration[5.0]
  def change
    create_table :book_taggings do |t|
      t.integer :bookshelf_id, null: false
      t.integer :book_id, null: false
      t.date :date_read

      t.timestamps
    end

    add_index :book_taggings, [:bookshelf_id, :book_id], unique: true
    add_index :book_taggings, :book_id
  end
end
