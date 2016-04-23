## Node Blog

-----------------------
A blogging engine built with Node/React App.


### Our API endpoints for `POST` resource

| method        | url           | response          |
| ------------- |:-------------:| -----------------:|
| `GET`            | /api/posts         | JSON: all POSTS    |
| `POST`           | /api/posts         | JSON: create POST  |
| `GET`            | /api/posts/:post_id     | JSON: single POST  |
| `PUT`            | /api/posts/:post_id     | JSON: edit POST    |
| `DELETE`         | /api/posts/:post_id  | JSON: edit POST    |

#### Sample `POST` resource:
```
{
    "title": "Learning How to Blog",
    "content": "Lorem ipsum continued and just keeps continuing.",
    "img": "www.url/img/com",
    "comments": ["1234432", 1234433, 1234434, 1234435]
}
```

### Our API endpoints for `COMMENT` resource
#### Relationship: `POST` has many comments, `COMMENT` belongs to one `POST`

| method        | url           | response          |
| ------------- |:-------------:| -----------------:|
| `POST`        | /api/posts/:post_id               | JSON: create POST  |
| `DELETE`      | /api/posts/:post_id/comment/:comment_id  | JSON: edit POST    |


### Page Layout - Flow Diagram

1. Home Page.
-- Skills
-- Portfolio
2. Blog Page 
-- View All Blogs
-- View One Blog
3. Contact Page 
-- Information




