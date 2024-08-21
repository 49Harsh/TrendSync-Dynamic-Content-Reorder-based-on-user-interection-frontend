import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`http://localhost:5000/api/posts/${postId}/comments`);
        setComments(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching comments:', error);
        setError('Failed to fetch comments');
        setIsLoading(false);
      }
    };
    fetchComments();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/posts/${postId}/comments`, { content: newComment });
      setComments([...comments, response.data]);
      setNewComment('');
      alert('Comment posted successfully');
    } catch (error) {
      console.error('Error posting comment:', error);
      setError('Failed to post comment');
      alert("We can't post the comment");
    }
  };

  return (
    <div className="p-4 bg-gray-100">
      <h3 className="text-lg font-semibold mb-2">Comments</h3>
      {isLoading ? (
        <p>Loading comments...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul className="space-y-2 mb-4">
          {Array.isArray(comments) && comments.length > 0 ? (
            comments.map((comment, index) => (
              <li key={index} className="bg-white p-2 rounded shadow">
                {comment.content}
                <p className="text-gray-500 text-sm">Posted on {new Date(comment.createdAt).toLocaleString()}</p>
              </li>
            ))
          ) : (
            <li>No comments yet.</li>
          )}
        </ul>
      )}
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="flex-grow p-2 border rounded-l"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r">
          Post
        </button>
      </form>
    </div>
  );
}

export default CommentSection;