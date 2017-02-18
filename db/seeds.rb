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

Book.destroy_all
harrypotter1 = Book.create!(title: "HP1", author: "JKR", cover_image_url: "https://upload.wikimedia.org/wikipedia/en/b/bf/Harry_Potter_and_the_Sorcerer's_Stone.jpg", average_rating: 4.43)
song_of_ice_and_fire = Book.create!(title: "A Song of Ice and Fire", author: "GRRM", cover_image_url: "https://upload.wikimedia.org/wikipedia/en/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg", average_rating: 4.44)
great_gatsby = Book.create!(title: "The Great Gatsby", author: "F. Scott Fitzgerald", cover_image_url: "https://upload.wikimedia.org/wikipedia/en/f/f7/TheGreatGatsby_1925jacket.jpeg", average_rating: 3.88)
i_robot = Book.create!(title: "I, Robot", author: "Isaac Asimov", cover_image_url: "https://upload.wikimedia.org/wikipedia/en/8/8e/I_Robot_-_Runaround.jpg", average_rating: 4.17)
macbeth = Book.create!(title: "Macbeth", author: "William Shakespeare", cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Voodoo-Macbeth-Poster.jpg", average_rating: 3.88)

Bookshelf.destroy_all
my_favorite_books = Bookshelf.create!(title: "my favorite books", user_id: me.id)
classics = Bookshelf.create!(title: "classics", user_id: me.id)

BookTagging.destroy_all
BookTagging.create!(book_id: harrypotter1.id, bookshelf_id: my_favorite_books.id)
BookTagging.create!(book_id: song_of_ice_and_fire.id, bookshelf_id: my_favorite_books.id)
BookTagging.create!(book_id: great_gatsby.id, bookshelf_id: my_favorite_books.id)
BookTagging.create!(book_id: i_robot.id, bookshelf_id: classics.id)
BookTagging.create!(book_id: great_gatsby.id, bookshelf_id: classics.id)
BookTagging.create!(book_id: macbeth.id, bookshelf_id: classics.id)
