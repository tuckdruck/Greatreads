#Component Hierarchy

***HomePageSignedIn***
  -Header
  -BookIndex
    -BookIndexItem
      -BookIndexItem
  -Footer


***HomePageSignedOut***
  -Header
  -AuthForm
  -AuthForm
  -BookIndex
    -BookIndexItem
      -BookIndexItem
  -Footer


***SignInPage***
  -Header
  -AuthForm
    -Errors
  -Footer


***SignOutPage***
  -Header
  -Footer


***MyBooksPage***
  -Header
  -MyBooks
    -Sidebar
      -StatusIndex
      -BookshelfIndex
    -BooksIndex
      -BooksIndexItem
        -FieldsForm
        -DateReadForm
  -ReviewForm
    -FieldsForm
    -ReviewBodyForm
  -Footer


***ReviewFormPage***
  -Header
  -FieldsForm
  -ReviewBodyForm
  -Footer


***BookShowPage***
  -Header
  -BookIndexItem
    -FieldsForm
  -BookshelfIndex
  -ReviewIndexItem
  -ReviewsIndex
    -ReviewIndexItem
  -Footer


***EditShelvesPage***
  -Header
  -AddShelfForm
  -EditBookshelvesForm
    -BookshelfIndex
  -Footer


***ReviewShowPage***
  -Header
  -BookIndexItem
    -ReviewIndexItem
  -Footer


  ## Routes

|Path                 | Component           |
|---------------------|---------------------|
| "/"                 | "HomePageSignedOut" |
| "/books"            | "HomePageSignedIn"  |
| "/books/:bookId"    | "BookShowPage"      |
| "/mybooks"          | "MyBooksPage"       |
| "/signin"           | "SignInPage"        |
| "/signout"          | "SignOutPage"       |
| "/bookshelves/edit" | "EditShelvesPage"   |
| "/reviews"          | "ReviewFormPage"    |
| "/reviews/:reviewId"| "ReviewShowPage"    |


"/" redirects to "/books" if the user is logged in (implemented through an onEnter hook).
"/books" redirects to "/" if the user is not logged in (implemented through an onEnter hook).
