import { useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
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

// Break the skills array into rows of N items each
const getRows = (array, itemsPerRow) => {
  const rows = [];
  for (let i = 0; i < array.length; i += itemsPerRow) {
    rows.push(array.slice(i, i + itemsPerRow));
  }
  return rows;
};

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rows = getRows(skills, 6); // Adjust to match grid-cols (6)

  return (
  <> 
    <section className="w-full min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-4 py-20 md:px-10 lg:px-20 scroll-mt-20">
      {/* Heading */}
      <motion.div
        className="flex items-center justify-center mb-8 px-4 py-2 rounded-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold flex items-center gap-2 text-center font-[ubuntu]">
          <span>
            <img
              width="32"
              height="32"
              src="https://img.icons8.com/arcade/64/source-code.png"
              alt="skills-icon"
            />
          </span>
          <span className="text-white">Skills &</span>
          <span className="text-yellow-400">Abilities</span>
        </h2>
      </motion.div>

      {/* Animated Rows */}
      <div className="flex flex-col gap-6">
        {rows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: rowIndex * 0.3,
            }}
          >
            {row.map((skill, index) => (
              <div
                key={index}
                className="bg-purple-800/30 border border-purple-600 hover:border-yellow-400 p-5 rounded-xl flex flex-col items-center justify-center text-center shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain mb-3"
                />
                <p className="font-semibold text-white text-sm sm:text-base mb-2">
                  {skill.name}
                </p>
                <div className="text-xs text-yellow-300 bg-purple-950 border border-yellow-300 px-2 py-1 rounded-full">
                  {skill.percent}%
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
    <Footer />
  </>   
  );
};

export default Skills;
