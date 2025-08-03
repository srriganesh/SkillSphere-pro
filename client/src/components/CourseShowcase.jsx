import React from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const courses = [
  {
    title: "Full Stack Development",
    desc: "Master MERN Stack with real-world projects and mentor support.",
    tag: "Popular",
  },
  {
    title: "AI & Machine Learning",
    desc: "Build and deploy ML models with Python, TensorFlow, and more.",
    tag: "New",
  },
  {
    title: "UI/UX Design",
    desc: "Design beautiful, user-centric interfaces using Figma and modern principles.",
    tag: "Creative",
  },
];

export default function CourseShowcase() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Explore <span className="text-indigo-600">Trending Courses</span>
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-3">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-indigo-100 via-white to-purple-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="bg-indigo-200 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">
                {course.tag}
              </span>
              <PlayCircle className="text-indigo-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {course.title}
            </h3>
            <p className="text-gray-600">{course.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
