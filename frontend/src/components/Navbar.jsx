import React, { useState } from "react";
import { Link } from "react-router-dom";
import pxlogo from "../assets/pxlogo.png";
import { useNavigate } from 'react-router-dom';

import {
  FaUserTie, FaLaptopCode, FaBriefcase, FaNetworkWired,
  FaCommentAlt, FaUserFriends, FaNewspaper, FaProjectDiagram,
  FaMobileAlt, FaCode, FaGlobe, FaGamepad, FaBullhorn, FaRocket, FaRobot, FaShoppingCart,
  FaBars, FaTimes
} from "react-icons/fa";



const services = [
    {
      title: "Mobile App Development",
      description: "User-friendly mobile apps tailored to your business needs.",
      icon: <FaMobileAlt className="text-indigo-600 text-xl group-hover:scale-110 group-hover:text-purple-700 transition-transform duration-300" />,
      content: "We build native and cross-platform mobile applications with seamless performance.",
    },
  {
    title: "Software Development",
    description: "Custom software designed for scalability and efficiency.",
    icon: <FaCode className="text-indigo-600 text-xl group-hover:scale-110 group-hover:text-purple-700 transition-transform duration-300" />,
    content: "Enterprise-grade software solutions for automation, CRM, ERP, and more.",
  },
  {
    title: "Web Development",
    description: "Responsive, high-performance websites for all industries.",
    icon: <FaGlobe className="text-indigo-600 text-xl group-hover:scale-110 group-hover:text-purple-700 transition-transform duration-300" />,
    content: "Modern websites with React, Node, and scalable backend solutions.",
  },
  {
    title: "Game Development",
    description: "Immersive gaming experiences with cutting-edge tech.",
    icon: <FaGamepad className="text-indigo-600 text-xl group-hover:scale-110 group-hover:text-purple-700 transition-transform duration-300" />,
    content: "2D/3D and AR/VR games for mobile, PC, and web platforms.",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven strategies to boost visibility and growth.",
    icon: <FaBullhorn className="text-indigo-600 text-xl group-hover:scale-110 group-hover:text-purple-700 transition-transform duration-300" />,
    content: "SEO, PPC, Social Media, and content marketing strategies that convert.",
  },
  {
    title: "On-Demand",
    description: "Scalable on-demand solutions for instant service delivery.",
    icon: <FaRocket className="text-indigo-600 text-xl group-hover:scale-110 group-hover:text-purple-700 transition-transform duration-300" />,
    content: "Taxi, food, home services — fully managed on-demand apps.",
  },
  {
    title: "AI Development",
    description: "AI-powered automation, insights, and smart solutions.",
    icon: <FaRobot className="text-indigo-600 text-xl group-hover:scale-110 group-hover:text-purple-700 transition-transform duration-300" />,
    content: "Chatbots, predictive analytics, NLP, and ML-based applications.",
  },
  {
    title: "eCommerce Development",
    description: "Seamless, scalable shopping platforms built for growth.",
    icon: <FaShoppingCart className="text-indigo-600 text-xl group-hover:scale-110 group-hover:text-purple-700 transition-transform duration-300" />,
    content: "Custom eCommerce stores with secure payment, cart, and admin panel.",
  },
];

const dropdownItems = [
  {
    title: "About Us",
    description: "Learn about our app and software development services.",
    path: "/company/about",
    icon: <FaUserTie className="text-indigo-600 text-xl group-hover:scale-110 group-hover:text-purple-700 transition-transform duration-300" />,
  },
  {
    title: "Case Studies",
    description: "Explore our successful real-world solutions.",
    path: "/company/case-studies",
    icon: <FaLaptopCode className="text-indigo-600 text-xl group-hover:scale-110 group-hover:text-purple-700 transition-transform duration-300" />,
  },
  {
    title: "Career",
    description: "Join our team & grow in a dynamic environment.",
    path: "/company/career",
    icon: <FaBriefcase className="text-indigo-600 text-xl group-hover:scale-110 group-hover:text-purple-700 transition-transform duration-300" />,
  },
  {
    title: "Infrastructure",
    description: "Modern setup that ensures efficiency & security.",
    path: "/company/infrastructure",
    icon: <FaNetworkWired className="text-indigo-600 text-xl group-hover:scale-110 group-hover:text-purple-700 transition-transform duration-300" />,
  },
  {
    title: "Testimonials",
    description: "See how we’ve helped our clients succeed.",
    path: "/company/testimonials",
    icon: <FaCommentAlt className="text-indigo-600 text-xl group-hover:scale-110 group-hover:text-purple-700 transition-transform duration-300" />,
  },
  {
    title: "Referral Partner",
    description: "Refer clients, earn rewards, grow your network.",
    path: "/company/referral-partner",
    icon: <FaUserFriends className="text-indigo-600 text-xl group-hover:scale-110 group-hover:text-purple-700 transition-transform duration-300" />,
  },
  {
    title: "News",
    description: "Stay updated on achievements & trends.",
    path: "/company/news",
    icon: <FaNewspaper className="text-indigo-600 text-xl group-hover:scale-110 group-hover:text-purple-700 transition-transform duration-300" />,
  },
  {
    title: "Portfolio",
    description: "Creative and expert project showcases.",
    path: "/company/portfolio",
    icon: <FaProjectDiagram className="text-indigo-600 text-xl group-hover:scale-110 group-hover:text-purple-700 transition-transform duration-300" />,
  },
];

const Navbar = () => {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [activeService, setActiveService] = useState(services[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const navigate = useNavigate();
const handleServiceClick = () => {
  navigate('/allservices');
};

  let servicesTimeout, dropdownTimeout;

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg shadow-md border-b border-indigo-200 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 max-h-12">
          <img
            src={pxlogo}
            alt="PixelGenix Logo"
            className="object-contain"
            style={{ height: "48px", width: "48px" }}
          />
          {/* <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent tracking-widest font-serif">
              PixelGenix<span className="text-black">-IT SOLUTIONS</span>
            </span> */}
          <span className="tracking-widest font-serif leading-tight">
            <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
              PixelGenix
            </span>
            <span className="text-2xl bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
              
            </span>
            <br />
            <span className="text-sm text-black font-semibold ml-1">
              IT SOLUTIONS
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="space-x-6 hidden md:flex items-center relative">
          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => {
              clearTimeout(servicesTimeout);
              setServiceOpen(true);
            }}
            onMouseLeave={() => {
              servicesTimeout = setTimeout(() => {
                setServiceOpen(false);
              }, 150);
            }}
          >
            <button className="text-gray-700 hover:text-indigo-600 font-medium flex items-center gap-1">
              Services
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {serviceOpen && (
              <div className="absolute top-full -left-44 mt-4 w-[800px] bg-white border border-gray-200 rounded-lg shadow-xl grid grid-cols-2 gap-4 p-6 z-50 transition-all">
                <div className="flex flex-col space-y-2 pr-4 border-r border-gray-200">
                  {services.map((item, i) => (
                    <button
                      key={i}
                      className={`flex items-start gap-3 p-3 rounded-lg text-left transition-all hover:bg-indigo-50 ${
                        activeService.title === item.title
                          ? "bg-indigo-100"
                          : ""
                      }`}
                      onMouseEnter={() => setActiveService(item)}
                      onClick={() => navigate("/services")}
                      onMouseLeave={() => setActiveService(services[0])}
                    >
                      {item.icon}
                      <div>
                        <h4 className="font-semibold text-indigo-700">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="p-3">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                    {activeService.title}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {activeService.content}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Company Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => {
              clearTimeout(dropdownTimeout);
              setDropdownOpen(true);
            }}
            onMouseLeave={() => {
              dropdownTimeout = setTimeout(() => {
                setDropdownOpen(false);
              }, 150);
            }}
          >
            <button className="text-gray-700 hover:text-indigo-600 font-medium flex items-center gap-1">
              Company
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full -left-44 mt-4 w-[640px] bg-white border border-gray-200 rounded-lg shadow-xl grid grid-cols-2 gap-4 p-5 z-50">
                {dropdownItems.map(({ title, description, path, icon }, i) => (
                  <Link
                    to={path}
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-all"
                  >
                    {icon}

                    <div>
                      <h4 className="font-semibold text-indigo-700">{title}</h4>
                      <p className="text-sm text-gray-600">{description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other Nav */}
          <Link
            to="/services"
            className="hover:bg-indigo-50 p-3 rounded-lg block text-gray-700 font-medium"
          >
            All Services
          </Link>
          <Link
            to="/portfolio"
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            Portfolio
          </Link>
          <Link
            to="/blog"
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            Contact
          </Link>
          <Link
            to="/contact"
            className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white px-4 py-2 space-y-2 shadow">
          <button
            onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
            className="w-full text-left font-medium text-gray-700"
          >
            Services
          </button>
          {mobileServiceOpen && (
            <div className="pl-4 space-y-1">
              {services.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
            className="w-full text-left font-medium text-gray-700"
          >
            Company
          </button>
          {mobileCompanyOpen && (
            <div className="pl-4 space-y-1">
              {dropdownItems.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          )}

          <div className="md:hidden bg-white/80 backdrop-blur-lg px-4 py-4 space-y-3 shadow-xl rounded-b-xl transition-all duration-500">
            <Link
              to="/services"
              className="block text-indigo-700 font-medium hover:bg-indigo-50 px-3 py-2 rounded-md transition-all"
            >
              All Services
            </Link>

            <Link
              to="/portfolio"
              className="block text-indigo-700 font-medium hover:bg-indigo-50 px-3 py-2 rounded-md transition-all"
            >
              Portfolio
            </Link>

            <Link
              to="/blog"
              className="block text-indigo-700 font-medium hover:bg-indigo-50 px-3 py-2 rounded-md transition-all"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="block text-indigo-700 font-medium hover:bg-indigo-50 px-3 py-2 rounded-md transition-all"
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="inline-block w-full text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-4 py-2 rounded-md shadow hover:shadow-md hover:scale-[1.02] transition-transform duration-300"
            >
              🚀 Get Quotes
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
