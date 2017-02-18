#Component Hierarchy


***HomePageSignedIn***
  -MainHeader
  -BookIndexContainer
    -BookIndexItemContainer
      -BookHoverDetail
  -Footer


***HomePageSignedOut***
  -SmallSignInContainer
    -SmallSignInErrors
  -SignUpContainer
    -Errors
  -BookIndexContainer
    -BookIndexItemContainer
      -BookHoverDetail
  -Footer


***SignInPage***
  -MainHeader
  -BigSignInContainer
    -Errors
  -Footer


***SignOutPage***
  -Footer


***MyBooksPage***
  -MainHeader
  -Sidebar
    -StatusIndex  
    -BookshelfIndex
    -Add Shelf Form
  -MyBookIndexContainer
    -MyBookIndexItemContainer
      -FieldsForm
      ***DateReadForm***
    ***ReviewForm***
    ***FieldsForm***
  ***Footer***


***EditShelvesPage***
  -MainHeader
  -AddShelfFormContainer
  -EditBookshelvesForm
    -EditBookshelfIndex
      -EditBookshelfIndexItem
  -Footer


***BookShowPage***
  -MainHeader
  -BookDetail
    -FieldsForm
  -MyActivity
  -ReviewsIndex
    -ReviewIndexItem
  -Footer


***ReviewFormPage***
  -MainHeader
  -FieldsForm
  -Footer


***ReviewShowPage***
  -MainHeader
  -BookReviewed
  -ReviewIndexItem
  -Footer


***List of All Components in Component Web Pages***
AddShelfFormContainer
BigSignInContainer
BookDetail
BookHoverDetail
BookIndexItemContainer
BookIndexContainer
BookReviewed
BookshelfIndex
DateReadForm
EditBookshelfIndex
EditBookshelfIndexItem
EditBookshelvesForm
Errors
FieldsForm
Footer
MainHeader
MyActivity
MyBookIndexItemContainer
MyBookIndexContainer
ReviewForm
ReviewsIndex
ReviewsIndexItem
Sidebar
SignUpContainer
SmallSignInContainer
SmallSignInErrors
StatusIndex


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
