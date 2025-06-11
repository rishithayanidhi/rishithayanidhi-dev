import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0F172A] text-white py-16 px-4 sm:px-6 lg:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          <span className="text-yellow bg-gradient-to-r from-blue-400 via-teal-400 to-yellow-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <p className="mt-3 text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Left: Contact Form */}
        <div className="bg-[#0B1120] rounded-xl p-6 sm:p-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-[#1E293B] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-[#1E293B] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded bg-[#1E293B] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-3 rounded bg-[#1E293B] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="mt-2 inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-2 rounded-full hover:bg-violet-700 shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Info + Social */}
        <div className="space-y-6">
          {/* Contact Info */}
          <div className="bg-[#0B1120] rounded-xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-violet-700 p-2 rounded-full">
                  <FaEnvelope className="text-white" />
                </div>
                <span>rishithayanidhi@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-violet-700 p-2 rounded-full">
                  <FaPhone className="text-white" />
                </div>
                <span>+91 9884947313</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-[#0B1120] rounded-xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Social Media</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="https://github.com/rishithayanidhi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E293B] hover:bg-[#334155] text-center py-3 rounded transition transform hover:scale-105"
              >
                <FaGithub className="mx-auto mb-1 text-xl" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rishithayanidhi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E293B] hover:bg-[#334155] text-center py-3 rounded transition transform hover:scale-105"
              >
                <FaLinkedin className="mx-auto mb-1 text-xl" />
                LinkedIn
              </a>
              <a
                href="https://twitter.com/rishithayanidhi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E293B] hover:bg-[#334155] text-center py-3 rounded transition transform hover:scale-105"
              >
                <FaTwitter className="mx-auto mb-1 text-xl" />
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
