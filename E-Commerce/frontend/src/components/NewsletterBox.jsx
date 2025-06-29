import React from "react";

const NewsletterBox = () => {
    const submitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        Subscribe now & get 20% off 
      </h2>
      <p className="text-sm font-semibold text-gray-500 mb-4 text-center">
        Get the latest updates & exclusive offers.
      </p>
      <form onSubmit={submitHandler} className="flex flex-col sm:flex-row gap-3">
        <input type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
        />
        <button
          type="submit"
          className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
