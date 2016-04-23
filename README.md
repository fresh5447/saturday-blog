# Node Blog

-----------------------
A blogging engine built with Node/React app.


## Our API endpoints for `POST` resource

| method        | url           | response          |
| ------------- |:-------------:| -----------------:|
| `GET`            | /api/posts         | JSON: all POSTS    |
| `POST`           | /api/posts         | JSON: create POST  |
| `GET`            | /api/posts/:post_id     | JSON: single POST  |
| `PUT`            | /api/posts/:post_id     | JSON: edit POST    |
| `DELETE`         | /api/posts/:post_id  | JSON: edit POST    |

## Our API endpoints for `COMMENT` resource
### Relationship: `POST` has many comments, `COMMENT` belongs to one `POST`

| method        | url           | response          |
| ------------- |:-------------:| -----------------:|
| `POST`        | /api/posts/:post_id               | JSON: create POST  |
| `DELETE`      | /api/posts/:post_id/comment/:comment_id  | JSON: edit POST    |



