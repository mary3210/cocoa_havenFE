import  {useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const BASE_URL = "http:/localhost:8000/"

    const getPosts = async () => {
        try {
            const response = await fetch(BASE_URL + "/posts");
            const allPosts = await response.json();
            setPosts(allPosts)
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        getPosts();
    }, []);

    return 

}