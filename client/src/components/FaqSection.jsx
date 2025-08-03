import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "What is SkillSphere Pro?",
    answer:
      "SkillSphere Pro is a platform designed to empower students, educators, and corporates with cutting-edge skill development and certification programs.",
  },
  {
    question: "Do you offer certifications?",
    answer:
      "Yes, we provide certifications for completed courses that are recognized by various institutions and organizations.",
  },
  {
    question: "Can I switch between monthly and yearly billing?",
    answer:
      "Absolutely. You can toggle your billing preference anytime through your account settings.",
  },
  {
    question: "Is there a student discount?",
    answer:
      "Yes, we offer special pricing for students and educators. Please check the pricing section or contact support for verification details.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button className={`flex justify-between items-center w-full px-6 py-4 text-left text-white rounded-lg bg-indigo-700 hover:bg-indigo-800 transition duration-300 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500`}>
                    <span className="text-lg font-medium">{faq.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-300 transition-transform`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 pt-4 pb-2 text-gray-700 bg-indigo-50 rounded-b-lg">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
