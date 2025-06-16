// Portfolio.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import portfolio1 from "../assets/portfolio1.avif"; 
import portfolio2 from "../assets/portfolio2.avif"; 
import portfolio3 from "../assets/portfolio3.avif"; 
import portfolio4 from "../assets/portfolio4.avif";
const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A full-featured e-commerce platform with cart, payments, and admin panel.",
    image: portfolio1,
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    whyBetter:
      "Highly scalable and user-friendly interface that enhances the shopping experience.",
    howBuilt:
      "Built with MERN stack, secured payment integration, and responsive UI.",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description:
      "Secure and user-friendly mobile banking application for iOS and Android.",
    image: portfolio2,
    technologies: ["Flutter", "Firebase", "Node.js"],
    whyBetter:
      "Ensures fast transactions and high-level security with biometric login.",
    howBuilt:
      "Cross-platform development using Flutter and Firebase authentication.",
  },
  {
    id: 3,
    title: "Corporate Website",
    description:
      "Responsive website designed for a corporate client with CMS integration.",
    image: portfolio3,
    technologies: ["Next.js", "Headless CMS", "Tailwind CSS"],
    whyBetter:
      "SEO-optimized, fast-loading pages, and easy content management.",
    howBuilt:
      "Server-side rendered with Next.js and integrated with a headless CMS.",
  },
  {
    id: 4,
    title: "Social Media Platform",
    description:
      "Scalable social media web app with real-time messaging and notifications.",
    image: portfolio4,
    technologies: ["React", "Socket.IO", "Express.js", "MongoDB"],
    whyBetter:
      "Interactive UI, real-time updates, and robust back-end performance.",
    howBuilt:
      "WebSockets for real-time chat, React for dynamic UI, and MongoDB for storage.",
  },
];

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-[100vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581091012184-5c7aca3893d4?auto=format&fit=crop&q=80&w=1600')",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <motion.div
          className="relative z-10 text-white text-center px-6 max-w-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Crafting Digital Success Stories with{" "}
            <span className="text-indigo-400">Fusion Coder</span>
          </h2>
          <p className="text-md md:text-lg">
            Explore our diverse portfolio of 500+ projects where we empowered
            businesses to lead with smart, scalable, and future-ready digital
            products. Your transformation story starts here.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">
          Our <span className="text-indigo-600">Portfolio</span>
        </h1>

        {selectedId === null ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(({ id, title, description, image }) => (
              <motion.div
                key={id}
                whileHover={{ scale: 1.03 }}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
                onClick={() => setSelectedId(id)}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-52 object-cover"
                  loading="lazy"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto"
          >
            <button
              onClick={() => setSelectedId(null)}
              className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              ← Back to Portfolio
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>
            <h4 className="text-lg font-semibold mb-1">Technologies Used:</h4>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {selectedProject.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold mb-1">How We Built It:</h4>
            <p className="text-gray-700 mb-4">{selectedProject.howBuilt}</p>
            <h4 className="text-lg font-semibold mb-1">
              Why This is Better for You:
            </h4>
            <p className="text-gray-700">{selectedProject.whyBetter}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
