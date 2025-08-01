# 🎧 Spotify Clone – Full-Stack Developer Project

A visually and functionally inspired Spotify clone built with **React.js + Tailwind CSS** on the frontend and **Node.js + Express.js** for backend logic, using **Firebase Authentication** for secure user login.

> 🧑‍💻 Built as a developer project to demonstrate frontend and backend skills using a known design blueprint (Spotify), mimicking key screens and features.

---

## 🔥 Key Features

### 🎨 Frontend (React + Tailwind)
- Responsive UI similar to Spotify
- Pages:
  - Home
  - Search
  - Your Library (mockup)
  - Login / Signup (Firebase Auth)
  - Playlist view (mockup)
  - Track details 
- Audio Player with:
  - Play/Pause
  - Seek
  - Progress bar
  - Volume control

### 🔐 Authentication
- Firebase Authentication with:
  - Email/password login
  - Auth state management
  - Protected routes

### 🛠️ Backend (Node + Express)
- REST API structure (extendable)
- CORS configured
- Can be connected to Firebase Firestore or MongoDB
- Handles environment-based builds for production

---

## 🧰 Tech Stack

| Frontend                | Backend                   | Auth / Storage         |
|-------------------------|---------------------------|------------------------|
| React.js                | Node.js + Express.js      | Firebase Auth          |
| Tailwind CSS            | REST APIs (custom)        | Firebase Firestore     |
| React Router DOM        | dotenv, cors, nodemon     |                        |
| Icons                   |                           |                        |

---

## ⚙️ Getting Started

### ✅ Prerequisites

- Node.js (v18+)
- Firebase Project with Authentication enabled
- (Optional) Firebase Firestore or MongoDB

---

### 1. Clone the Repo

```bash
git clone https://github.com/nikhilhuh/SpotifyClone.git
cd SpotifyClone
```

### 2. Install Dependencies

# Backend
```bash
cd backend-side
npm install
```

# Frontend
```bash
cd ../client-side
npm install
```

### 3. Setup Environment Variables
/client-side/.env

```bash
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. Run the app

# Backend
```bash
cd backend-side
npm start
```

# Frontend
```bash
cd ../client-side
npm run dev
```

Open http://localhost:5173 in your browser.

