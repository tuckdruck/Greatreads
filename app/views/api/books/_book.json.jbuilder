
  json.title book.title
  json.author book.author
  json.id book.id
  json.cover_image_url book.cover_image_url
  json.average_rating book.average_rating
  json.page_length book.page_length
  json.publisher book.publisher
  json.url_to_buy book.url_to_buy
  json.description book.description

if current_user
  json.bookshelves book.bookshelves.where(user_id: current_user.id)
else
  json.bookshelves []
end
