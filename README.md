# WIKIZELDA

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
POST   | /auth/signup     | -     | user | User Signup              | `name`, `email`, `password`,                    | { message: `string`, result: `token` }
POST   | /auth/login      | -     | user | User Login               | `email`, `password`                             | { message: `string`, result: `token` }

### User Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /user            | YES   | admin| Get All Users            |                                                 | { message: `string`, result: `array` }
GET    | /user/:id        | YES   | admin| Get One User             |                                                 | { message: `string`, result: `object` }
GET    | /user/profile    | YES   | user | Get Own Profile             |                                              | { message: `string`, result: `object` }
PUT    | /user/:id        | YES   | admin | Update One User          | `name`, `email`, `password`, `role`            | { message: `string`, result: `object` }
PUT    | /user/profile    | YES   | user | Update Own Profile          | `name`, `email`                              | { message: `string`, result: `object` }
PUT    | /user/password    | YES  | user | Update Own password         | `old password`, `new password`               | { message: `string`, result: `object` }
POST    | /user        | YES   | admin | Create One User          | `name`, `email`, `password`, `role`            | { message: `string`, result: `object` }


## Posts Endpoints
METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /post            | YES   | user | Get All posts            |                                                 | { message: `string`, result: `array` }
GET    | /post/:id         | YES   | user | Get One post           |                                                 | { message: `string`, result: `object` }
POST    | /post            | YES   | user | Create post            |  `value`                                        | { message: `string`, result: `object` }
PUT    | /post/:id/like     | YES   | user | add Like to post            |                                          | { message: `string`, result: `object` }
