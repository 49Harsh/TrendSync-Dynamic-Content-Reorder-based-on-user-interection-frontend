// src/components/CreatePost.js
import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [post, setPost] = useState({
    title: '',
    imageUrl: '',
    information: '',
    category: ''
  });

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/posts', post);
      // Redirect to home page or show success message
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={post.title}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="text"
        name="imageUrl"
        placeholder="Image URL"
        value={post.imageUrl}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
      />
      <textarea
        name="information"
        placeholder="Information"
        value={post.information}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
      ></textarea>
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={post.category}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
      />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Create Post</button>
    </form>
  );
};

export default CreatePost;