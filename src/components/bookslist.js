import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { FaTrashAlt, FaStar, FaEdit } from 'react-icons/fa';

const BookList = ({ onDelete }) => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [genreFilter, setGenreFilter] = useState(''); // State for genre filter

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('https://ibst-llc-vijju.onrender.com/api/books');
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleDelete = async (bookId) => {
    try {
      await axios.delete(`https://ibst-llc-vijju.onrender.com/api/books/${bookId}`);
      setBooks(books.filter(book => book._id !== bookId));
      alert("Book deleted successfully!");
    } catch (error) {
      console.error("Error deleting book:", error);
      alert("Error deleting book. Please try again.");
    }
  };

  const handleClick = () => {
    navigate('/add');
  };

  const handleGenreChange = (event) => {
    setGenreFilter(event.target.value);
  };

  // Filter books based on selected genre
  const filteredBooks = genreFilter
    ? books.filter(book => book.joner === genreFilter)
    : books;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ color: '#45a049' }} className="text-2xl font-bold mb-4">Book List</h2>
        <button
          className="text-2xl font-bold mb-4"
          onClick={handleClick}
          style={{ backgroundColor: 'black', color: 'white', height: 50, width: 80, borderRadius: 10, fontWeight: 600 }}
        >
          Add Book
        </button>
      </div>

      {/* Genre Filter */}
      <div style={{ marginBottom: '16px' }}>
        <label style={{ fontWeight: '600', marginRight: '10px' }}>Filter by Genre:</label>
        <select value={genreFilter} onChange={handleGenreChange} style={{ padding: '8px', borderRadius: '5px' }}>
          <option value="">All Genres</option>
          <option value="Historical">Historical</option>
            <option value="Romantic">Romantic</option>
            <option value="Horror">Horror</option>
            <option value="Mythological">Mythological</option>
            <option value="Science">Science</option>
          {/* Add more genres as needed */}
        </select>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {filteredBooks.map(book => (
          <div
            key={book._id}
            style={{
              width: 'calc(20% - 16px)',
              boxSizing: 'border-box',
              marginBottom: '16px',
            }}
          >
            <div
              style={{
                padding: '10px',
                border: '1px solid #45a049',
                borderRadius: '8px',
                width: '250px',
                height: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0' }}>
                <div style={{ fontWeight: '600', color: '#45a049', fontSize: '20px' }}>{book.title}</div>
              </div>
              <img
                src={`https://ibst-llc-vijju.onrender.com${book.image}`}
                alt="Book"
                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                <div style={{ fontWeight: '600', color: 'black', fontSize: '20px' }}>Author</div>
                <div style={{ fontWeight: '600', color: '#45a049', fontSize: '20px' }}>{book.author}</div>
              </div>
              <div
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontWeight: '600',
                  fontSize: '16px',
                  height: '40px',
                  padding: '8px',
                  borderRadius: '10px',
                }}
              >
                {book.description}
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px',
                  backgroundColor: 'black',
                  borderRadius: '10px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', fontSize: '20px' }}>
                  {Array.from({ length: book.rating }, (_, index) => (
                    <FaStar key={index} style={{ color: '#45a049', marginRight: '2px' }} />
                  ))}
                </div>
                <div>
                  <button
                    onClick={() => handleDelete(book._id)}
                    style={{ fontSize: '18px', marginLeft: '10px', cursor: 'pointer', border: 'none', background: 'transparent' }}
                  >
                    <FaTrashAlt style={{ color: 'red' }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
