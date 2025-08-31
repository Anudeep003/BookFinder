# 📚 Book Finder App

A React-based book search application that uses the **OpenLibrary API** to search for books, show book covers, filter results, and display suggestions based on user search history.

---

## 🚀 Features

- 🔍 **Search books** by title, author, or keywords
- 📖 **View book covers** (from OpenLibrary covers API)
- 🏠 **Home page** with genre-based book rows
- 💡 **Suggestions** update dynamically based on search history
- 🎯 **Filters** (author, year, subject) for refined search
- 📜 **Search results page** for viewing all matching books
- 🔄 **Responsive layout** with horizontal scrolling book rows
- 🖼 **Custom background image** for UI design

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── BookCard.js        # Single book display with cover
│   ├── BookRow.js         # Horizontal scroll row of books by genre
│   ├── Filters.js         # Filter options for search
│   ├── Header.js          # Top navigation/header
│   ├── HomeButton.js      # Home navigation button
│   ├── SearchBar.js       # Search input + button
│   ├── SearchResults.js   # Displays search results
│   └── Suggestions.js     # Dynamic suggestions based on search history
│
├── App.js                 # Main React app logic
├── App.css                # Global styles
├── index.js               # ReactDOM entry point
```

---

## ⚙️ Installation & Setup

1. Clone this repository

   ```bash
   git clone https://github.com/your-username/book-finder.git
   ```

2. Navigate into the project folder

   ```bash
   cd book-finder
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Start the development server
   ```bash
   npm start
   ```

---

## 🌐 API Used

This app uses the **OpenLibrary API**:

- Search API → `https://openlibrary.org/search.json?q=`
- Covers API → `https://covers.openlibrary.org/b/id/{cover_id}-M.jpg`

---

## 🖼️ Background Image

You can set a custom background in **App.css**:

```css
.App {
  background-image: url("https://t4.ftcdn.net/jpg/08/45/54/81/360_F_845548159_cUYQy0RjfgUygxCZRlUILJdxScOvxXVy.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}
```

---

## 📸 Screenshots

### Home Page

📖 Genre-based book rows with horizontal scroll

<img width="1895" height="894" alt="Screenshot 2025-08-31 222909" src="https://github.com/user-attachments/assets/179bbd7d-a7b6-44a1-9916-091536db0d58" />

### Search Results

🔍 Displays matching books with covers, authors, and filters

<img width="1895" height="860" alt="Screenshot 2025-08-31 222953" src="https://github.com/user-attachments/assets/4965b954-c93f-44ae-8fc8-d8e16b6f6af5" />

---

## 🛠️ Technologies Used

- React.js (Functional Components + Hooks)
- CSS (for styling)
- OpenLibrary API

---

## 📌 Future Improvements

- Add login system to save user preferences
- Show detailed book info (author bio, description, ratings)
- Implement pagination or infinite scroll
- Dark mode UI

---
