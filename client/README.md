# 🏡 Elite VistaEstate

## A full-stack **MERN** (MongoDB, Express, React, Node.js) real estate web application where users can sign up, sign in (including Google OAuth), create and manage property listings, upload images, search/filter properties, and contact landlords directly.

## 👩‍💻 Author

**Rameen Fatima**
Software Engineering Student

---

## ✨ Features

- 🔐 **Authentication**
  - Email/password sign up & sign in
  - Google OAuth sign in (via Firebase Authentication)
  - JWT-based session management stored in HTTP-only cookies
- 👤 **User Profile**
  - Update username, email, password
  - Upload/change profile picture (Cloudinary)
  - Delete account
  - Sign out
- 🏠 **Property Listings**
  - Create a new listing with multiple images (up to 6)
  - Edit/update existing listings
  - Delete listings
  - View all listings created by the logged-in user
- 🔍 **Search & Browse**
  - Search listings by keyword
  - Filter by type (rent/sale), offer, parking, furnished
  - Sort listings (price, latest, etc.)
- 📩 **Contact Landlord**
  - Direct contact option on each listing to message the landlord
- ☁️ **Image Uploads**
  - Handled via **Cloudinary** (unsigned upload preset) instead of Firebase Storage
- 💾 **Persisted State**
  - Redux state (current user) persisted across page refreshes using `redux-persist`

---

## 🛠️ Tech Stack

**Frontend**

- React (Vite)
- Redux Toolkit + Redux Persist
- React Router DOM
- Tailwind CSS
- Firebase Authentication (Google Sign-In)

**Backend**

- Node.js + Express
- MongoDB with Mongoose
- JSON Web Token (JWT) for authentication
- Bcrypt.js for password hashing

**Image Storage**

- Cloudinary (unsigned upload)

---

## 📂 Folder Structure

```
elite-vistaestate/
├── api/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   └── listing.controller.js
│   ├── models/
│   │   ├── user.model.js
│   │   └── listing.model.js
│   ├── routes/
│   │   ├── auth.route.js
│   │   ├── user.route.js
│   │   └── listing.route.js
│   ├── utils/
│   │   ├── error.js
│   │   └── verifyUser.js
│   └── index.js
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── SignIn.jsx
│   │   │   ├── SignUp.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── CreateListing.jsx
│   │   │   ├── UpdateListing.jsx
│   │   │   ├── Listing.jsx
│   │   │   └── Search.jsx
│   │   ├── redux/
│   │   │   ├── store.js
│   │   │   └── user/userSlice.js
│   │   ├── utils/
│   │   │   └── uploadImage.js      # Cloudinary upload helper
│   │   ├── firebase.js             # Firebase config (Auth only)
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── .env
│
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables

This project uses **two** `.env` files.

### Root `.env` (backend)

```dotenv
MONGO=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### `client/.env` (frontend)

```dotenv
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_cloudinary_unsigned_upload_preset
```

## 🚀 Getting Started (Run Locally)

### 1. Clone the repository

```bash
git clone https://github.com/rameen-f/Elite-VistaEstate.git
cd elite-vistaestate
```

### 2. Install backend dependencies

```bash
npm install
```

### 3. Install frontend dependencies

```bash
cd client
npm install
cd ..
```

### 4. Set up environment variables

Create a `.env` file in the **root** folder and another inside **`client/`**, using the variables listed above.

### 5. Set up Cloudinary

1. Create a free account at [cloudinary.com](https://cloudinary.com)
2. Copy your **Cloud Name** from the dashboard
3. Go to **Settings → Upload → Upload presets → Add upload preset**
4. Set **Signing Mode** to **Unsigned**, save, and copy the preset name
5. Add both values to `client/.env`

### 6. Run the backend

```bash
npm run dev
```

### 7. Run the frontend (in a separate terminal)

```bash
cd client
npm run dev
```

The app should now be running locally, with the frontend calling the backend API.

---

## 🔗 API Overview

| Method | Endpoint                  | Description                  |
| ------ | ------------------------- | ---------------------------- |
| POST   | `/api/auth/signup`        | Register a new user          |
| POST   | `/api/auth/signin`        | Log in with email/password   |
| POST   | `/api/auth/google`        | Log in/register via Google   |
| GET    | `/api/auth/signout`       | Log out                      |
| POST   | `/api/user/update/:id`    | Update user profile          |
| DELETE | `/api/user/delete/:id`    | Delete user account          |
| GET    | `/api/user/listings/:id`  | Get all listings of a user   |
| POST   | `/api/listing/create`     | Create a new listing         |
| POST   | `/api/listing/update/:id` | Update a listing             |
| DELETE | `/api/listing/delete/:id` | Delete a listing             |
| GET    | `/api/listing/get/:id`    | Get a single listing         |
| GET    | `/api/listing/get`        | Get listings (search/filter) |

---

## 📄 License

This project is open source and available for learning purposes.
