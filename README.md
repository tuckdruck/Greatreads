[Greatreads][heroku] is a web application for viewing, reviewing, and collecting books. It is inspired by Goodreads and uses Ruby on Rails on the backend, a PostgreSQL database, and React and Redux on the frontend.

[heroku]: http://goodreadsclone.herokuapp.com/

#Technologies Used#
* Ruby on Rails
* PostgreSQL
* BCrypt
* Paperclip and AWS
* Figaro
* jBuilder
* React.JS
* React Modal
* Redux
* jQuery
* Heroku

#Features#

##User Authentication##
The home page displays sign-in and sign-up forms. Passwords are not stored in the database but encrypted into password hashes through BCrypt. Upon login, the password entered is encrypted and compared with the stored password hash for that user. A user can view all the books in the app and view pages for individual books without logging in. In order to interact with books, a user must log in through the home page or through the sign-up form on any page on the site.

##My Books Page##
The My Books page is the centerpiece of a user's interaction with books. A user can collect books through attributing a book with a read status, adding a book to a bookshelf, and reviewing a book. The MyBooks page loads by fetching a user's bookshelves and books pertaining to a specific user. Users can filter books on page by bookshelf and by read status; change read statuses of books; add and toggle bookshelves for books; add, edit, and delete reviews for books; and add or change the date in which they read a book. Users can also remove books from their collection - this deletes the read status and any bookshelves or review a user has attributed to that book.

![My Books page](/my_books_page.png)

Form for updating a book's bookshelves and read status:

![Fields form](/fields_form.png)


###Editing Bookshelves###
The My Books page links to an Edit Bookshelves page, where users can add, rename, and delete bookshelves.

##Viewing Books##
The books index page links to pages for each book. Book show pages display information about the book, a user's activity with a book (including read status, bookshelves, and reviews), and community reviews for a book.

##Book Search##
The search bar searches books by title. A change in input in the search bar will trigger an AJAX request to search books by the input, and these books are displayed below the search bar. Clicking on any of these books will link to the respective book's show page.

The books controller implements a searching method through SQL. This will match any string that appears at the beginning of any word in a book title. For example, if a user inputs "Feast" or "Fea" in the search bar, _A Feast for Crows_ will appear as a search result. The search is nuanced: if a user inputs "east", _A Feast for Crows_ will not appear. The results that dynamically appear upon search are limited to five, in order to not clog up the screen. Clicking the magnifying glass in the search bar links to a page that shows all the search results.

![Search bar](/search_bar.png)

#Implementation#

Below is my root reducer, displaying my state structure:

```javascript
export default combineReducers({
  session: SessionReducer,
  bookshelves: BookshelvesReducer,
  books: BooksReducer,
  errors: ErrorsReducer,
  bookshelf: BookshelfReducer,
  loading: LoadReducer,
  reviews: ReviewsReducer,
  booksForSearch: BooksForSearchReducer
});
```

User authentication is handled by the session slice of state, whereas the BooksReducer manages books that are fetched and updated. Any errors are handled by the ErrorsReducer. The LoadingReducer manages whether certain resources have been requested but not yet received from the backend.


##Books##
I implemented the app’s books feature through a books table, which includes title, author, and description columns. When a user is logged out, all books are fetched. When a user is logged in, books will be fetched with the logged-in user's review, the user's bookshelves attached to that book, and the user's review for that book (if any). I used conditional logic in the books controller to fetch with books information needed for a certain component, and to filter books by a certain criteria, such as a user, bookshelf, read status, or search query.

##Read Statuses##
Users must provide a read status for a book in order to associate that book with bookshelves and reviews. I implemented the read status feature through a statuses table with columns for book id, user id, read status (one of “read”, “currently reading”, or “to read”), and date read. When logged in, a user’s associated books are retrieved by joining the statuses table on the users and books tables.

##Bookshelves##
Bookshelves are stored through a bookshelves table with user id and title columns. In order to retrieve books on a bookshelf, I created a book taggings join table, which has book id and bookshelf id columns. Books are added to or removed from bookshelves by creating and destroying book tagging records.

##Reviews##
I implemented reviews through a reviews table, which has user id and book id columns. I used React Modal to create modals for adding, editing, and deleting reviews.

#Future of the Project#

- [ ] Multiple sessions
- [ ] Book ratings: users can rate books, and the average rating is calculated and displayed on the book show page
- [ ] User profiles
