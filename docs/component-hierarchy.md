#Component Hierarchy


***List of All Separate Components***
  -AddShelfFormContainer
    -Props passed in:
      -state: state.bookshelves
      -dispatch: fetchBookshelves, createBookshelf, deleteBookshelf, updateBookshelf
  -Auth Form
    -Props passed in:
      -state: state.session
      -dispatch: action (signin or signup)
      -Component will decide based on the action:
        -whether or not to add name input field (signup will have this, signin will not)
        -text on the button
  -BookIndexContainer
  -BookIndexItemContainer
    -Props passed in:
      -state: state.session, state.books
      -Based on the route, show:
        1) only book cover as link to book show page ("/"),
        2) book cover as link to book show page, + Button to change status ("/books"),
        3) book information as a row: title, author, average rating, etc.
  -BookshelfIndex
  -BookshelfIndexItem
  -EditBookshelvesForm
  -Errors
  -FieldsForm
  -Footer
  -Header
  -MyBooks
  -ReviewBodyForm
  -ReviewForm
  -ReviewsIndex
  -ReviewIndexItem
  -Sidebar
  -SignIn
  -StatusIndex
  -DateReadForm

***HomePageSignedIn***
  -Header
  -BookIndexContainer
    -BookIndexItemContainer
      -BookIndexItemContainer
  -Footer


***HomePageSignedOut***
  -Header
  -AuthForm
  -AuthForm
  -BookIndexContainer
    -BookIndexItemContainer
      -BookIndexItemContainer
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
        -BookshelfIndexItem
    -BookIndexContainer
      -BookIndexItemContainer
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
  -BookIndexItemContainer
    -FieldsForm
  -BookshelfIndex
    -BookshelfIndexItem
  -ReviewIndexItem
  -ReviewsIndex
    -ReviewIndexItem
  -Footer


***EditShelvesPage***
  -Header
  -AddShelfFormContainer
  -EditBookshelvesForm
    -BookshelfIndex
      -BookshelfIndexItem
  -Footer


***ReviewShowPage***
  -Header
  -BookIndexItemContainer
    -ReviewIndexItem
  -Footer


  ## Routes

|Path                       | Component           |
|---------------------------|---------------------|
| "/"                       | "HomePageSignedOut" |
| "/signin"                 | "SignInPage"        |
| "/signout"                | "SignOutPage"       |

| "/books"                  | "HomePageSignedIn"  |
| "/books/:bookId"          | "BookShowPage"      |
| "/books/mybooks"          | "MyBooksPage"       |
| "/books/bookshelves/edit" | "EditShelvesPage"   |
| "/books/reviews"          | "ReviewFormPage"    |
| "/books/reviews/:reviewId"| "ReviewShowPage"    |



"/" redirects to "/books" if the user is logged in (implemented through an onEnter hook).
Any link starting with "/books" redirects to "/" if the user is not logged in (implemented through an onEnter hook).
