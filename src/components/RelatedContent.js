// src/components/RelatedContent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RelatedContent = ({ category }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    const fetchRelatedContent = async () => {
      const postsResponse = await axios.get(`/api/posts/related?category=${category}`);
      setRelatedPosts(postsResponse.data);

      const videosResponse = await axios.get(`/api/videos/related?category=${category}`);
      setRelatedVideos(videosResponse.data);
    };
    fetchRelatedContent();
  }, [category]);

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Related Content</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-lg font-semibold mb-2">Related Posts</h4>
          {relatedPosts.map(post => (
            <div key={post._id} className="mb-2">
              <a href={`/post/${post._id}`} className="text-blue-600">{post.title}</a>
            </div>
          ))}
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Related Videos</h4>
          {relatedVideos.map(video => (
            <div key={video.id} className="mb-2">
              <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="text-blue-600">{video.title}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedContent;