🍬 Sweet Shop Frontend (React SPA)

This is the frontend application for the Sweet Shop Management System, built as a modern Single Page Application (SPA) using React + Vite.
It communicates with the Spring Boot backend via REST APIs and provides a clean, responsive user interface.

🚀 Features
👤 Authentication

User registration

User login

JWT-based session handling

Protected routes using role-based access

🍭 Sweet Management

View all available sweets

Search and filter sweets

Sweet details page

Purchase sweets (disabled when quantity is zero)

🛠 Admin Features

Admin dashboard

Add new sweets

Update existing sweets

Delete sweets

Restock sweets

Admin-only protected routes

🧱 Tech Stack

React (Vite)

React Router DOM

Axios

Context API

CSS

ESLint

📂 Project Structure
frontend/
│
├── public/
│
├── src/
│   ├── api/                # API-related helpers
│   ├── auth/               # Auth pages & route protection
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── components/         # Reusable UI components
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── Loader.jsx
│   │   └── SweetCard.jsx
│   │
│   ├── context/            # Global state management
│   │   └── AuthContext.jsx
│   │
│   ├── pages/              # Application pages
│   │   ├── Dashboard.jsx
│   │   ├── SweetDetails.jsx
│   │   ├── AddSweet.jsx
│   │   ├── UpdateSweet.jsx
│   │   ├── AdminPanel.jsx
│   │   └── NotFound.jsx
│   │
│   ├── services/           # API service layer
│   │   ├── axiosClient.js
│   │   ├── authService.js
│   │   ├── sweetService.js
│   │   └── inventoryService.js
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── router.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md

⚙️ Setup & Installation
Prerequisites

Node.js (v18+ recommended)

npm

Install Dependencies
npm install

Run Development Server
npm run dev

Frontend will run at:

http://localhost:5173

⚠️ Make sure the backend is running on http://localhost:8080

🔌 API Communication

Axios is used for all HTTP requests

A centralized axiosClient handles:

Base URL

Authorization headers

Token attachment via interceptors

Example Endpoints Used

POST /api/auth/login

POST /api/auth/register

GET /api/sweets

POST /api/sweets/{id}/purchase

POST /api/sweets/{id}/restock

🔐 Authentication Flow

User logs in or registers

Backend returns JWT

JWT stored in localStorage

Axios interceptor attaches JWT to every request

Protected routes check authentication and role

🖼 Screenshots

(Add screenshots before final submission)

Suggested screenshots:

Login Page

Dashboard (Sweets List)

Sweet Details Page

Admin Panel

Add / Update Sweet Form

🤖 My AI Usage
AI Tools Used

ChatGPT (OpenAI)

How I Used AI

I used AI tools responsibly to assist my development process, not to replace understanding.

Specifically, I used ChatGPT to:

Understand best practices for React folder structure

Validate separation of concerns (pages, services, components)

Review UI flow and component responsibilities

Help structure professional README documentation

Reflection on AI Impact

AI significantly helped by:

Improving code organization

Reducing trial-and-error time

Acting as a conceptual guide

At the same time, I ensured:

Full ownership of all implementation decisions

Ability to explain every component and API call

Ethical and transparent use of AI