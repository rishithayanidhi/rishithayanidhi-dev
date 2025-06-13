import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import sairamLogo from '../assets/sairam.jpg';
import snptLogo from '../assets/snpt.jpg';

const educationData = [
  {
    degree: "B.E – Computer Science And Engineering",
    institution: "Sri Sairam Engineering College, West Tambaram, Chennai",
    duration: "2023–2027",
    status: "On-Process",
    cgpa: "7.5 CGPA",
    logo: sairamLogo,
    mapUrl: "https://maps.app.goo.gl/aG6hgzAUu1m7eU4k7",
  },
  {
    degree: "HSE – Computer Science",
    institution: "Shree Niketan Patasala, Mannivakkam, Chennai",
    duration: "2021–2023",
    status: "Completed",
    cgpa: null,
    logo: snptLogo,
    mapUrl: "https://maps.app.goo.gl/napec4ZSwSxhsYbt6",
  },
];

const Education = () => {
  return (
    <section className="w-full min-h-screen flex items-center py-16 pt-20 px-4 md:px-0 scroll-mt-20"
    style={{
    background: "linear-gradient(in oklab, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 50%, rgb(15, 23, 42) 100%)"
  }}
    >
      <div className="mx-auto flex flex-col items-center w-full">
        {/* Heading */}
        <div className="flex items-center mb-8 px-4 py-2 rounded-lg">
          <FaGraduationCap className="text-3xl md:text-4xl mr-3 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-yellow-300 font-[ubuntu]">My </span>
            <span className="text-purple-300 font-[ubuntu]">Education</span>
          </h2>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 w-full max-w-[1200px]">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border border-gray-300 border-l-8 border-purple-700 hover:border-yellow-500 flex flex-col md:flex-row items-start gap-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(253,224,71,0.6)]"
            >
              <div className="text-purple-700 text-2xl md:text-3xl mt-1 md:mt-0">
                <FaGraduationCap />
              </div>

              <div className="flex flex-col w-full">
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-1">
                  {edu.degree}
                </h3>
                <p className="text-gray-700 mb-2">{edu.institution}</p>
                <p className="text-green-700 font-semibold mb-4">
                  {edu.duration} | {edu.status}
                  {edu.cgpa && ` | ${edu.cgpa}`}
                </p>

                {/* Institution Details with Image and Location */}
                <div className="w-full h-48 md:h-56 lg:h-64 rounded-xl overflow-hidden shadow-md relative">
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="w-full h-full object-cover"
                  />
                  <a
                    href={edu.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-2 right-2 bg-white/80 text-blue-700 font-medium px-3 py-1 rounded-md text-sm hover:text-orange-500 transition"
                  >
                    📍 Google Maps
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> {/* ✅ This moved here */}
    </section>
  );
};


export default Education;
