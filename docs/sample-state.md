```javascript
{
  session:
    {
      currentUser:
        {
          id: 1,
          name: "Avital",
          username: "avitaldrucker",
          email: "avitaldrucker@gmail.com"
        }
      errors: []
    },
  books:
    {
      1:
        {
          id: 1,
          title: "A Song of Ice and Fire",
          author: "George R.R. Martin",
          description: "A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by American author George R. R. Martin. It was first published on August 1, 1996.",
          coverImageURL: "https://upload.wikimedia.org/wikipedia/en/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg",
          averageRating: 4.44,
          pageLength: 835,
          publishedDate: 2001,
          publisher: "Bantam",
          ISBN: "0553588486",
          language: "English",
          URLToBuy: "https://www.amazon.com/gp/product/0553588486/ref=x_gr_w_glide_bb?ie=UTF8&tag=x_gr_w_glide_bb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0553588486&SubscriptionId=1MGPYB6YW3HWK55XCGG2"
        },
      2:
        {
          id: 2,
          title: "A Clash of Kings",
          author: "George R.R. Martin",
          description: "A Clash of Kings is the second novel in A Song of Ice and Fire, an epic fantasy series by American author George R. R. Martin expected to consist of seven volumes.",
          coverImageURL: "https://images-na.ssl-images-amazon.com/images/I/51o2UG3sp3L._SX305_BO1,204,203,200_.jpg",
          averateRating: 4.4,
          pageLength: 761,
          publishedDate: 2002,
          publisher: "Bantam",
          ISBN: "0553381695",
          language: "English",
          URLToBuy: "https://www.amazon.com/gp/product/0553381695/ref=x_gr_w_glide_bb?ie=UTF8&tag=x_gr_w_glide_bb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0553381695&SubscriptionId=1MGPYB6YW3HWK55XCGG2"
        },
    },
  book:
    {
      id: 3,
      title: "A Storm of Swords",
      author: "George R.R. Marti",
      description: "A Storm of Swords is the third of seven planned novels in A Song of Ice and Fire, a fantasy series by American author George R. R. Martin.",
      coverImageURL: "https://images-na.ssl-images-amazon.com/images/I/51JLfDOCDQL._SY344_BO1,204,203,200_.jpg",
      averageRating: 4.54,
      pageLength: 1177,
      publishedDate: 2003,
      publisher: "Bantam",
      ISBN: "055357342X",
      language: "English",
      URLToBuy: "https://www.amazon.com/gp/product/055357342X/ref=x_gr_w_glide_bb?ie=UTF8&tag=x_gr_w_glide_bb-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=055357342X&SubscriptionId=1MGPYB6YW3HWK55XCGG2"
    },
  bookshelves:
    {
      1:
        {
          id: 1,
          title: "bookshelf1",
          userId: 1
        },
      2:
        {
          id: 2,
          title: "bookshelf2",
          userId: 1
        }
    },
  statuses:
    {
      1:
        {
          id: 1,
          title: "read"
        },
      2:
        {
          id: 2,
          title: "currently-reading"
        },
      3:
        {
          id: 3,
          title: "read"
        }
    },
  reviews:
    {
      1:
        {
          id: 1,
          body: "Great book",
          userId: 1,
          bookId: 1
        },
      2:
        {
          id: 2,
          body: "Also a great book",
          userId: 1,
          bookId: 2
        }
    },
  review:
    {
      id: 3,
      body: "What a great book",
      userId: 1,
      bookId: 3
    }
}
```
