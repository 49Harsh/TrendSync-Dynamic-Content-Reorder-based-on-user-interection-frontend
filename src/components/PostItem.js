// PostItem.js
import React, { useState } from 'react';
import axios from 'axios';
import { FaRegThumbsUp, FaRocketchat, FaEye, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import CommentSection from './CommentSection';

function PostItem({ post }) {
  const [likes, setLikes] = useState(post.interactions.likes);
  const [showComments, setShowComments] = useState(false);
  const [showFullInfo, setShowFullInfo] = useState(false);

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

  const handleShowFullInfo = () => {
    setShowFullInfo(!showFullInfo);
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onMouseEnter={handleView}
    >
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 sm:h-56 lg:h-64 object-cover"
      />
      <div className="p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4">{post.title}</h2>
        <div className="text-gray-600 mb-4 sm:mb-6 lg:mb-8">
          {showFullInfo ? post.information : `${post.information.slice(0, 100)}...`}
          <button
            onClick={handleShowFullInfo}
            className="text-blue-600 hover:underline transition-colors duration-300 ml-2"
          >
            {showFullInfo ? 'See Less' : 'See More'}
            {showFullInfo ? <FaChevronUp className="inline-block h-4 w-4 ml-1" /> : <FaChevronDown className="inline-block h-4 w-4 ml-1" />}
          </button>
        </div>
        <div className="flex items-center justify-between text-gray-500 text-sm sm:text-base">
          <button
            onClick={handleLike}
            className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-300"
          >
            <FaRegThumbsUp className="h-5 w-5" />
            <span>{likes}</span>
          </button>
          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-300"
          >
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