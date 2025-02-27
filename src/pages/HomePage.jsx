import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Authentication from "../components/Authentication";

function HomePage() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowAuthModal(true);
  };

  const handleGuestClick = () => {
    navigate("/event"); // Navigate to the Event page as a guest
  };

  return (
    <div className="bg-primary min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Authentication Modal */}
      {showAuthModal && <Authentication onClose={() => setShowAuthModal(false)} />}

      {/* Hero Section */}
      <div className="hero-section animate-fadeIn bg-gray-200 p-20 rounded-full">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-12">
          Welcome to <br />
          <span
            className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r 
                from-pink-500 via-purple-500 to-indigo-500 animate-textGlow"
          >
            EventPlanner
          </span>
        </h1>

        <p className="text-lg md:text-xl text-textLight max-w-2xl mx-auto mb-8">
          Your one-stop destination to discover, organize, and attend amazing
          events. Let’s make your events unforgettable.
        </p>

        {/* Buttons for Login and Continue as Guest */}
       
          <button
            onClick={handleGuestClick}
            className="px-8 py-3 text-lg md:text-xl font-semibold text-gray-800 bg-gray-300 rounded-full hover:bg-gray-400 transition-transform transform hover:scale-105 shadow-lg"
          >
            Continue as Guest
          </button>
      
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-[-1]">
        <div className="bg-gradient-to-b from-secondary to-primary h-full w-full opacity-50"></div>
        <div className="absolute w-72 h-72 bg-accent rounded-full opacity-20 blur-2xl -top-10 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-secondary rounded-full opacity-20 blur-3xl -bottom-20 -right-20 animate-pulse"></div>
      </div>

      <div className="absolute top-20 left-10">
        <div className="w-6 h-6 bg-accent rounded-full animate-bounce"></div>
      </div>
      <div className="absolute bottom-20 right-10">
        <div className="w-8 h-8 bg-secondary rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}

export default HomePage;

