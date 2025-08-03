import React from "react";
import CoursesSection from "../components/CoursesSection";

export default function Courses() {
  return (
    <main className="pt-24 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center text-indigo-600">
          Explore Our Courses
        </h1>
        <CoursesSection />
      </div>
    </main>
  );
}
