# API Endpoints

ADD PARAMS

##HTML API

###Root
- `GET /` - loads React web app

##JSON API

###Users

-`POST /api/users`
-`PATCH /api/users`

###Session
-`POST /api/session`
-`DELETE /api/session`

###Books
-`GET /api/books`
-`GET /api/books/:bookId`

###Bookshelves
-`GET /api/bookshelves`
-`GET /api/bookshelves/:bookshelfId`
-`POST /api/bookshelves`
-`PATCH /api/bookshelves/:bookshelfId`
-`DELETE /api/bookshelves/:bookshelfId`
-`GET /api/bookshelves/:bookshelfId/books`

###Read statuses
-`GET /api/statuses`
-`GET /api/statuses/:statusId`
-`PATCH /api/statuses/:statusId`
-`POST /api/statuses`

###Review
-`GET /api/reviews`
-`GET /api/reviews/:reviewId`
-`POST /api/reviews`
-`PATCH /api/reviews/:reviewId`
-`DELETE /api/reviews/:reviewId`
