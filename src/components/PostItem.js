import React, { useState } from 'react';
import axios from 'axios';
import { FaRegThumbsUp, FaRocketchat, FaEye  } from "react-icons/fa";

import CommentSection from './CommentSection';

function PostItem({ post }) {
  const [likes, setLikes] = useState(post.interactions.likes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = async () => {
    try {
      await axios.post(`http://localhost:5000/api/posts/${post._id}/interact`, { type: 'like' });
      setLikes(likes + 1);
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };
  
  const handleView = async () => {
    try {
      await axios.post(`http://localhost:5000/api/posts/${post._id}/interact`, { type: 'view' });
    } catch (error) {
      console.error('Error recording view:', error);
    }
  };

 

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden" onMouseEnter={handleView}>
      <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.information}</p>
        <div className="flex items-center space-x-4 text-gray-500">
          <button onClick={handleLike} className="flex items-center space-x-1 hover:text-blue-600">
            <FaRegThumbsUp className="h-5 w-5" />
            <span>{likes}</span>
          </button>
          <button onClick={() => setShowComments(!showComments)} className="flex items-center space-x-1 hover:text-blue-600">
            <FaRocketchat className="h-5 w-5" />
            <span>{post.interactions.comments}</span>
          </button>
          <div className="flex items-center space-x-1">
            <FaEye className="h-5 w-5" />
            <span>{post.interactions.views}</span>
          </div>
        </div>
      </div>
      {showComments && <CommentSection postId={post._id} />}
    </div>
  );
}

export default PostItem;