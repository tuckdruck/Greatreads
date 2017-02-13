#Component Hierarchy

***HomePageSignedIn***
  -SignedInHeader
  -BookIndex
    -BookIndexItem
      -BookHoverDetail
  -MainFooter


***HomePageSignedOut***
  -SignedOutHeader
  -SmallSignIn
  -SignUpComponent
  -BookIndex
    -BookIndexItem
      -BookHoverDetail
  -MainFooter


***SignInPage***
  -SessionHeader
  -SignIn
    -Errors
    -SignInForm
  -BooksFooter


***SignOutPage***
  -SessionHeader
  -SignOutNotification
  -BooksFooter


***MyBooksPage***
  -SignedInHeader
  -MyBooks
    -Sidebar
      -StatusIndex
      -BookshelfIndex
    -BooksFiltered
      -BooksFilteredHeader
      -BooksFilteredEntry
        -UpdateFieldsForm
        -UpdateDateReadForm
  -ReviewForm
    -UpdateFieldsForm
    -ReviewBodyForm
  -MainFooter


***ReviewFormPage***
  -MainHeader
  -UpdateFieldsForm
  -ReviewBodyForm
  -MainFooter

***BookShowPage***
  -SignedInHeader
  -BookDetails
    -BookDropdown
  -MyActivity
  -ReviewsIndex
    -ReviewsIndexItem
  -MainFooter


***EditShelvesPage***
  -SignedInHeader
  -AddShelfForm
  -EditBookshelvesForm
    -EditableBookshelfIndex
  -MainFooter


***ReviewShowPage***
  -SignedInHeader
  -BookDetails
    -ReviewShow
  -MainFooter


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
