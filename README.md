# 🍬 Sweet Shop Management System (Full Stack)

A full-stack Sweet Shop Management System built with a Spring Boot backend and a React (Vite) frontend, following real-world architecture, clean coding practices, and test-driven development (TDD).

This repository acts as the parent project, combining both backend and frontend into a single, organized codebase suitable for development, evaluation, and deployment.

## 📌 Project Overview

The application allows users to:

- Register and log in securely
- Browse available sweets
- Purchase sweets with real-time inventory updates

**Admin users can:**
- Add, update, delete sweets
- Restock inventory
- Manage the sweet catalog

The system is designed with:

- **Role-based access control**
- **RESTful APIs**
- **Unit-tested service layers**
- **Modern SPA frontend**

---

## 🏗 Repository Structure
```
sweetshop-project/
│
├── backend/        # Spring Boot backend (Git Submodule)
├── frontend/       # React frontend (Vite)
├── .gitmodules
└── README.md       # You are here
```

---

## 🔗 Backend as a Git Submodule (Important)

The backend is included as a Git submodule, not copied directly into this repository.

### Why a Submodule?

- Keeps backend history clean and independent
- Allows separate versioning for backend and frontend
- Matches real-world mono-repo + micro-repo workflows

### Backend Repository

👉 **Backend Repo:**  
https://github.com/Subho-29X/sweetshop-backend  

The parent repository tracks the exact commit of the backend being used.

### Updating the Backend Submodule
```bash
cd backend
git pull origin main
cd ..
git add backend
git commit -m "chore: update backend submodule"
git push
```

---

## 🧱 Tech Stack

### Backend
- Java 17
- Spring Boot  
- Spring Security (JWT)  
- Spring Data JPA  
- PostgreSQL  
- Maven  
- JUnit + Mockito (TDD)  

### Frontend
- React (Vite)  
- React Router  
- Axios  
- Context API  
- CSS  

---

## ⚙️ Local Setup Instructions  

### 1️⃣ Clone the Parent Repository
```bash
git clone --recurse-submodules https://github.com/Subho-29X/sweetshop-project.git
cd sweetshop-project
```
**⚠️ `--recurse-submodules` is required to fetch the backend code.**

### 2️⃣ Backend Setup
```bash
cd backend
./mvnw spring-boot:run
```
Backend runs at:  
http://localhost:8080

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend runs at:  
http://localhost:5173

---

## 🔐 Authentication & Roles
- **JWT-based authentication**
- **Role-based access control**
- **Admin-only routes protected on both frontend and backend**

---

## 🧪 Testing

### Backend Testing
- **Unit tests written using JUnit 5 + Mockito**
- **Service-layer tests follow TDD approach**

**Example tested services:**
- AuthService  
- SweetService  
- InventoryService  

Run tests:
```bash
cd backend
./mvnw test
```
**Test results** are visible in the console output.

---

## 🖼 Screenshots

(Add screenshots before final submission)  

**Suggested screenshots:**
- Login & Register pages
  <img width="1470" height="314" alt="Screenshot 2025-12-14 at 2 35 15 PM" src="https://github.com/user-attachments/assets/8e0c98eb-0748-47fe-a352-b031175bb985" />

- Sweet dashboard
  <img width="1470" height="731" alt="Screenshot 2025-12-14 at 2 36 00 PM" src="https://github.com/user-attachments/assets/aa3117b7-5d42-4906-9c71-a86f675f2760" />

- Admin panel
 <img width="1462" height="807" alt="Screenshot 2025-12-14 at 2 36 44 PM" src="https://github.com/user-attachments/assets/923af966-9c51-4c3d-933a-a217ba9b10fe" />

- Add / Update sweet forms
  <img width="1470" height="607" alt="Screenshot 2025-12-14 at 2 38 04 PM" src="https://github.com/user-attachments/assets/8432b83f-c2a2-4f16-95ac-84d8762b4901" />


---

## 🤖 My AI Usage  

### AI Tools Used
- ChatGPT (OpenAI)

### How I Used AI
I used AI tools responsibly as a development assistant, not as a replacement for understanding.

**AI was used to:**
- Improve React folder structure and routing flow
- Understand Git submodules and correct workflows
- Review unit test structure and Mockito usage
- Improve README documentation clarity and professionalism

---

### What AI Did NOT Do
- AI did not generate the full project automatically
- Core business logic was written manually
- All tests were authored and debugged by me
- Every AI suggestion was reviewed and validated

---

### Reflection on AI Impact
AI helped:  
- Improve architectural decisions  
- Maintain clean, interview-ready documentation  

At the same time, I ensured:  
- Full ownership of implementation  
- Ability to explain every design choice  
- Ethical and transparent AI usage  

---

## 🎯 Final Notes  

This project demonstrates:
- Full-stack development skills  
- Clean architecture  
- Secure authentication  
- Test-driven development  
- Professional Git practices (submodules)  
- Responsible AI usage  
