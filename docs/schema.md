# Schema Information


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique


## book
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null, indexed
author          | string    | not null, indexed
description     | text      |
cover image URL | string    |
average rating  | float     |
page length     | integer   |
published date  | date      |
publisher       | string    |
ISBN            | integer   |
Language        | string    |
URL to buy      | string    |


## bookshelf
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null
user id         | integer   | not null, indexed, foreign key referencing users table


## book tagging
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
bookshelf id    | integer   | not null, indexed, foreign key, unique in the scope of a book id
book id         | integer   | not null, indexed
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique


## read status
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user id         | integer   | not null, indexed, foreign key referencing users table, unique in the scope of a book id
book id         | integer   | not null, indexed, foreign key referencing users table
status          | text      | not null, inclusion in: ["to read", "currently-reading", "read"]


## review
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
body            | text      | not null
user id         | integer   | not null, indexed, foreign key referencing users table
book id         | integer   | not null, indexed, foreign key referencing books table
