// src/components/HomePage.js
import React from 'react';
import PostList from './PostList';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Welcome to Content Suggestion App</h1>
      <PostList />
    </div>
  );
};

export default HomePage;