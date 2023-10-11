import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const BASE_URL = "http://localhost:8000";

  const getPosts = async () => {
    try {
        console.log(BASE_URL)
      const response = await fetch(BASE_URL + "/posts/allItems");
      const allPosts = await response.json();
      console.log(allPosts)
      setPosts(allPosts);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h2>Chocolist posts</h2>
      <ul>
        {posts &&
          posts.map((post, index) => (
       
            <div className="HomePosts" key={index}>

              <Link key={post._id} to={`/home/${post._id}`}>
                <div className="images">
                  <img alt={post.tags} src={post.image} />
                </div>
                <div className="ptags">
                  <p>{post.name}</p>
                </div>
              </Link>
              <button>Add To Cart</button>
            </div>
          ))}
      </ul>
    </>
  );
};
export default PostList