
json.title book.title
json.author book.author
json.id book.id
json.cover_image_url asset_path(book.image.url)
json.average_rating book.average_rating
json.page_length book.page_length
json.publisher book.publisher
json.url_to_buy book.url_to_buy
json.description book.description

if current_user
  json.bookshelves book.bookshelves.where(user_id: current_user.id)
  json.status book.statuses.find_by(user_id: current_user.id)
  json.user_review book.reviews.find_by(user_id: current_user.id).includes(:user)
else
  json.bookshelves []
  json.status []
  json.user_review []
end
