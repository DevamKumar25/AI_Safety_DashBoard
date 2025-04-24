# AI Safety Incident Dashboard 🚨

A simple and responsive frontend dashboard for logging and viewing hypothetical AI safety incidents, built for **HumanChain's AI Safety Assignment**.

---

## 📝 Description

This project is a **frontend-only AI Safety Incident Dashboard**, created as part of an assignment for HumanChain—a company focused on AI safety and trust. The dashboard allows users to view, filter, sort, and report potential AI safety incidents, simulating a real-world internal tool for monitoring such events.

The goal is to assess frontend skills in:

- UI creation & responsiveness
- User interaction
- Client-side state management
- Form handling and validation

---

## 🧰 Tech Stack

- **Framework**: React (with Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (`useState`)
- **Build Tool**: Vite

---

## 📦 Getting Started

Follow the steps below to set up and run the project locally.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/DevamKumar25/AI_Safety_DashBoard.git
cd AI_Safety_DashBoard


### 2️⃣ Install Dependencies
**Make sure you have Node.js (v16+) installed.**
npm install

### 3️⃣ Run the Development Server
npm run dev

Then open your browser and navigate to:
**http://localhost:5173**



## ✅ Features

- View AI safety incidents with **Title**, **Severity**, and **Reported Date**
- **Filter** incidents by severity: `All`, `Low`, `Medium`, `High`
- **Sort** incidents by date: `Newest First`, `Oldest First`
- Toggle **View Details** to show/hide full descriptions
- **Submit new incidents** using a validated form
- Fully **responsive design** using Flexbox/Grid via Tailwind CSS

---

## 🧠 Design Decisions & Challenges

- **Component Structure**: Organized into modular components for clarity and scalability.
- **Tailwind Integration**: Rapid styling using utility-first classes.
- **Type Safety**: Used TypeScript interfaces for incident objects to reduce runtime errors.
- **Local State**: All data is managed in React's memory state for the session—no backend required.

---

## 📁 Folder Structure

src/
├── components/
│   ├── Dashboard.tsx
│   ├── IncidentList.tsx
│   └── IncidentForm.tsx
├── types/
│   └── Incident.ts
├── data/
│   └── mockIncidents.ts
├── App.tsx
├── main.tsx
├── index.css

---

🙌 Author
Built with ❤️ by Devam Kumar

📝 License
This project is provided for assessment/demo purposes only and does not use real-world incident data.


---

You can save this as a `README.md` file in the root of your project directory. Let me know if you'd like help pushing it to GitHub or adding badges/images!


