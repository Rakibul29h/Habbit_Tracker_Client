# HabitTracker – Build Better Habits, One Day at a Time

🔗 **Live Website:** https://habit-tracker-4dbe3.web.app
🔗 **Client Repository:** https://github.com/Rakibul29h/Habbit_Tracker_Client
🔗 **Server Repository:** https://github.com/Rakibul29h/Habit_Tracker_Server 

HabitTracker is a full-stack habit tracking web application that helps users create, manage, and maintain daily habits while building strong streaks to boost productivity and consistency.

---

## 🌟 Key Features

-  **Secure Authentication** using Firebase (Email/Password & Google Login)
-  **Create, Update, Delete Habits** with category selection and reminders
-  **Streak Tracking System** based on daily habit completion
-  **Progress Visualization** with completion history and progress bar
-  **Public Habit Browsing** with search and category-based filtering
-  **Private Dashboard** showing only the logged-in user’s habits
-  **Animated UI** using Framer Motion for smooth transitions
-  **Fully Responsive Design** for mobile, tablet, and desktop

---

## 🧭 Pages & Routes

### Public Routes
- Home
- Browse Public Habits
- Login
- Register
- 404 Not Found Page

### Private/Protected Routes
- Add Habit
- My Habits
- Update Habit
- Habit Details

Logged-in users remain authenticated even after page reload and are not redirected to the login page.

---

## 🏠 Home Page Highlights

- 🎞️ **Hero Banner Slider** with meaningful habit-building messages
- ⭐ **Featured Habits Section**  
  - Shows 6 newest public habits  
  - Sorted by `createdAt` (newest first)
- 💡 **Why Build Habits?** section with 4 benefit cards
- ➕ Two additional meaningful sections
- ✨ Smooth animations using Framer Motion

---

## 🔁 CRUD Functionality

### Add Habit
- Title, Description, Category, Reminder Time
- Optional image upload (ImgBB)
- User name & email (read-only)
- Saves habit to MongoDB with success toast

### My Habits
- Displays only the logged-in user’s habits
- Options to Update, Delete, or Mark Complete

### Mark Complete
- Prevents duplicate completion for the same day
- Stores completion date using MongoDB `$push`
- Automatically updates streak count

---

## 🔎 Search & Filter

- Search public habits by title or keyword
- Filter habits by category (Morning, Work, Fitness, Evening, Study)
- Instant UI updates without page reload

---

## 🛠️ Technologies Used

### Client Side
- React
- React Router DOM
- Tailwind CSS
- Firebase Authentication
- Axios
- Framer Motion
- React Hot Toast
- Lottie React

### Server Side
- Node.js
- Express.js
- MongoDB
- Firebase Admin SDK (optional authorization)
- JWT
- dotenv

 No default browser alerts or Lorem Ipsum text used

---

## 🚀 Deployment

- **Client:** Firebase Hosting
- **Server:** Vercel


