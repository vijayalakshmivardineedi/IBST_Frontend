import React, { useState } from 'react';
import axios from 'axios';
import './booksAdd.css';

const AddBookForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');
  const [joner, setJoner] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !author || !description || !image) {
      alert("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('description', description);
    formData.append('rating', rating);
    formData.append('comments', comments);
    formData.append('joner', joner);
    formData.append('image', image);

    try {
      await axios.post('https://ibst-llc-vijju.onrender.com/api/books', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setTimeout(() => {
        alert("Book successfully created");
      }, 2000);

      setTitle('');
      setAuthor('');
      setDescription('');
      setRating('');
      setComments('');
      setJoner('');
      setImage(null);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="form-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="form-group">
          <label className="input-label">Title*</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label className="input-label">Author*</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label className="input-label">Genre*</label>
          <select
            value={joner}
            onChange={(e) => setJoner(e.target.value)}
            className="input-field"
          >
            <option value="" disabled>Select Genre</option>
            <option value="Historical">Historical</option>
            <option value="Romantic">Romantic</option>
            <option value="Horror">Horror</option>
            <option value="Mythological">Mythological</option>
            <option value="Science">Science</option>
          </select>
        </div>
        <div className="form-group">
          <label className="input-label">Description*</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="textarea-field"
          />
        </div>
        <div className="form-group">
          <label className="input-label">Book Image*</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="file-input"
          />
          {image && (
            <div className="image-preview">
              <img src={URL.createObjectURL(image)} alt="Selected" className="preview-image" />
            </div>
          )}
        </div>
        <div className="form-group">
          <label className="input-label">Rating</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="Rating"
            min="1"
            max="5"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label className="input-label">Comments</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Comments"
            className="textarea-field"
          />
        </div>
        <button type="submit" className="submit-btn">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
