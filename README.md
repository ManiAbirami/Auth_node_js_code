# Node.js Authentication Examples

This project demonstrates different authentication methods for APIs, useful when migrating from Apigee to Kong.

## Endpoints

### Basic Auth
- **POST** `/basic/login`
- Authorization: Basic (username: `admin`, password: `secret`)

### JWT
- **POST** `/jwt/token`
  - Body:
    ```json
    { "username": "admin", "password": "secret" }
    ```
- **GET** `/jwt/secure`
  - Header: `Authorization: Bearer <token>`

### OAuth2
- **POST** `/oauth/token`
  - Body:
    ```json
    { "username": "admin", "password": "secret" }
    ```
- Returns: `access_token` (JWT) and `token_type: Bearer`

