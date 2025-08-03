import React from "react";

const courses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description: "Master frontend & backend development with real-world projects.",
    image: "/courses/fullstack.jpg",
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    description: "Learn data analysis, visualization, and ML with Python.",
    image: "/courses/data science.png",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Design intuitive and beautiful user experiences.",
    image: "/courses/uxui.jpeg",
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Build modern mobile apps using Flutter or React Native.",
    image: "/courses/mobile.avif",
  },
  {
    id: 5,
    title: "Cybersecurity Fundamentals",
    description: "Understand vulnerabilities, threats, and secure coding.",
    image: "/courses/cybersecurity.png",
  },
  {
    id: 6,
    title: "Cloud Computing with AWS",
    description: "Deploy and scale apps on the AWS cloud platform.",
    image: "/courses/aws.png",
  },
  {
    id: 7,
    title: "AI and Deep Learning",
    description: "Dive into neural networks and deep learning frameworks.",
    image: "/courses/ai.jpeg",
  },
  {
    id: 8,
    title: "Blockchain & Web3",
    description: "Explore smart contracts, dApps, and decentralized tech.",
    image: "/courses/blockchain.webp",
  },
  {
    id: 9,
    title: "DevOps & CI/CD",
    description: "Learn automation, Docker, Jenkins, and GitOps practices.",
    image: "/courses/devops.webp",
  },
  {
    id: 10,
    title: "Digital Marketing",
    description: "Grow businesses through SEO, content, and social media.",
    image: "/courses/marketing.jpg",
  },
  {
    id: 11,
    title: "Game Development",
    description: "Create engaging games with Unity and C#.",
    image: "/courses/gamedev.png",
  },
  {
    id: 12,
    title: "AR/VR Development",
    description: "Build immersive experiences using Unity and WebXR.",
    image: "/courses/arvr.jpg",
  },
  {
    id: 13,
    title: "Ethical Hacking",
    description: "Learn penetration testing and secure system audits.",
    image: "/courses/ethicalhacking.jpg",
  },
  {
    id: 14,
    title: "Product Management",
    description: "From idea to launch: manage and scale digital products.",
    image: "/courses/products.png",
  },
  {
    id: 15,
    title: "Entrepreneurship & Startup Bootcamp",
    description: "Launch, grow, and pitch your own startup venture.",
    image: "/courses/startup.jpg",
  },
];

export default function Courses() {
  return (
    <section className="py-16 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
    
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}