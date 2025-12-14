# 🍬 Sweet Shop Frontend - React SPA

Welcome to the **Sweet Shop Management System Frontend**, a modern **Single Page Application (SPA)** built with **React** and **Vite**. This application serves as the frontend for the Sweet Shop Management System, communicating seamlessly with a Spring Boot backend through REST APIs. With a clean and responsive design, this system handles both customer and admin functionalities.

---

## 🚀 Features

### 👤 User Features:
- **Authentication**: User registration and login with secure JWT-based session handling.
- **Protected Routes**: Role-based access control to ensure secure navigation.
- **Sweet Management**: Browse, search, and filter sweets.
- **Sweet Details**: View detailed information about each sweet.
- **Purchase Sweets**: Customers can purchase sweets (disabled when stock is zero).

### 🛠 Admin Features:
- **Admin Dashboard**: A central console with a suite of admin operations.
- **Sweet Management**:
  - Add new sweets.
  - Update existing sweets.
  - Delete sweets.
  - Restock inventory.
- **Role-Specific Routing**: Admin-specific controls and pages.

---

## 🧱 Tech Stack

| **Technology**   | **Purpose**                              |
|-------------------|------------------------------------------|
| **React & Vite**  | Core framework and build tools.          |
| **Axios**         | HTTP client for API communication.       |
| **React Router**  | Navigation and routing.                  |
| **Context API**   | Global state management (authentication).|
| **CSS**           | Styling the application UI.             |
| **ESLint**        | Ensuring code quality and consistency.   |

---

## 📂 Project Structure

```
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
```

---

## ⚙️ Setup & Installation

### Prerequisites:
- Node.js (v18+ recommended)
- npm (Package manager)

### Installation Steps:
1. Clone the repository and navigate to the frontend directory:
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

### Running the Development Server:
1. Start the application:
   ```bash
   npm run dev
   ```

2. The frontend will be available at:
   ```
   http://localhost:5173
   ```

⚠️ Make sure the backend server is running on `http://localhost:8080`.

---

## 🔌 API Communication

The application interacts with the backend using **Axios**, which is configured globally via an `axiosClient` that provides:

- **Base URL**: Centralized endpoint configuration.
- **Authorization Headers**: JWT automatically attached to all requests.
- Token handling via Axios interceptors.

### Example Backend Endpoints:
- **Authentication**:
  - `POST /api/auth/login`
  - `POST /api/auth/register`
- **Sweet Management**:
  - `GET /api/sweets` (Fetch sweets list)
  - `POST /api/sweets/{id}/purchase` (Purchase sweet)
  - `POST /api/sweets/{id}/restock` (Restock sweet)

---

## 🔐 Authentication Flow

1. **Login / Registration**: Users log in or register.
2. **JWT Issuance**: Backend generates a secure JSON Web Token (JWT).
3. **Token Storage**: JWT is securely stored in `localStorage`.
4. **Axios Integration**: JWT is attached to all outgoing HTTP requests.
5. **Route Protection**: Frontend ensures access control based on roles.

---

## 🖼 Suggested Screenshots

To enhance the documentation, consider adding screenshots:

- **Login Page**
  <img width="1467" height="264" alt="Screenshot 2025-12-14 at 2 29 04 PM" src="https://github.com/user-attachments/assets/85a8e305-ba2e-4ff9-998c-3236da56e0a3" />
  
- **Sweet Details Page**
  <img width="1469" height="730" alt="Screenshot 2025-12-14 at 2 32 00 PM" src="https://github.com/user-attachments/assets/25170c3a-1a0b-4458-912a-20e2e9d638dc" />

- **Admin Panel**
 <img width="1470" height="806" alt="Screenshot 2025-12-14 at 2 28 13 PM" src="https://github.com/user-attachments/assets/a6ceb742-7c50-4cb2-8ea1-acbbcf04c44b" />

- **Add / Update Sweet Form**
  <img width="1470" height="798" alt="Screenshot 2025-12-14 at 2 33 09 PM" src="https://github.com/user-attachments/assets/d10a9883-7cc0-4b94-9b4f-18481fc84e4d" />

---

## 📌 Notes

- This frontend is designed as part of a full-stack application. 
- Refer to the backend repository for additional setup information.

### Design Highlights:
- Conforms to **real-world SPA design patterns**.
- Implements a **clean React architecture**.
- Prioritizes **secure API communication** and **role-based UI rendering**.
- Incorporates **modern development practices**.

---

## 🤖 My AI Usage

### AI Tools Utilized:
- **ChatGPT (OpenAI)**

### How AI Helped:
- **Improved Workflow**:
  - Suggested best practices for React folder structure.
  - Enhanced protected route logic using React Router.
- **Documentation Assistance**:
  - Helped structure this README file.

### Limitations of AI Usage:
- **Hands-On Implementation**:
  - All components, APIs, and logic were manually implemented.
  - No AI-generated code was blindly copied without understanding.

I ensured **full ownership** of the code and its implementation.

---

## 🏁 Final Remarks

The Sweet Shop Frontend showcases the following capabilities:

- A modular and structured React-based architecture.
- Secure and efficient API integrations using JWT.
- Role-based UI rendering with React Router.
- Clean, responsive design following modern SPA principles.

This application is an example of secure and clean development practices tailored for full-stack systems. For any feedback or questions, feel free to reach out!
