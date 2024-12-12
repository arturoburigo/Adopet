![apalogo](https://github.com/user-attachments/assets/7aa8f911-3afd-488b-a510-d05d2fda5048)
# Adopet

Um site para uma ong de pets visando promover a adoção de animais e eventos de adoção

O site pode ser acessado clicando [aqui](https://www.apasaoludgero.com.br/home)


## Telas (Client side)
![image](https://github.com/user-attachments/assets/c1383193-d3b1-4ef1-a13e-cfced87f9780)

![image](https://github.com/user-attachments/assets/14455861-5e64-41bd-aa0d-26b98d89af29)

![image](https://github.com/user-attachments/assets/bb83a909-efcc-4773-93c1-43253eb7dfc1)


# AdoPet API Documentation

## Authentication

### Register User
```http
POST /register
```

#### Request Body
| Field    | Type     | Description         |
|----------|----------|---------------------|
| `name`   | `string` | User's full name    |
| `email`  | `string` | User's email        |
| `password` | `string` | User's password     |

### Login
```http
POST /sessions

```

#### Request Body
| Field    | Type     | Description         |
|----------|----------|---------------------|
| `email`  | `string` | User's email        |
| `password` | `string` | User's password     |

## Pets Endpoints

### List All Pets
```http
GET /pets
```

### Get Pet by ID
```http
GET /pets/{petId}
```

### Create Pet
```http
POST /pets
```

#### Request Body (Multipart Form)
| Field       | Type      | Description                            |
|-------------|-----------|----------------------------------------|
| `name`      | `string`  | Pet's name                             |
| `age`       | `number`  | Pet's age                              |
| `breed`     | `string`  | Pet's breed                            |
| `size`      | `string`  | Pet size (small/medium/large)          |
| `sex`       | `string`  | Pet's sex (M/F)                        |
| `about`     | `string`  | Description about the pet               |
| `castrate`  | `boolean` | Whether pet is neutered/spayed         |
| `vacinated` | `boolean` | Vaccination status                     |
| `whatsapp`  | `string`  | Contact whatsapp number                |
| `petImg`    | `file`    | Pet's image                            |

### Update Pet
```http
PUT /pets/{petId}
```
(Uses same multipart form data as Create Pet)

### Delete Pet
```http
DELETE /pets/{petId}
```

## Events Endpoints

### List All Events
```http
GET /event
```

### Create Event
```http
POST /event
```

#### Request Body (Multipart Form)
| Field       | Type     | Description                |
|-------------|----------|----------------------------|
| `title`     | `string` | Event title                |
| `description` | `string` | Event details             |
| `date`      | `string` | Event date (DD/MM/YYYY)    |
| `img`       | `file`   | Event image                |

### Delete Event
```http
DELETE /event/{eventId}
```

## Authentication Notes
- Most endpoints require a Bearer Token obtained from the `/sessions` endpoint
- Token is valid for a limited time (typically 1 hour)
- Include the token in the `Authorization` header for protected routes

## Base URLs
- Production: `https://adopetapi-production.up.railway.app`
- Local Development: `http://localhost:3333`

## Tech Stack

**Client:** React

**Server:** Node, Express


![apalogo](https://github.com/user-attachments/assets/7aa8f911-3afd-488b-a510-d05d2fda5048)


