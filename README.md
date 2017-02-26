[Greatreads][heroku] is a web application for viewing, reviewing, and collecting books. It is inspired by Goodreads and uses Ruby on Rails on the backend, a PostgreSQL database, and React and Redux on the frontend.

[heroku]: http://goodreadsclone.herokuapp.com/

#Features#

##User Authentication##
The home page displays sign-in and sign-up forms. Passwords are not stored in the database but encrypted into password hashes through BCrypt. Upon login, the password entered is encrypted and compared with the stored password hash for that user in order to check credentials. A user can view all the books in the app and view pages for individual books without logging in. In order to interact with books, a user must log in through the home page or through the sign-up form on any page on the site.

##My Books Page##
The My Books page is the centerpiece of a user's interaction with books. A user can collect books through attributing a book with a read status, adding a book to a bookshelf, and reviewing a book. The MyBooks page loads by fetching a user's bookshelves and books pertaining to a specific user. The users' books are displayed in a table, which shows basic information about the book and the user's interaction with it. Users can filter books on page by bookshelf and by read status, and can change read statuses of books; add and toggle bookshelves for books; add, edit, and delete reviews for books; and add or change the date in which they read a book. Users can also remove books from their collection.

![My Books page](/my_books_page.png)
Format: ![Alt Text](my books page)

![Fields form](/fields_form.png)
Format: ![Alt Text](fields form)


###Editing Bookshelves###
The My Books page links to an Edit Bookshelves page, in which users can add, rename, and delete bookshelves.

##Viewing Books##
The books index page shows all of the covers of books, which link to individual pages for each book. Upon login on any page, a user's interaction with a book (if any) will be displayed. Book show pages display information about the book, a user's activity with a book (including read status, bookshelves, and reviews), and community reviews for a book.

##Book Search##
The search bar searches books by title. Any change in input in the search bar will trigger an AJAX request to search books by a search string, and these books are displayed below the searchbar. Click on any of these books will link to the respective book's show page. The books controller will then implement a searching method through SQL. This will match any string that appears at the beginning of any word in a book title. For example, if a user inputs "Feast" or "Fea" in the search bar, _A Feast for Crows_ will appear as a search result. The search is nuanced: if a user inputs "east", _A Feast for Crows_ will not appear. The results that dynamically appear upon search are limited to five, in order to not clog up the screen. Clicking the magnifying on the search bar will link to a page that shows all of the search results.

#Implementation#

##Books##
I implemented the app’s books feature through a books table, which includes title, author, and description columns.

##Read Statuses##
Users must provide a read status for a book in order to associate that book with bookshelves and reviews. I implemented the read status feature through a statuses table, in which each record has a book id, user id, read status (one of “read”, “currently reading”, or “to read”), and date read. When logged in, a user’s associated books are retrieved by joining the statuses table on the users and books tables.

##Bookshelves##
I implemented the bookshelves feature through a bookshelves table with user id and title columns. In order to retrieve books on a bookshelf, I created a book taggings join table, which has book id and bookshelf id columns. The app’s Fields Form component removes and adds bookshelves for a book by creating and destroying book taggings on the backend.

##Reviews##
I implemented reviews through a reviews table, which has user id and book id columns. The Book Show page component fetches and displays reviews filtered by book id. A book is fetched and displayed with the logged-in user’s review, if written. Both the My Books and Book Show pages can display modals for creating, updating, or removing a review.

#Future Directions for Greatreads#

- [ ] Multiple sessions
- [ ] Book ratings: users can rate books, and an aggregate average is shown on the book show page
- [ ] User profiles
