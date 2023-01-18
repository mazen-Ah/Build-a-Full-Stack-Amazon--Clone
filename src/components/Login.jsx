import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-14">
      <Link to="/">
        <img
          className="w-28"
          src="https://clone-dffaf.web.app/static/media/amazonLogo2.808bf88ddaba0301ceca.png"
          alt=""
        />
      </Link>
      <div className="border rounded-md my-8 border-[#d3d3d3] w-[23rem] h-96 p-4">
        <h1 className="font-semibold text-3xl  ">Sign in</h1>
        <form className="my-6">
          <h5 className="font-semibold my-1 text-sm">E-mail</h5>
          <input className="border-2 w-full p-1 border-black" type="email" />
          <h5 className="font-semibold my-1 text-sm">Password</h5>
          <input className="border-2 w-full p-1 border-black" type="Password" />
          <button
            className="w-full my-4  py-1 bg-[#CD9042] border border-[#111]"
            type="submit"
          >
            Sign in
          </button>
          <p className="text-sm my-2">
            By continuing, you agree to Amazon's Fake Clone Conditions of Use
            and Privacy Notice.
          </p>
          <button className="bg-[#F0F0F0] w-full py-1 my-2 border border-[#a9a9a9]">
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
