"use client";  // Mark the component as a client component

import { useState } from "react";
import { LandingNavbar } from "@/components/landing-navbar";
import { ChevronDown, ChevronUp } from "lucide-react"; // Importing icons for the arrows

const Faq = () => {
  // State to manage which FAQ is open
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Function to toggle FAQ visibility
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // FAQ items
  const faqs = [
    {
      question: "What is Nagrik AI?",
      answer:
        "Nagrik AI is a specialized platform designed to empower Indian citizens by providing accurate and up-to-date information on laws, regulations, government schemes, constitutional rights, and legislative acts.",
    },
    {
      question: "How can I use Nagrik AI?",
      answer:
        "You can use Nagrik AI by visiting our website, where you can explore information on various topics, ask questions, and receive AI-generated answers tailored to your needs.",
    },
    {
      question: "Is Nagrik AI free to use?",
      answer:
        "Yes, Nagrik AI is completely free to use. Our mission is to make legal and civic information accessible to everyone.",
    },
    {
      question: "How accurate is the information provided by Nagrik AI?",
      answer:
        "We strive to provide the most accurate and up-to-date information. Our platform is continuously updated with the latest legal and civic data.",
    },
    {
      question: "Can Nagrik AI help me understand government schemes?",
      answer:
        "Absolutely! Nagrik AI provides detailed information about various government schemes, including eligibility criteria, benefits, and how to apply.",
    },
    {
      question: "Is my data safe with Nagrik AI?",
      answer:
        "Yes, we prioritize your privacy and data security. Any personal information shared with us is handled with the utmost care and confidentiality.",
    },
    {
      question: "How often is the information on Nagrik AI updated?",
      answer:
        "Our team regularly updates the platform to ensure that all information is current and accurate, reflecting the latest legal and civic changes.",
    },
  ];

  return (
    <div className="h-full">
      <LandingNavbar />
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Frequently Asked Questions (FAQ)
        </h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg p-6 rounded-lg transition-all duration-300 ease-in-out ${
                openFAQ === index ? "border-l-4 border-gray-400" : ""
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {faq.question}
                </h2>
                <span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-6 w-6 text-gray-600" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-600" />
                  )}
                </span>
              </div>
              <div
                className={`mt-4 text-gray-600 transition-max-height duration-300 ease-in-out overflow-hidden ${
                  openFAQ === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
