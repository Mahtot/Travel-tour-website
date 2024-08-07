import { useState, useEffect, useContext } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";

export default function Account() {
  const navigateTo = useNavigate();
  const { user, login } = useContext(ApiContext);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isSignUp, setIsSignUp] = useState(true);

  useEffect(() => {
    if (user) {
      navigateTo('/');
    }
  }, [user, navigateTo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    login(formData);
    alert("Account created successfully!");
    setFormData({
      firstName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (user && user.email === formData.email && user.password === formData.password) {
      alert("Sign in successful!");
      setFormData({
        firstName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col items-center">
      {!user ? (
        <div className="flex flex-col w-[80vw] max-w-md mx-auto mt-[150px] p-6">
          <h2 className="text-[18px] 531:text-4xl font-bold mb-6 font-montserrat">{isSignUp ? "Sign Up" : "Sign In"}</h2>
          <form onSubmit={isSignUp ? handleSignUp : handleSignIn} className="flex flex-col gap-4">
            {isSignUp && (
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FC6C22]"
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FC6C22]"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FC6C22]"
            />
            {isSignUp && (
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FC6C22]"
              />
            )}
            <button
              type="submit"
              className="submit p-2 bg-[#FC6C22] text-white rounded-md hover:scale-105 focus:outline-none"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="mt-4 text-blue-500 hover:underline focus:outline-none"
          >
            {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Register"}
          </button>
        </div>
      ) : ""}
    </div>
  );
}
