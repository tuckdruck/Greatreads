# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
guest = User.create!(username: "guest", password: "password")
me = User.create!(username: "avital", password: "magichat12")
user2 = User.create!(username: "drucker", password: "magichat21")

Book.destroy_all
harrypotter1 = Book.create!(
  title: "HP1",
  author: "JKR",
  cover_image_url: "https://upload.wikimedia.org/wikipedia/en/b/bf/Harry_Potter_and_the_Sorcerer's_Stone.jpg",
  average_rating: 4.43,
  page_length: 320,
  published_date: DateTime.new(1997, 6, 26),
  publisher:  "Arthur A. Levine Books",
  isbn: "0439554934",
  url_to_buy: "https://www.amazon.com/gp/product/0439554934/ref=x_gr_w_glide_bb?ie=UTF8&tag=x_gr_w_glide_bb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0439554934&SubscriptionId=1MGPYB6YW3HWK55XCGG2"
)
song_of_ice_and_fire = Book.create!(
  title: "A Song of Ice and Fire",
  author: "George R.R. Martin",
  cover_image_url: "https://upload.wikimedia.org/wikipedia/en/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg",
  average_rating: 4.44
)
great_gatsby = Book.create!(title: "The Great Gatsby", author: "F. Scott Fitzgerald", cover_image_url: "https://upload.wikimedia.org/wikipedia/en/f/f7/TheGreatGatsby_1925jacket.jpeg", average_rating: 3.88)
i_robot = Book.create!(title: "I, Robot", author: "Isaac Asimov", cover_image_url: "https://upload.wikimedia.org/wikipedia/en/8/8e/I_Robot_-_Runaround.jpg", average_rating: 4.17)
macbeth = Book.create!(title: "Macbeth", author: "William Shakespeare", cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Voodoo-Macbeth-Poster.jpg", average_rating: 3.88)

storm_of_swords = Book.create!(title: "A Storm of Swords", author: "GRRM")
clash_of_kings = Book.create!(title: "A Clash of Kings", author: "GRRM")
feast_for_crows = Book.create!(title: "A Feast for Crows", author: "GRRM")
dance_with_dragons = Book.create!(title: "A Dance with Dragons", author: "GRRM")
jane_eyre = Book.create!(title: "Jane Eyre", author: "Charlotte Bronte")
beowulf = Book.create!(title: "Beowulf", author: "Unknown")


Bookshelf.destroy_all
my_favorite_books = Bookshelf.create!(title: "my favorite books", user_id: me.id)
classics = Bookshelf.create!(title: "classics", user_id: me.id)
game_of_thrones = Bookshelf.create!(title: "game of thrones", user_id: user2.id)
english_books = Bookshelf.create!(title: "english books", user_id: user2.id)

BookTagging.destroy_all
BookTagging.create!(book_id: harrypotter1.id, bookshelf_id: my_favorite_books.id)
BookTagging.create!(book_id: song_of_ice_and_fire.id, bookshelf_id: my_favorite_books.id)
BookTagging.create!(book_id: great_gatsby.id, bookshelf_id: my_favorite_books.id)
BookTagging.create!(book_id: i_robot.id, bookshelf_id: classics.id)
BookTagging.create!(book_id: great_gatsby.id, bookshelf_id: classics.id)
BookTagging.create!(book_id: macbeth.id, bookshelf_id: classics.id)

BookTagging.create!(book_id: storm_of_swords.id, bookshelf_id: game_of_thrones.id)
BookTagging.create!(book_id: song_of_ice_and_fire.id, bookshelf_id: game_of_thrones.id)
BookTagging.create!(book_id: clash_of_kings.id, bookshelf_id: game_of_thrones.id)
BookTagging.create!(book_id: feast_for_crows.id, bookshelf_id: game_of_thrones.id)
BookTagging.create!(book_id: dance_with_dragons.id, bookshelf_id: game_of_thrones.id)

BookTagging.create!(book_id: jane_eyre.id, bookshelf_id: english_books.id)
BookTagging.create!(book_id: beowulf.id, bookshelf_id: english_books.id)
