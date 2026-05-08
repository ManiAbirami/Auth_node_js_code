# Node.js Authentication Examples

This project demonstrates different authentication methods for APIs, useful when migrating from Apigee to Kong.

## Endpoints

### Basic Auth
<<<<<<< HEAD

=======
>>>>>>> a8aa315fedac224a9da6a2741bd7619c1bb7df1e
- **POST** `/basic/login`
- Authorization: Basic (username: `admin`, password: `secret`)

### JWT
<<<<<<< HEAD

=======
>>>>>>> a8aa315fedac224a9da6a2741bd7619c1bb7df1e
- **POST** `/jwt/token`
  - Body:
    ```json
    { "username": "admin", "password": "secret" }
    ```
- **GET** `/jwt/secure`
  - Header: `Authorization: Bearer <token>`

### OAuth2
<<<<<<< HEAD

=======
>>>>>>> a8aa315fedac224a9da6a2741bd7619c1bb7df1e
- **POST** `/oauth/token`
  - Body:
    ```json
    { "username": "admin", "password": "secret" }
    ```
- Returns: `access_token` (JWT) and `token_type: Bearer`
<<<<<<< HEAD
=======

>>>>>>> a8aa315fedac224a9da6a2741bd7619c1bb7df1e
