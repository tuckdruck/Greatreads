class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.text :description
      t.string :cover_image_url
      t.float :average_rating
      t.integer :page_length
      t.date :published_date
      t.string :publisher
      t.string :isbn
      t.string :language
      t.string :url_to_buy

      t.timestamps
    end

    add_index :books, :title
    add_index :books, :author
  end
end
