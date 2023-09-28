import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const BestSellerLists = () => {
  const [posts, setPosts] = useState();
  const BASE_URL = "http://localhost:8000";
  const { id } = useParams();
  const getPosts = async () => {
    try {
      //   console.log(BASE_URL)
      const response = await fetch(BASE_URL + `/bestseller/${id}`);
      const allPosts = await response.json();
      setPosts(allPosts);
      console.log(allPosts);
      console.log(posts)
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h2>bestseller posts</h2>
      <ul>
        { posts && posts.chocolate_id.map((post, index) => (
            <div className="BestsellerPosts" key={index}>
              {/* <Link key={posts._id} to={`${posts.id}`}> */}
                <div className="images">
                  <img alt={post?.tags} src={post?.image} />
                </div>
                <div className="ptags">
                  <p>{post?.name}</p>
                </div>
              {/* </Link> */}
            </div>
          ))}
      </ul>
    </div>
  );
};

export default BestSellerLists;
