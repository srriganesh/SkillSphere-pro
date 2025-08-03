import React from "react";

export default function PartnersSection() {
  const logos = [
    { src: "/logos/Google.svg", alt: "Google" },
    { src: "/logos/Amazon.png", alt: "Amazon" },
    { src: "/logos/Meta.svg", alt: "Meta" },
    { src: "/logos/Microsoft.svg", alt: "Microsoft" },
    { src: "/logos/IBM.svg", alt: "IBM" },
    { src: "/logos/Netflix.svg", alt: "Netflix" },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Trusted by leading companies
        </h2>
        <h3>.</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-10 mx-auto grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
