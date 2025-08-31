import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

function BookRow({ genre, query }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchGenreBooks = async () => {
      const res = await fetch(
        `https://openlibrary.org/search.json?subject=${encodeURIComponent(
          query
        )}`
      );
      const data = await res.json();
      const booksData = data.docs.slice(0, 10).map((book) => ({
        key: book.key,
        title: book.title,
        author: book.author_name ? book.author_name.join(", ") : "Unknown",
        cover: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : "https://via.placeholder.com/150x200?text=No+Cover",
      }));
      setBooks(booksData);
    };
    fetchGenreBooks();
  }, [query]);

  return (
    <div className="book-row">
      <h2>{genre}</h2>
      <div className="scroll-container">
        {books.map((book) => (
          <BookCard key={book.key} {...book} />
        ))}
      </div>
    </div>
  );
}

export default BookRow;
