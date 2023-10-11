import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const DarkChocolateList = () => {
  const [posts, setPosts] = useState();
  const BASE_URL = "http://localhost:8000";

  const getPosts = async () => {
    try {
      const response = await fetch(BASE_URL + `/posts/getChocolate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({chocolate_type: "dark chocolate"})
      });
      const allPosts = await response.json();
      setPosts(allPosts);
      console.log(allPosts);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div>
      <h2>Dark Chocolate posts</h2>
      <ul>
        {posts &&
          posts.map((post, index) => (
            <div className="DarkChocolatePosts" key={index}>
              <Link key={post._id} to={`/darkchocolates/${post._id}`}>
              <div className="images">
                <img alt={post?.tags} src={post?.image} />
              </div>
              <div className="ptags">
                <p>{post?.name}</p>
              </div>
              </Link>
              <button>Add to Cart</button>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default DarkChocolateList;
