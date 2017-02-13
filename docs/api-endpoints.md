# API Endpoints


##HTML API

###Root
- `GET /` - loads React web app

##JSON API

###Users

-`POST /api/users`
-`PATCH /api/users`
-`GET /api/users/:userId/books` : for the "All" tab on the MyBooksPage
-`GET /api/users/:userId/books/:bookId/reviews` : for finding a review associated with each book entry on the MyBooksPage
`GET /api/users/:userId/books/:bookId/`

###Session
-`POST /api/session`
-`DELETE /api/session`

###Books
-`GET /api/books/:bookId`
-Two index routes - is this possible?
  -`GET /api/books`
  -`GET /api/bookshelves/:bookshelfId/books` - finding all books for a specific bookshelf on the MyBooksPage


###Bookshelves
-`GET /api/bookshelves`
-`GET /api/bookshelves/:bookshelfId`
-`POST /api/bookshelves`
-`PATCH /api/bookshelves/:bookshelfId`
-`DELETE /api/bookshelves/:bookshelfId`
-`GET /api/books/:bookId/bookshelves` - for finding all of a user's bookshelves for a particular book on the BookShowPage and for a book entry on the MyBooksPage

###Read statuses
-`GET /api/statuses`
-`GET /api/statuses/:statusId`
-`PATCH /api/statuses/:statusId`
-`POST /api/statuses`
-`POST /api/books/:bookId/statuses` - for finding a status (if any) a user has given for a book on the BookShowPage

###Review
-`GET /api/reviews`
-`GET /api/reviews/:reviewId`
-`POST /api/reviews`
-`PATCH /api/reviews/:reviewId`
-`DELETE /api/reviews/:reviewId`
-`GET /api/books/:bookId/reviews` - for all of the reviews of a particular book
