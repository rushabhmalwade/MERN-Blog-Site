import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});

  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  // console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill all the fields");
    }
    console.log("Form data:", formData);

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("http://localhost:3001/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setErrorMessage(error.message);
      console.log(error);
    }
  };

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
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="">
              <Label value="Your username" />
              <TextInput
                type="text"
                id="username"
                placeholder="Username"
                onChange={handleChange}
                value={formData.username}
              />
            </div>
            <div className="">
              <Label value="Your email" />
              <TextInput
                type="text"
                id="email"
                placeholder="name@company.com"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div className="">
              <Label value="Your password" />
              <TextInput
                type="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            {errorMessage && (
              <Alert className="p-0" color="failure">
                {errorMessage}
              </Alert>
            )}

            <Button className="" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner size="sm" /> <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
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
