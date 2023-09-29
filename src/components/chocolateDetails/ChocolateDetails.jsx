import { useState, useEffect } from "react";
import { useParams } from "react-router";

const ShowChocolate = (props) => {
  const [ShowChocolate, setShowChocolate] = useState(null);
  const { id } = useParams();
  const BASE_URL = "http://localhost:8000";

  const getChocolate = async () => {
    try {
       
      const response = await fetch(BASE_URL + `/posts/getOneChoco/${id}` , {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },});
      const result = await response.json();

      setShowChocolate([result]);
     
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getChocolate();
  }, []);

  return (
    <div className="showpage">
      <h1>Chocolate Info</h1>
      {console.log(ShowChocolate)}
      {ShowChocolate &&
        ShowChocolate.map((post) => (
          <div>
            <img src={post?.image} alt={post?.tags} />
            <h1>{post?.name}</h1>
            <p>{post?.price}</p>
            <p>{post?.detail}</p>
          </div>
        ))}
    </div>
  );
};

export default ShowChocolate;  