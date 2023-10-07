import React, { useState, useEffect } from "react";
import { IPostData } from "../types/types";
import "../styles/postList.css";
const PostList: React.FC = () => {
  const [posts, setPosts] = useState<IPostData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Post Data</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
