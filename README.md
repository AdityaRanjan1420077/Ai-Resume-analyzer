ApplyIQ – Resume Tracker

ApplyIQ is a smart and user-friendly resume tracking web application that helps job seekers manage, track, and analyze resumes efficiently. Users can upload resumes, view detailed feedback, monitor scores, and gain insights for career growth, all through a modern, responsive interface.

🌐 Live Demo: https://ai-resume-analyzer-tracker-ashen.vercel.app/

Features

📄 Upload & Manage Resumes – Easily add multiple resumes and organize them.

🔹 Detailed Resume Analytics – View scores, feedback, and areas of improvement.

🖼️ Resume Preview – Preview uploaded resumes directly in the app.

🧩 Resume Summary – Track and categorize resumes by role, company, or status.

🌐 Responsive Design – Works seamlessly across desktop, tablet, and mobile.

🔐 Authentication – Secure login and session management.

🗑️ Wipe App Data – Delete all resumes and clear stored data for testing or reset.
Project Structure

ApplyIQ/
├─ src/
│  ├─ app/
│  │  ├─ components/
│  │  │  ├─ Accordion.tsx
│  │  │  ├─ ATS.tsx
│  │  │  ├─ Details.tsx
│  │  │  ├─ FileUploader.tsx
│  │  │  ├─ Navbar.tsx
│  │  │  ├─ ResumeCard.tsx
│  │  │  ├─ ScoreBadge.tsx
│  │  │  ├─ ScoreCircle.tsx
│  │  │  ├─ ScoreGauge.tsx
│  │  │  └─ Summary.tsx
│  │  ├─ lib/
│  │  │  ├─ pdf2img.ts       # Converts PDF resumes to image previews
│  │  │  ├─ puter.ts         # Auth, FS, KV, AI utilities
│  │  │  └─ util.ts          # Helper functions
│  │  ├─ routes/
│  │  │  ├─ auth.tsx
│  │  │  ├─ home.tsx
│  │  │  ├─ resume.tsx
│  │  │  ├─ upload.tsx
│  │  │  └─ wipe.tsx
│  │  └─ constants/
│  │     └─ index.ts
├─ public/
│  ├─ icons/
│  ├─ images/
│  ├─ favicon.ico
│  └─ pdf.worker.min.mjs
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
├─ tsconfig.json
└─ README.md

Installation

1. Clone the repository:

git clone https://github.com/yourusername/ApplyIQ.git
cd ApplyIQ

2. Install dependencies:

npm install
# or
yarn install

3. Start the development server:

npm run dev
# or
yarn dev

Usage

Register/Login – Access the dashboard securely.

Upload Resumes – Use the FileUploader to add resumes in PDF format.

View Resume Analytics – See score badges, summary, and detailed feedback.

Preview Resumes – Check resumes directly inside the app with the ATS viewer.

Organize & Track – Categorize resumes and track their progress.

Optional: Wipe Data – Use the wipe route to delete all resumes and clear app storage (for testing or reset purposes).

Technologies Used

Technologies Used

🛠️ React 18 + TypeScript – Frontend development with type safety and modern features.

🎨 Tailwind CSS – Responsive and utility-first styling for fast UI development.

🔀 React Router v7 – Efficient routing between pages.

🗃️ usePuterStore – Custom store for authentication, file storage, and AI utilities.

📄 PDF.js – Rendering and converting PDFs for previews.

🔧 Git/GitHub – Version control and project management.

Contributing

Fork the repository and create a new branch for each feature or bug fix.

Ensure code is clean and well-commented.

Submit pull requests for review.
