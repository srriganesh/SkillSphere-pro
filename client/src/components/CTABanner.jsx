import React from "react";

export default function CTABanner() {
  return (
    <section className="bg-white py-20 px-6 border-t">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Ready to unlock your potential?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of learners, educators, and organizations already growing with SkillSphere Pro.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-500 transition duration-300">
            Get Started
          </button>
          <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
