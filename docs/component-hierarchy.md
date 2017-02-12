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
