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
    mapUrl:
      "https://maps.app.goo.gl/aG6hgzAUu1m7eU4k7",
  },
  {
    degree: "HSE – Computer Science",
    institution:
      "Shree Niketan Patasala, Mannivakkam, Chennai",
    duration: "2021–2023",
    status: "Completed",
    cgpa: null,
    logo: snptLogo,
    mapUrl:
      "https://maps.app.goo.gl/napec4ZSwSxhsYbt6",
  },
];

const Education = () => {
  return (
    <section className="w-full min-h-screen flex items-center py-16 pt-25 px-0">
      <div className="mx-auto flex flex-col items-center w-full">
        {/* Heading */}
        <div className="flex items-center mb-10">
          <FaGraduationCap className="text-3xl mr-3 text-black" />
          <h2 className="text-4xl font-bold">
            <span className="text-black">My </span>
            <span className="text-purple-900">Education</span>
          </h2>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 w-[95%] max-w-[1200px]">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-300 border-l-8 border-purple-700 flex items-start"
            >
              <div className="text-purple-700 text-3xl mt-1 mr-4">
                <FaGraduationCap />
              </div>

              <div className="flex flex-col w-full">
                <h3 className="text-xl font-bold text-blue-900 mb-1">
                  {edu.degree}
                </h3>
                <p className="text-gray-700 mb-2">{edu.institution}</p>
                <p className="text-green-700 font-semibold mb-4">
                  {edu.duration} | {edu.status}
                  {edu.cgpa && ` | ${edu.cgpa}`}
                </p>

                {/* Institution Details with Image and Location */}
                <div className="w-full h-56 rounded-xl overflow-hidden shadow-lg relative">
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
      </div>
    </section>
  );
};

export default Education;
