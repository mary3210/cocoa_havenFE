import React from "react";

import { useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";

export default function ShoppingCartForm() {
  const [userId, setUserId] = useState([]);
  const [cart, setCart] = useState([]);
  const { id } = useParams();
  const BASE_URL = "http://localhost:8000";

  const getItems = async () => {
    try {
      //   console.log(BASE_URL)
      const response = await fetch(BASE_URL + `/usercart/${id}`);
      const allItems = await response.json();
      setCart(allItems);
      console.log(allItems);
      console.log(cart);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <h2>Shopping Cart</h2>
      <ul>
        {cart &&
          cart.map((item, index) => (
            <div className="HomePosts" key={index}>
              <div className="images">
                <img alt={item?.tags} src={item?.image} />
              </div>
              <div className="ptags">
                <p>{item?.name}</p>
              </div>
            </div>
          ))}
      </ul>
    </>
  );
}
