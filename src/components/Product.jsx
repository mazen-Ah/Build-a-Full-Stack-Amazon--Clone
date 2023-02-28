import React from "react";

const Product = ({ title, price, image, rating, id }) => {
  let rr = Array(rating).fill();
  console.log(rr);
  return (
    <div className="bg-white m-4 p-5 w-full hover:scale-110 transition-all grid items-center justify-center">
      <div className="grid items-center  ">
        <p className="text-xl font-normal">{title}</p>
        <p className="text-2xl">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div>
        <p className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              );
            })}
        </p>
      </div>
      <div className="grid items-center justify-center">
        <img className="max-h-52" src={image} alt="product-image" />
      </div>
      <button className="bg-[#CD9042] w-1/2 h-8 mx-auto max-w-xs active:scale-[0.8] transition-all">
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
