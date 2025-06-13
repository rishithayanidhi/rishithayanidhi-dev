import React from "react";
import SmartDashboardImg from "../assets/Smart-Dashboard.png";
import SkycastImg from "../assets/Sky-Cast.jpg";
import RouteOptimizerImg from "../assets/Route-Optimizer.jpg";
import SafesyncImg from "../assets/Safe-sync.jpg";
import ProductManagementImg from "../assets/come.jpg";
import EcommercedImg from "../assets/Ecommerce.jpg";

const projects = [
  {
    title: "Smart Gaurdian Rider System",
    description:
      "Ensures the rider is wearing a helmet before ignition using real-time image processing.",
    tags: ["Python", "OpenCV", "Image Processing"],
    image: SafesyncImg,
    github: "https://github.com/rishithayanidhi/Smart-Safety-Analyse",
  },
  {
    title: "Route Optimizer",
    description:
      "Web app that optimizes delivery routes for logistics using Maps API.",
    tags: ["Python", "Flask", "Google Maps API", "React.js"],
    image: RouteOptimizerImg,
    github: "https://github.com/rishithayanidhi/Route-Optimizer",
  },
  {
    title: "Sky Cast",
    description:
      "Weather app providing real-time conditions using Weather API.",
    tags: ["Javascript", "Weather API", "CSS"],
    image: SkycastImg,
    github: "https://github.com/rishithayanidhi/SkyCast",
  },
  {
    title: "Product Store Management",
    description:
      "Fullstack CRUD app for managing products, built with MERN stack.",
    tags: ["React.js", "Express.js", "Node.js", "MongoDB", "Tailwind CSS"],
    image: ProductManagementImg,
  },
  {
    title: "Smart Lamp Dashboard",
    description:
      "Responsive dashboard with data visualizations and controls.",
    tags: ["HTML", "Javascript", "CSS"],
    image: SmartDashboardImg,
    github: "https://github.com/rishithayanidhi/Smart-Lamp-Dashboard",
  },
  {
    title: "E-commerce Application",
    description:
      "Modern ecommerce store with cart, authentication, and payment gateway.",
    tags: ["React.js", "JavaScript", "Firebase"],
    image: EcommercedImg,
    github: "https://github.com/rishithayanidhi/amazon-clone",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mt-[90px] pb-12 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold flex items-center justify-center gap-2 mb-2 font-[ubuntu]">
          <span>
            <img
              width="32"
              height="32"
              src="https://img.icons8.com/fluency/48/macbook.png"
              alt="laptop"
            />
          </span>
          <span className="text-yellow-300">My</span>
          <span className="text-purple-300">Projects</span>
        </h2>
        <p className="text-gray-300 text-lg font-[cambria]">
          Explore my finest creations — crafted with passion, precision, and a spark of innovation.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-[#1e293b] rounded-2xl overflow-hidden shadow-md hover:shadow-[0_0_30px_#06b6d4] transform transition-transform duration-300 hover:scale-105 flex flex-col"
          >
            {/* Image with overlay */}
            <div className="relative font-[ubuntu]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4 text-center">
                <p className="text-white text-sm sm:text-base font-[ubuntu] pointer-events-none">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between flex-grow bg-[#1e293b]">
              <div>
                <h3 className="font-[ubuntu] text-xl font-semibold text-cyan-400 mb-3">
                  {project.title}
                </h3>
                <div className="font-[ubuntu] mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="font-[ubuntu] bg-cyan-900 text-cyan-200 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Button */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[ubuntu] mt-auto inline-block border text-center border-cyan-400 text-cyan-400 hover:bg-cyan-600 hover:text-white px-4 py-2 rounded-md transition pointer-events-auto"
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
