import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/GlobalState";
import { auth } from "../firebase";

const Header = () => {
  const { user } = useAuth();
  const handleAuthentication = () => {
    auth.signOut();
  };
  return (
    <div className="bg-[#131921] w-full h-16 flex sticky z-50 top-0 items-center justify-evenly">
      <Link to="/">
        <div className="w-28 object-contain mt-4 mx-4">
          <img
            src="https://clone-dffaf.web.app/static/media/amazonLogo.1c9be0b254d3ff1dc9e9.png"
            alt=""
          />
        </div>
      </Link>
      <div className="flex w-full">
        <input
          className="w-full p-4 h-3 border-none outline-none"
          type="text"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 p-1 bg-[#cd9042]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <div className="flex w-fit justify-evenly">
        <Link to={!user && "/login"}>
          <div className="grid text-white mx-3" onClick={handleAuthentication}>
            <span className="text-xs whitespace-nowrap">
              Hello {`${user ? user.email : "GUEST"}`}
            </span>
            <span className="text-sm font-bold">
              Sign {`${user ? "Out" : "In"}`}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="grid text-white mx-3">
            <span className="text-xs whitespace-nowrap">Returns</span>
            <span className="text-sm font-bold whitespace-nowrap">
              & Orders
            </span>
          </div>
        </Link>
        <Link to="/login">
          <div className="grid text-white mx-3">
            <span className="text-xs whitespace-nowrap">Your</span>
            <span className="text-sm font-bold">Prime</span>
          </div>
        </Link>
        <Link to="/login">
          <div className="flex text-white mx-3 items-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>

            <span className="text-sm font-bold mx-2">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
