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
harrypotter1 = Book.create!(title: "HP1", author: "JKR")
song_of_ice_and_fire = Book.create!(title: "A Song of Ice and Fire", author: "GRRM")
great_gatsby = Book.create!(title: "The Great Gatsby", author: "F. Scott Fitzgerald")
i_robot = Book.create!(title: "I, Robot", author: "Isaac Asimov")
animal_farm = Book.create!(title: "Animal Farm", author: "George Orwell")

Bookshelf.destroy_all
my_favorite_books = Bookshelf.create!(title: "my favorite books", user_id: me.id)
classics = Bookshelf.create!(title: "classics", user_id: guest.id)

BookTagging.destroy_all
BookTagging.create!(book_id: harrypotter1.id, bookshelf_id: my_favorite_books.id)
BookTagging.create!(book_id: song_of_ice_and_fire.id, bookshelf_id: my_favorite_books.id)
BookTagging.create!(book_id: great_gatsby.id, bookshelf_id: my_favorite_books.id)
BookTagging.create!(book_id: i_robot.id, bookshelf_id: classics.id)
BookTagging.create!(book_id: great_gatsby.id, bookshelf_id: classics.id)
BookTagging.create!(book_id: animal_farm.id, bookshelf_id: classics_id)
