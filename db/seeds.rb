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
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  cover_image_url: ActionController::Base.helpers.image_path('Harry_Potter_1.jpg'),
  average_rating: 4.43,
  page_length: 320,
  published_date: DateTime.new(1997, 6, 26),
  publisher:  "Arthur A. Levine Books",
  isbn: "0439554934",
  url_to_buy: "https://www.amazon.com/gp/product/0439554934/ref=x_gr_w_glide_bb?ie=UTF8&tag=x_gr_w_glide_bb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0439554934&SubscriptionId=1MGPYB6YW3HWK55XCGG2",
  description: <<-HEREDOC
    Harry Potter and the Philosopher's Stone is the first novel in the Harry Potter series and J. K. Rowling's debut novel, first published in 1997 by Bloomsbury.
    It was published in the United States as Harry Potter and the Sorcerer's Stone by Scholastic Corporation in 1998.
    The plot follows Harry Potter, a young wizard who discovers his magical heritage as he makes close friends and a few enemies in his first year at the Hogwarts School of Witchcraft and Wizardry.
    With the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just a year old.
    HEREDOC
)

song_of_ice_and_fire = Book.create!(
  title: "Game of Thrones",
  author: "George R.R. Martin",
  cover_image_url: ActionController::Base.helpers.image_path('A_Game_of_Thrones.jpeg'),
  average_rating: 4.44,
  page_length: 835,
  published_date: DateTime.new(2005, 8),
  publisher: "Bantam",
  isbn: "0553588486",
  url_to_buy: "https://www.amazon.com/gp/product/0553588486/ref=x_gr_w_glide_bb?ie=UTF8&tag=x_gr_w_glide_bb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0553588486&SubscriptionId=1MGPYB6YW3HWK55XCGG2",
  description: <<-HEREDOC
    A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by American author George R. R. Martin.
    It was first published on August 1, 1996.
    In the novel, recounting events from various points of view, Martin introduces the plot-lines of the noble houses of Westeros, the Wall, and the Targaryens.
  HEREDOC
)

great_gatsby = Book.create!(
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  cover_image_url: ActionController::Base.helpers.image_path('The_Great_Gatsby.jpeg'),
  average_rating: 3.88,
  page_length: 180,
  published_date: DateTime.new(1925, 4),
  publisher: "Scribner",
  isbn: "0743273567",
  url_to_buy: "https://www.amazon.com/gp/product/0743273567/ref=x_gr_w_bb?ie=UTF8&tag=x_gr_w_bb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0743273567&SubscriptionId=1MGPYB6YW3HWK55XCGG2",
  description: <<-HEREDOC
    The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional town of West Egg on prosperous Long Island in the summer of 1922.
    The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion and obsession for the beautiful former debutante Daisy Buchanan.
    Considered to be Fitzgerald's magnum opus, The Great Gatsby explores themes of decadence, idealism, resistance to change, social upheaval, and excess, creating a portrait of the Jazz Age or the
    Roaring Twenties that has been described as a cautionary tale regarding the American Dream.
  HEREDOC
)

i_robot = Book.create!(
  title: "I, Robot",
  author: "Isaac Asimov",
  cover_image_url: ActionController::Base.helpers.image_path('I_Robot.jpg'),
  average_rating: 4.17,
  page_length: 225,
  published_date: DateTime.new(1950, 12, 2),
  publisher: "Spectra",
  isbn: "0553803700",
  url_to_buy: "https://www.amazon.com/gp/product/0553803700/ref=x_gr_w_glide_bb?ie=UTF8&tag=x_gr_w_glide_bb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0553803700&SubscriptionId=1MGPYB6YW3HWK55XCGG2",
  description: <<-HEREDOC
    I, Robot is a collection of 9 science fiction short stories by Isaac Asimov.
    The stories originally appeared in the American magazines Super Science Stories and Astounding Science Fiction between 1940 and 1950 and were then compiled into a book for stand-alone publication by Gnome Press in 1950, in an initial edition of 5,000 copies.
    The stories are woven together by a framing narrative in which the fictional Dr. Susan Calvin tells each story to a reporter (who serves as the narrator) in the 21st century.
    Although the stories can be read separately, they share a theme of the interaction of humans, robots, and morality,
    and when combined they tell a larger story of Asimov's fictional history of robotics.
  HEREDOC
)

macbeth = Book.create!(
  title: "Macbeth",
  author: "William Shakespeare",
  cover_image_url: ActionController::Base.helpers.image_path('Macbeth.jpg'),
  average_rating: 3.88,
  page_length: 249,
  published_date: DateTime.new(1606),
  publisher: "Simon & Schuster",
  isbn: "0743477103",
  url_to_buy: "https://www.amazon.com/gp/product/0743477103/ref=x_gr_w_glide_bb?ie=UTF8&tag=x_gr_w_glide_bb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0743477103&SubscriptionId=1MGPYB6YW3HWK55XCGG2",
  description: <<-HEREDOC
    Macbeth (full title The Tragedy of Macbeth) is a tragedy by William Shakespeare; it is thought to have been first performed in 1606.
    It dramatises the damaging physical and psychological effects of political ambition on those who seek power for its own sake.
    Of all the plays that Shakespeare wrote during the reign of James I, who was patron of Shakespeare's acting company, Macbeth most clearly reflects the playwright's relationship with his sovereign.
    It was first published in the Folio of 1623, possibly from a prompt book, and is his shortest tragedy."
  HEREDOC
)


storm_of_swords = Book.create!(
  title: "A Storm of Swords",
  author: "George R.R. Martin",
  cover_image_url: ActionController::Base.helpers.image_path('A_Storm_of_Swords.jpg'),
  average_rating: 4.54,
  page_length: 1177,
  published_date: DateTime.new(2000, 8, 8),
  publisher: "Bantam",
  isbn: "055357342X",
  url_to_buy: "https://www.amazon.com/gp/product/055357342X/ref=x_gr_w_glide_bb?ie=UTF8&tag=x_gr_w_glide_bb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=055357342X&SubscriptionId=1MGPYB6YW3HWK55XCGG2",
  description: <<-HEREDOC
    A Storm of Swords is the third of seven planned novels in A Song of Ice and Fire, a fantasy series by American author George R. R. Martin.
    It was first published on August 8, 2000, in the United Kingdom, with a United States edition following in November 2000.
    A Storm of Swords picks up the story slightly before the end of its predecessor, A Clash of Kings.
    The Seven Kingdoms of Westeros are still in the grip of the War of the Five Kings, wherein Robb Stark, Balon Greyjoy, Joffrey Baratheon, and Stannis Baratheon compete for the Iron Throne.
    Meanwhile, a large host of wildlings approach the Wall under the leadership of Mance Rayder, the self-proclaimed "King Beyond the Wall", with only the undermanned Night's Watch in opposition.
    Finally, Daenerys Targaryen approaches Pentos.
  HEREDOC
)

clash_of_kings = Book.create!(
  title: "A Clash of Kings",
  author: "George R.R. Martin",
  cover_image_url: ActionController::Base.helpers.image_path('A_Clash_of_Kings.jpg'),
  average_rating: 4.4,
  page_length: 761,
  published_date: DateTime.new(1998, 11, 16),
  publisher: "Bantam",
  isbn: "0553381695",
  url_to_buy: "https://www.amazon.com/gp/product/0553381695/ref=x_gr_w_glide_bb?ie=UTF8&tag=x_gr_w_glide_bb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0553381695&SubscriptionId=1MGPYB6YW3HWK55XCGG2",
  description: <<-HEREDOC
    A Clash of Kings is the second novel in A Song of Ice and Fire, an epic fantasy series by American author George R. R. Martin expected to consist of seven volumes.
    It was first published on 16 November 1998 in the United Kingdom, although the first United States edition did not follow until March 1999.
    A Clash of Kings depicts the Seven Kingdoms of Westeros in civil war, while the Night's Watch mounts a reconnaissance to investigate the mysterious people known as wildlings.
    Meanwhile, Daenerys Targaryen continues her plan to reconquer the Seven Kingdoms.
  HEREDOC
)

feast_for_crows = Book.create!(
  title: "A Feast for Crows",
  author: "George R.R. Martin",
  cover_image_url: ActionController::Base.helpers.image_path('A_Feast_for_Crows.jpg'),
  average_rating: 4.09,
  page_length: 1061,
  published_date: DateTime.new(2005, 10, 17),
  publisher: "Bantam Books",
  isbn: "055358202X",
  url_to_buy: "https://www.amazon.com/gp/product/055358202X/ref=x_gr_w_glide_bb?ie=UTF8&tag=x_gr_w_glide_bb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=055358202X&SubscriptionId=1MGPYB6YW3HWK55XCGG2",
  description: <<-HEREDOC
    The War of the Five Kings is slowly coming to its end.
    Stannis Baratheon has gone to the aid of the Wall, where Jon Snow has become the 998th Lord Commander of the Night's Watch.
    King Tommen Baratheon, Joffrey's eight-year-old brother, now rules in King's Landing under his mother, Cersei Lannister.
    Brienne, the Maid of Tarth, is on a mission to find Sansa Stark, aided by Jaime Lannister.
    Sansa Stark is hiding in the Vale, protected by Petyr Baelish, who has murdered his wife Lysa Arryn and named himself Protector of the Vale and guardian of eight-year-old Lord Robert Arryn.
  HEREDOC
)

dance_with_dragons = Book.create!(
  title: "A Dance with Dragons",
  author: "George R.R. Martin",
  cover_image_url: ActionController::Base.helpers.image_path('A_Dance_with_Dragons.jpg'),
  average_rating: 4.3,
  page_length: 1125,
  published_date: DateTime.new(2011, 7, 12),
  publisher: "Bantam",
  url_to_buy: "https://www.amazon.com/s/ref=x_gr_w_bb?tag=x_gr_w_bb-20&creative=374001&campaign=211041&adid=082VK13VJJCZTQYGWWCZ&index=books&keyword=A+Dance+with+Dragons",
  description: <<-HEREDOC
    A Dance with Dragons is the fifth of seven planned novels in the epic fantasy series A Song of Ice and Fire by American author George R. R. Martin.
    In some areas the paperback edition was published in two parts titled Dreams and Dust and After the Feast.
    It was the first novel in the series to be published following the commencement of the HBO series adaptation, Game of Thrones, and runs to 1,040 pages.
  HEREDOC
)

nineteen84 = Book.create!(
  title: "1984",
  author: "George Orwell",
  cover_image_url: ActionController::Base.helpers.image_path('1984.jpg'),
  average_rating: 4.13,
  page_length: 328,
  published_date: DateTime.new(1949, 6, 8),
  publisher: "Signet Classics",
  url_to_buy: "https://www.amazon.com/gp/product/0451524934/ref=x_gr_w_glide_bb?ie=UTF8&tag=x_gr_w_glide_bb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0451524934&SubscriptionId=1MGPYB6YW3HWK55XCGG2",
  description: <<-HEREDOC
    Nineteen Eighty-Four, often published as 1984, is a dystopian novel by English author George Orwell published in 1949.
    The novel is set in Airstrip One (formerly known as Great Britain), a province of the superstate Oceania in a world of perpetual war, omnipresent government surveillance, and public manipulation.
    The superstate and its residents are dictated to by a political regime euphemistically named English Socialism, shortened to "Ingsoc" in Newspeak, the government's invented language.
    The superstate is under the control of the privileged elite of the Inner Party, a party and government that persecutes individualism and independent thinking as "thoughtcrime", which is enforced by the "Thought Police".
  HEREDOC
)

beowulf = Book.create!(
  title: "Beowulf",
  author: "Unknown",
  cover_image_url: ActionController::Base.helpers.image_path('Beowulf.jpg'),
  average_rating: 3.41,
  page_length: 213,
  published_date: DateTime.new(2001, 2, 17),
  publisher: "W.W. Norton & Company",
  url_to_buy: "https://www.amazon.com/gp/product/0393320979/ref=x_gr_w_glide_bb?ie=UTF8&tag=x_gr_w_glide_bb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0393320979&SubscriptionId=1MGPYB6YW3HWK55XCGG2",
  description: <<-HEREDOC
    Beowulf is an Old English epic poem consisting of 3182 alliterative lines.
    It may be the oldest surviving long poem in Old English and is commonly cited as one of the most important works of Old English literature.
    A date of composition is a matter of contention among scholars; the only certain dating pertains to the manuscript, which was produced between 975 and 1025.
    The author was an anonymous Anglo-Saxon poet, referred to by scholars as the "Beowulf poet".
  HEREDOC
)

hp2 = Book.create!(
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K. Rowling",
  cover_image_url: ActionController::Base.helpers.image_path('Harry_Potter_2.jpg'),
  average_rating: 4.36,
  page_length: 341,
  published_date: Date.new(1999, 6, 2),
  publisher: "Scholastic Inc.",
  url_to_buy: "https://www.amazon.com/gp/product/0439064864/ref=x_gr_w_glide_bb?ie=UTF8&tag=x_gr_w_glide_bb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0439064864&SubscriptionId=1MGPYB6YW3HWK55XCGG2",
  description: <<-HEREDOC
    Harry Potter and the Chamber of Secrets is the second novel in the Harry Potter series, written by J. K. Rowling. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the "Chamber of Secrets" has been opened and that the "heir of Slytherin" would kill all pupils who do not come from all-magical families. These threats are found after attacks which leave residents of the school "petrified" (frozen like stone). Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.
  HEREDOC
)


hp3 = Book.create!(
  title: "Harry Potter and the Prisoner of Azkaban",
  author: "J.K. Rowling",
  cover_image_url: ActionController::Base.helpers.image_path('Harry_Potter_3.jpg'),
  average_rating: 4.52,
  page_length: 435,
  published_date: Date.new(2004, 5, 1),
  publisher: "Scholastic",
  url_to_buy: "https://www.amazon.com/gp/product/043965548X/ref=x_gr_w_glide_bb?ie=UTF8&tag=x_gr_w_glide_bb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=043965548X&SubscriptionId=1MGPYB6YW3HWK55XCGG2",
  description: <<-HEREDOC
    Harry Potter and the Prisoner of Azkaban is the third novel in the Harry Potter series, written by J. K. Rowling. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ron Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban who they believe is one of Lord Voldemort's old allies.
  HEREDOC
)

hp4 = Book.create!(
  title: "Harry Potter and the Goblet of Fire",
  author: "J.K. Rowling",
  cover_image_url: ActionController::Base.helpers.image_path('Harry_Potter_4.jpg'),
  average_rating: 4.52,
  page_length: 734,
  published_date: Date.new(2002, 9, 28),
  publisher: "Scholastic Inc.",
  url_to_buy: "https://www.amazon.com/gp/product/0439139600/ref=x_gr_w_glide_bb?ie=UTF8&tag=x_gr_w_glide_bb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0439139600&SubscriptionId=1MGPYB6YW3HWK55XCGG2",
  description: <<-HEREDOC
    Harry Potter and the Goblet of Fire is the fourth novel in the Harry Potter series, written by British author J. K. Rowling. It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry and the mystery surrounding the entry of Harry's name into the Triwizard Tournament, in which he is forced to compete.
  HEREDOC
)

hp5 = Book.create!(
  title: "Harry Potter and the Order of the Phoenix",
  author: "J.K. Rowling",
  cover_image_url: ActionController::Base.helpers.image_path('Harry_Potter_5.jpg'),
  average_rating: 4.46,
  page_length: 870,
  published_date: Date.new(2004, 8, 10),
  publisher: "Scholastic Inc",
  url_to_buy: "https://www.amazon.com/gp/product/0439358078/ref=x_gr_w_glide_bb?ie=UTF8&tag=x_gr_w_glide_bb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0439358078&SubscriptionId=1MGPYB6YW3HWK55XCGG2",
  description: <<-HEREDOC
    Harry Potter and the Order of the Phoenix is the fifth novel in the Harry Potter series, written by J. K. Rowling. It follows Harry Potter's struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L. exams, and an obstructive Ministry of Magic. The novel was published on 21 June 2003 by Bloomsbury in the United Kingdom, Scholastic in the United States, and Raincoast in Canada. Five million copies were sold in the first 24 hours of publication. It is the longest book of the series.
  HEREDOC
)

hp6 = Book.create!(
  title: "Harry Potter and the Half-Blood Prince",
  author: "J.K. Rowling",
  cover_image_url: ActionController::Base.helpers.image_path('Harry_Potter_6.jpg'),
  average_rating: 4.53,
  page_length: 652,
  published_date: Date.new(2006, 9, 16),
  publisher: "Scholastic",
  url_to_buy: "https://www.amazon.com/gp/product/0439785960/ref=x_gr_w_glide_bb?ie=UTF8&tag=x_gr_w_glide_bb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0439785960&SubscriptionId=1MGPYB6YW3HWK55XCGG2",
  description: <<-HEREDOC
    Harry Potter and the Half-Blood Prince is the sixth and penultimate novel in the Harry Potter series, written by British author J. K. Rowling. Set during protagonist Harry Potter's sixth year at Hogwarts, the novel explores the past of Harry's nemesis, Lord Voldemort, and Harry's preparations for the final battle against Voldemort alongside his headmaster and mentor Albus Dumbledore.
  HEREDOC
)

hp7 = Book.create!(
  title: "Harry Potter and the Deathly Hallows",
  author: "J.K. Rowling",
  cover_image_url: ActionController::Base.helpers.image_path('Harry_Potter_7.jpg'),
  average_rating: 4.61,
  page_length: 784,
  published_date: Date.new(2007, 7, 21),
  publisher: "Scholastic Inc",
  url_to_buy: "https://www.amazon.com/gp/product/0545010225/ref=x_gr_w_glide_bb?ie=UTF8&tag=x_gr_w_glide_bb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0545010225&SubscriptionId=1MGPYB6YW3HWK55XCGG2",
  description: <<-HEREDOC
    Harry Potter and the Deathly Hallows is the seventh and final novel of the Harry Potter series, written by British author J. K. Rowling. The book was released on 21 July 2007 by Bloomsbury Publishing in the United Kingdom, in the United States by Scholastic, and in Canada by Raincoast Books, ending the series that began in 1997 with the publication of Harry Potter and the Philosopher's Stone. The novel chronicles the events directly following Harry Potter and the Half-Blood Prince (2005), and the final confrontation between the wizards Harry Potter and Lord Voldemort, as well as revealing the previously concealed back story of several main characters. The title of the book refers to three mythical objects featured in the story, collectively known as the "Deathly Hallows" — an unbeatable wand, a stone to bring the dead to life, and a cloak of invisibility.
  HEREDOC
)

brave_new_world = Book.create!(
  title: "Brave New World",
  author: "Aldous Huxley",
  cover_image_url: ActionController::Base.helpers.image_path('Brave_New_World.jpg'),
  average_rating: 3.96,
  page_length: 268,
  published_date: Date.new(1932),
  publisher: "Harper Perennial",
  url_to_buy: "https://www.amazon.com/gp/product/0060929871/ref=x_gr_w_glide_bb?ie=UTF8&tag=x_gr_w_glide_bb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0060929871&SubscriptionId=1MGPYB6YW3HWK55XCGG2",
  description: <<-HEREDOC
    Brave New World is a novel written in 1931 by Aldous Huxley, and published in 1932. Set in London in the year AD 2540 (632 A.F.—"After Ford"—in the book), the novel anticipates developments in reproductive technology, sleep-learning, psychological manipulation, and classical conditioning that combine profoundly to change society.
  HEREDOC
)

freakonomics = Book.create!(
  title: "Freakonomics: A Rogue Economist Explores the Hidden Side of Everything",
  author: "Stephen J. Dubner",
  cover_image_url: ActionController::Base.helpers.image_path('Freakonomics.jpg'),
  average_rating: 3.93,
  page_length: 320,
  published_date: Date.new(2006, 10, 16),
  publisher: "William Morrow",
  url_to_buy: "https://www.amazon.com/gp/product/0061234001/ref=x_gr_w_glide_bb?ie=UTF8&tag=x_gr_w_glide_bb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0061234001&SubscriptionId=1MGPYB6YW3HWK55XCGG2",
  description: <<-HEREDOC
    Freakonomics: A Rogue Economist Explores the Hidden Side of Everything is the debut non-fiction book by University of Chicago economist Steven Levitt and New York Times journalist Stephen J. Dubner. It was published on April 12, 2005 by William Morrow. The book has been described as melding pop culture with economics. By late 2009, the book had sold over 4 million copies worldwide.
  HEREDOC
)

pale_blue_dot = Book.create!(
  title: "Pale Blue Dot",
  author: "Carl Sagan",
  cover_image_url: ActionController::Base.helpers.image_path('Pale_Blue_Dot.jpg'),
  average_rating: 4.32,
  page_length: 384,
  published_date: Date.new(1994),
  publisher: "Ballantine Books",
  url_to_buy: "https://www.amazon.com/gp/product/0345376595/ref=x_gr_w_glide_bb?ie=UTF8&tag=x_gr_w_glide_bb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0345376595&SubscriptionId=1MGPYB6YW3HWK55XCGG2",
  description: <<-HEREDOC
    Pale Blue Dot: A Vision of the Human Future in Space is a 1994 book by Carl Sagan. It is the sequel to Cosmos and was inspired by the famous Pale Blue Dot photograph, for which Sagan provides a poignant description. In this book, Sagan mixes philosophy about the human place in the universe with a description of the current knowledge about the Solar System. He also details a human vision for the future.
  HEREDOC
)

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

BookTagging.create!(book_id: nineteen84.id, bookshelf_id: english_books.id)
BookTagging.create!(book_id: beowulf.id, bookshelf_id: english_books.id)
