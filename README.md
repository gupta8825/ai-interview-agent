# 🤖 InterviewIQ.AI – AI-Powered Smart Interview Platform

> A full-stack MERN application that helps job seekers practice interviews using AI — with adaptive questioning, resume parsing, voice interaction, real-time evaluation, and detailed analytics.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat&logo=mongodb&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS%204-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Razorpay](https://img.shields.io/badge/Razorpay-Payments-02042B?style=flat&logo=razorpay&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Auth-FFCA28?style=flat&logo=firebase&logoColor=black)
![License](https://img.shields.io/badge/License-ISC-green?style=flat)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [How It Works](#how-it-works)
- [Project Structure](#project-structure)
- [License](#license)

---

## 📌 Overview

InterviewIQ.AI is a full-stack MERN application designed to help job seekers practice interviews using AI. The platform provides role-based mock interviews, smart follow-up questions, real-time performance evaluation, and detailed analytics — all powered by an AI backend and a clean, modern frontend.

---

## 🚀 Features

- **AI Interviewer** — Adaptive role-based interviews with smart follow-up questions generated based on your answers.
- **Resume-Based Mock Interviews** — Extracts projects and skills from uploaded PDFs (via PDF.js) to tailor the interview experience.
- **Voice-Enabled Interaction** — Supports voice-based interviews for a more realistic simulation.
- **Real-time Evaluation** — Instant feedback on confidence, communication, and technical correctness after each answer.
- **Analytics Dashboard** — Visualizes performance trends using interactive charts (Recharts) and generates downloadable PDF reports.
- **Payment Integration** — Secure credit/coin system powered by Razorpay for unlocking interview sessions.
- **Authentication** — Secure login and registration with JWT and Firebase (Google OAuth).

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React 19 + Vite | Core framework & build tool |
| Tailwind CSS 4 | Utility-first styling |
| Redux Toolkit | Global state management |
| Framer Motion | Animations & transitions |
| Recharts | Data visualization & charts |

### Backend

| Technology | Purpose |
|---|---|
| Node.js + Express.js | REST API server |
| MongoDB + Mongoose | Database & ODM |
| PDF.js | Resume parsing |
| Razorpay | Payment gateway |
| Firebase | Google OAuth / social auth |
| JSON Web Token (JWT) | Secure authentication |

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/interview-iq.git
cd interview-iq
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `/server` directory (see [Environment Variables](#environment-variables) below), then run:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd client
npm install
npm run dev
```

The frontend will start at `http://localhost:5173` and the backend at `http://localhost:6000`.

---

## 🔐 Environment Variables

Create a `.env` file inside the `/server` directory with the following keys:

```env
PORT=6000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
FIREBASE_API_KEY=your_firebase_api_key
```

---

## 🛡️ API Endpoints

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/auth/register` | User registration | No |
| `POST` | `/api/auth/login` | User login, returns JWT | No |
| `POST` | `/api/interview/start` | Initialize an AI interview session | Yes |
| `POST` | `/api/interview/answer` | Submit an answer, receive follow-up question | Yes |
| `GET` | `/api/user/history` | Fetch past interview results | Yes |
| `GET` | `/api/user/analytics` | Fetch performance analytics data | Yes |
| `POST` | `/api/payment/order` | Create a Razorpay payment order | Yes |
| `POST` | `/api/payment/verify` | Verify Razorpay payment signature | Yes |

---

## ⚙️ How It Works

1. **Sign up** using email/password or Google OAuth via Firebase.
2. **Upload your resume** — PDF.js extracts your projects and skills to personalize the session.
3. **Start an interview** — choose your target role, difficulty level, and question domain.
4. **Answer questions** via text or voice; the AI generates adaptive follow-up questions in real time.
5. **Review your report** — get scored on confidence, communication, and technical accuracy, with a downloadable PDF summary.
6. **Purchase credits** using the Razorpay-powered coin system to unlock additional interview sessions.

---

## 📁 Project Structure

```
interview-iq/
├── client/                  # React + Vite frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Route-level page components
│   │   ├── store/           # Redux Toolkit slices & store
│   │   └── utils/           # Helpers & API wrappers
│   └── package.json
│
├── server/                  # Express.js backend
│   ├── controllers/         # Route handler logic
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API route definitions
│   ├── middleware/          # Auth & error-handling middleware
│   └── package.json
│
└── README.md
```

---

## 📸 Screenshots

> Add your screenshots here by replacing the paths below.

| Landing Page | Interview Setup | Analytics Dashboard |
|---|---|---|
| ![Landing](./screenshots/landing.png) | ![Setup](./screenshots/setup.png) | ![Analytics](./screenshots/analytics.png) |

---

## 🤝 Contributing

Contributions are welcome! Please open an issue first to discuss what you'd like to change, then submit a pull request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

---

## 📄 License

Distributed under the **ISC License**. See `LICENSE` for more information.

---

<div align="center">
  <p>Built with ❤️ using the MERN stack</p>
  <p><strong>InterviewIQ.AI</strong> — Practice smarter. Interview better.</p>
</div>
