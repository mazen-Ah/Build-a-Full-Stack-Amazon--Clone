import React from "react";
import { useAuth } from "../context/GlobalState";
import photo from "../images/checkoutphoto.jpg";
import CheckOutProduct from "./CheckOutProduct";
import Subtotal from "./Subtotal";
const Checkout = () => {
  const { user, basket } = useAuth();
  return (
    <div className="p-6">
      <div className="flex">
        <div className="grid border-b-2 border-[#d3d3d3]">
          <div>
            <img src={photo} alt="" />
          </div>
          <div className="font-bold text-2xl mx-2">Hello, {user?.email}</div>
          <div className="font-bold text-3xl mx-6 m-4">
            Your shopping Basket
          </div>
        </div>
        <Subtotal items={basket.length} />
      </div>
      <div>
        {basket?.map(({ title, price, image, rating, id }) => {
          return (
            <CheckOutProduct
              id={id}
              title={title}
              price={price}
              image={image}
              rating={rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
