import { LiaLaptopCodeSolid } from "react-icons/lia";
import javaIcon from '../assets/icons/java.png';
import javascriptIcon from '../assets/icons/javascript.png';
import typescriptIcon from '../assets/icons/typescript.png';
import nodejsIcon from '../assets/icons/nodejs.png';
import expressIcon from '../assets/icons/node-js.png';
import dsaIcon from '../assets/icons/database.png';
import gitIcon from '../assets/icons/github.png';
import apiIcon from '../assets/icons/api.png';
import htmlIcon from '../assets/icons/html-5.png';
import cssIcon from '../assets/icons/css3.png';
import reactIcon from '../assets/icons/react.png';
import postmanIcon from '../assets/icons/postman.png';
import pythonIcon from '../assets/icons/python.png';
import cppIcon from '../assets/icons/cpp.png';
import cIcon from '../assets/icons/c.png';
import firebaseIcon from '../assets/icons/firebase.png';
import mongodbIcon from '../assets/icons/mongodb.png';
import mysqlIcon from '../assets/icons/mysql.png';

const skills = [
  { name: 'Java', icon: javaIcon, percent: 88 },
  { name: 'JavaScript', icon: javascriptIcon, percent: 92 },
  { name: 'TypeScript', icon: typescriptIcon, percent: 45 },
  { name: 'NodeJS', icon: nodejsIcon, percent: 88 },
  { name: 'ExpressJS', icon: expressIcon, percent: 85 },
  { name: 'DSA', icon: dsaIcon, percent: 80 },
  { name: 'Git', icon: gitIcon, percent: 90 },
  { name: 'REST API', icon: apiIcon, percent: 85 },
  { name: 'HTML5', icon: htmlIcon, percent: 95 },
  { name: 'CSS3', icon: cssIcon, percent: 90 },
  { name: 'ReactJS', icon: reactIcon, percent: 93 },
  { name: 'Postman', icon: postmanIcon, percent: 85 },
  { name: 'Python', icon: pythonIcon, percent: 90 },
  { name: 'C++', icon: cppIcon, percent: 82 },
  { name: 'C', icon: cIcon, percent: 80 },
  { name: 'Firebase', icon: firebaseIcon, percent: 82 },
  { name: 'MongoDB', icon: mongodbIcon, percent: 87 },
  { name: 'MySQL', icon: mysqlIcon, percent: 85 },
];

const Skills = () => {
  return (
    <section className="w-full min-h-screen pt-30 py-16 px-4 md:px-20 bg-gradient-to-b from-purple-800 to-purple-900 text-white overflow-y-auto">
      <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-2">
        <LiaLaptopCodeSolid className="text-5xl text-white" />
        <span className="text-white">Skills & </span>
        <span className="text-yellow-400">Abilities</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="relative group cursor-pointer bg-[#0e0e2c] p-4 rounded-xl flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 border border-purple-500 shadow-md hover:shadow-purple-700"
          >
            {/* Animated shine effect */}
            <span className="absolute inset-0 bg-gradient-to-l from-transparent via-white/10 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-45"></span>

            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 mb-3 object-contain z-10"
            />
            <p className="text-sm font-medium mb-2 z-10">{skill.name}</p>

            {/* Progress bar, hidden by default and visible on hover */}
            <div className="w-full h-2 bg-gray-700 rounded overflow-hidden mt-1 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div
                className="h-full bg-blue-500 transition-all duration-500"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
