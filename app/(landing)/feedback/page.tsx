"use client";

import { useState } from "react";
import { LandingNavbar } from "@/components/landing-navbar";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react"; // Icons for success/error messages

const Feedback = () => {
  // States to manage form inputs and submission status
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulating form submission
    if (name && email && message) {
      setSubmitted(true);
      setError(false);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setError(true);
    }
  };

  return (
    <div className="h-full">
      <LandingNavbar />
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          We Value Your Feedback
        </h1>
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
          {submitted && !error && (
            <div className="mb-6 flex items-center justify-center space-x-2">
              <CheckCircle className="text-green-500 h-6 w-6" />
              <span className="text-green-500 font-medium">
                Thank you for your feedback!
              </span>
            </div>
          )}
          {error && (
            <div className="mb-6 flex items-center justify-center space-x-2">
              <XCircle className="text-red-500 h-6 w-6" />
              <span className="text-red-500 font-medium">
                Please fill in all fields before submitting.
              </span>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Feedback
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows={5}
                placeholder="Your Feedback"
              ></textarea>
            </div>
            <div className="text-center">
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md"
              >
                Submit Feedback
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
