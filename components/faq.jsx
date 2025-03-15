"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqimage = "/faqimage.png";

const faqs = [
  { question: "When And Where Will Kritanj Take Place?", answer: "Kritanj will be held at Narula Institute of Technology, Kolkata. Stay tuned for exact dates and venue details." },
  { question: "Who Can Participate In Kritanj?", answer: "Students from all colleges and universities can participate. Some events may have eligibility criteria, so check the event details." },
  { question: "How Can I Register For Kritanj?", answer: "You can register by visiting our [Registration Page], selecting the events you want to participate in, and completing the form." },
  { question: "What Is The Cost For Registration?", answer: "The registration fee varies depending on the event. Check the event description on the for specific pricing details." },
  { question: "Can I Register For Multiple Events?", answer: "Yes! You can participate in multiple events as long as there are no scheduling conflicts." },
  { question: "What Prizes Can I Win At Kritanj?", answer: "We have exciting prizes for all events, including cash prizes, certificates, and trophies. Check the event details for specific prize information." },
  {question : "when is the last date of idea submission for Hack-O-NiT?", answer: "The last date of idea submission for hackathon is 16th March 2025."}
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-8 px-6">

      <div className="text-left mb-12">
        <h2 className="text-4xl ml-4 font-bold blinking-outline">FAQs</h2>
        <p className="text-gray-400 ml-4 mt-2">Got Questions? We've Got Answers!</p>
      </div>

      
      <div className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center max-h-96">
          <img src={faqimage} alt="FAQs Illustration" className="w-3/4 md:w-full" />
        </div>

        <div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b-2 border-gray-600 rounded-lg">
                <button
                  className="w-full flex justify-between items-center py-4 px-5  rounded-lg text-white"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDownIcon
                    className={`w-6 h-6 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-5 py-3 text-gray-300  rounded-lg">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}