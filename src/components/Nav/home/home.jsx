import React from "react";
import PostList from "../../PostList/PostList";
import useToken from "../../useToken";
import { Link, useLocation } from "react-router-dom";
import { getToken, useSaveToken } from "../../useToken";

export default function Home() {
  return (
    <div>
      <div className="cover">
        {/* <img src="https://images.pexels.com/photos/4514544/pexels-photo-4514544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/> */}
        <h3>Home</h3>
         <Link to="http://lvh.me:3000/bestseller/64e7b3b068d0086836a8cee9">
        shop now</Link>
      </div>
      <PostList />
    </div>
  );
}
