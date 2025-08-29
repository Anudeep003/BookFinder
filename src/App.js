import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Suggestions from "./components/Suggestions";
import BookRow from "./components/BookRow";
import HomeButton from "./components/HomeButton";
import Filters from "./components/Filters";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [history, setHistory] = useState([]);
  const [view, setView] = useState("home"); // "home" or "results"
  const [filters, setFilters] = useState({
    author: "",
    year: "",
    language: "",
  });

  // Fetch books from OpenLibrary API
  const fetchBooks = async (query, appliedFilters = filters) => {
    if (!query) return;

    let url = `https://openlibrary.org/search.json?q=${encodeURIComponent(
      query
    )}`;

    if (appliedFilters.author)
      url += `&author=${encodeURIComponent(appliedFilters.author)}`;
    if (appliedFilters.year)
      url += `&first_publish_year=${appliedFilters.year}`;
    if (appliedFilters.language) url += `&language=${appliedFilters.language}`;

    const response = await fetch(url);
    const data = await response.json();

    const books = data.docs.map((book) => ({
      key: book.key,
      title: book.title,
      author: book.author_name ? book.author_name.join(", ") : "Unknown",
      cover: book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : "https://via.placeholder.com/150x200?text=No+Cover",
    }));

    setSearchResults(books);
    setHistory((prev) => [query, ...prev.filter((q) => q !== query)]);
    setView("results");
  };

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
    if (history.length > 0) {
      fetchBooks(history[0], newFilters); // re-search last query with filters
    }
  };

  return (
    <div>
      <Header />
      <SearchBar onSearch={fetchBooks} />
      <HomeButton onClick={() => setView("home")} />

      {view === "home" ? (
        <>
          <Suggestions history={history} onSearch={fetchBooks} />
          <BookRow genre="Science Fiction" query="science fiction" />
          <BookRow genre="Romance" query="romance" />
          <BookRow genre="Mystery" query="mystery" />
          <BookRow genre="Fantasy" query="fantasy" />
        </>
      ) : (
        <>
          <Filters onFilter={handleFilter} />
          <SearchResults results={searchResults} />
        </>
      )}
    </div>
  );
}

export default App;
