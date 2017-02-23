[Greatreads][heroku] is a clone of Goodreads. It uses Ruby on Rails on the backend, a PostgreSQL database, and React and Redux on the frontend.

[heroku]: http://goodreadsclone.herokuapp.com/

Features and Implementation

Books
I implemented the app’s books feature through a books table, which includes title, author, and description columns. On the frontend, books are displayed mainly on the browse page, book show page, and My Books pages. On the browse page, books are fetched and rendered in the books index component, which displays the cover of each book. These images are links to the book show page, which displays the book’s information, as well as information about a user’s interaction with the book. Books are also displayed on the My Books page, which shows all of the books a user is associated with.

Read Statuses
Read statuses are the crux of a user’s interaction with books in Goodreads. Users must provide a read status for a book in order to associate that book with bookshelves and reviews. I implemented the read status feature through a statuses table, in which each record has a book id, user id, read status (one of “read”, “currently reading”, or “to read”), and date read. When logged in, a user’s associated books are retrieved by joining the statuses table on the users and books tables. Read statuses are displayed on the My Books page, which can also filter by read status.

Bookshelves
Users can create, rename, and remove bookshelves. I implemented the bookshelves feature through a bookshelves table with user id and title columns. In order to retrieve books on a bookshelf, I created a book taggings join table, which has book id and bookshelf id columns. On the frontend, all of a user’s bookshelves are fetched. The My Books page allows users to filter their books by bookshelf, and displays all of the bookshelves a book belongs to. The app’s Fields Form component removes and adds bookshelves for a book by creating and destroying book taggings on the backend.

Reviews
I implemented reviews through a reviews table, which has user id and book id columns. The Book Show page component fetches and displays reviews filtered by book id. A book is fetched and displayed with the logged-in user’s review, if written. Both the My Books and Book Show pages can display modals for creating, updating, or removing a review.

Future Directions for Greatreads
Book search: this feature would allow for autocompletion by rendering book titles matching the user’s input in the search bar. Each of the book titles would link to the respective book’s show page.
Book ratings: users would be able to rate books, and these would be displayed on the My Books page. Any show page for a book would display an average all of the user’s ratings for that book.
Lists and tags: users would be able to create lists of books, and other users would add books to those lists. Lists would have tags that can be added by the list’s author. Lists and tags for lists would be searchable.
