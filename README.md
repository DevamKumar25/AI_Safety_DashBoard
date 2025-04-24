# ⚠️ AI Safety Dashboard

A responsive and interactive dashboard built with **React + TypeScript + Tailwind CSS** to track and manage AI safety incidents.

> 🔗 [Live Preview](http://localhost:5173) | 🛠️ [GitHub Repo](https://github.com/DevamKumar25/AI_Safety_DashBoard)

---

## 🚀 Getting Started

Follow these simple steps to set up the project locally:

### 📦 Clone the Repository

```bash
git clone https://github.com/DevamKumar25/AI_Safety_DashBoard.git
cd AI_Safety_DashBoard
📥 Install Dependencies
Make sure Node.js (v16+) and npm are installed on your machine.

bash
Copy
Edit
npm install
▶️ Run the Development Server
bash
Copy
Edit
npm run dev
Once the server starts, visit:

arduino
Copy
Edit
http://localhost:5173
✅ Features
📋 View AI incidents with Title, Severity, and Reported Date

🔍 Filter incidents by severity: All, Low, Medium, High

🕓 Sort incidents by date: Newest First, Oldest First

👁️ Toggle View Details to see full descriptions

📝 Submit new incidents using a validated form

📱 Fully responsive layout using Tailwind CSS (Flexbox/Grid)

🧠 Design Decisions & Challenges
🧩 Modular Components: Separation of concerns via reusable components

🎨 Tailwind CSS: Rapid styling with utility-first classes

🧾 Type Safety: TypeScript interfaces ensure safety and maintainability

🧠 Local State: All logic is handled via React's built-in hooks (no backend)

📁 Folder Structure
css
Copy
Edit
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
🧰 Built With
React

TypeScript

Tailwind CSS

Vite

👨‍💻 Author
Made with ❤️ by Devam Kumar

📝 License
This project is intended for demo/assessment purposes only and does not use any real-world data.

