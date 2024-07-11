// src/components/PostItem.js
import React, { useState } from 'react';

const PostItem = ({ post }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border rounded-lg p-4">
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-2">{post.category}</p>
      <p className={`${expanded ? '' : 'line-clamp-3'}`}>{post.information}</p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-blue-600 mt-2"
      >
        {expanded ? 'See Less' : 'See More'}
      </button>
    </div>
  );
};

export default PostItem;