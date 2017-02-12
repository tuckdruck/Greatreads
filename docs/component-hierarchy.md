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
    -SmallSignInForm
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


***BookShowPage***
  -SignedInHeader
  -BookDetails
    -BookDropdown
  -MyActivity
  -ReviewsIndex
    -ReviewsIndexItem
  -MainFooter


***EditShelvesPage***
  -AddShelfForm
  -EditBookshelvesForm
    -EditableBookshelfIndex


***ReviewShowPage***
  -SignedInHeader
  -BookDetails
    -ReviewShow
  -MainHeader


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
| "/reviews/:reviewId"| "ReviewShowPage"    |

"/" redirects to "/books" if the user is logged in (implemented through an onEnter hook).
"/books" redirects to "/" if the user is not logged in (implemented through an onEnter hook).
