import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { FaBlackTie } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      {/*left*/}
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to="/" className="text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-red-500 to-pink-700 rounded-lg text-white">
              Rishabh Blogs
            </span>
          </Link>
          <p className="text-sm mt-5 ">
            This is the blog website for of tech enthusiasats where even others
            can participate to write their own blogs and share their knowledge.
          </p>
        </div>
        {/*right*/}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="">
              <Label value="Your username" />
              <TextInput type="text" id="username" placeholder="Username" />
            </div>
            <div className="">
              <Label value="Your email" />
              <TextInput type="text" id="email" placeholder="name@company.com" />
            </div>
            <div className="">
              <Label value="Your password" />
              <TextInput type="password" id="password" placeholder="Password" />
            </div>
            <Button className="" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>
              Already have an account?{" "}
              <Link className="text-blue-500 hover:text-black" to="/sign-in">
                Sign In
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
