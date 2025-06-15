import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaStar } from "react-icons/fa";
import image from '../assets/image.png';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-2 mb-4 cursor-pointer" onClick={() => handleNavigate("/")}>
            <img
              src={image}
              alt="PixelGenix Logo"
              className="h-14 w-14 object-contain rounded-full shadow-lg"
            />
            <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent tracking-widest font-serif">
              PixelGenix<span className="text-white">-IT SOLUTIONS</span>
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed font-light italic">
            Transforming businesses through next-gen IT solutions that are efficient, innovative, and future-ready.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4 border-b border-indigo-600 inline-block pb-1 font-mono">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["/", "/services", "/portfolio", "/contact"].map((path, idx) => {
              const names = ["Home", "Services", "Portfolio", "Contact"];
              return (
                <li key={idx} className="cursor-pointer hover:text-indigo-500 transition duration-300 ease-in-out" onClick={() => handleNavigate(path)}>
                  {names[idx]}
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Services & Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4 border-b border-indigo-600 inline-block pb-1 font-serif">Solutions</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {[
              "Mobile App Development",
              "iOS App Development",
              "Android App Development",
              "Hybrid App Development",
              "Software Consulting",
              "Web Development",
              "UI/UX Development",
              "Data Analytics Services",
              "Ecommerce App Development"
            ].map((service, index) => (
              <li key={index} className="hover:text-indigo-400 cursor-pointer">{service}</li>
            ))}
          </ul>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4 border-b border-indigo-600 inline-block pb-1 font-bold">Technologies</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>React JS</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>PHP & MySQL</li>
            <li>Laravel</li>
            <li>Artificial Intelligence (AI)</li>
            <li>Machine Learning</li>
            <li>Digital Marketing</li>
            <li>SEO / SEM</li>
            <li>Cloud & DevOps</li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4 border-b border-indigo-600 inline-block pb-1 font-sans">Contact Us</h3>
          <p className="text-sm text-gray-400 mb-2">📍 P.no 148, Laxman Colony, New Sanganer Road, Sodala, Jaipur - 302019</p>
          <p className="text-sm text-gray-400 mb-1">📞 <a href="tel:+916350399815" className="hover:text-green-400">+91 63503 99815</a>, <a href="tel:+917014613453" className="hover:text-green-400">+91 70146 13453</a></p>
          <p className="text-sm text-gray-400">📧 <a href="mailto:pixelgenixitsolutions@gmail.com" className="hover:text-yellow-300">pixelgenixitsolutions@gmail.com</a></p>
        </motion.div>
      </div>

      {/* Social Media & Ratings */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-12 text-center"
      >
        <div className="flex justify-center space-x-5 text-gray-400 text-xl mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition"><FaLinkedinIn /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition"><FaInstagram /></a>
        </div>

        {/* Review Section */}
        <div className="flex justify-center flex-wrap gap-8 mb-6">
          {[
            { name: "Google", rating: 4.8 },
            { name: "Clutch", rating: 4.6 },
            { name: "GoodFirms", rating: 4.8 }
          ].map((platform, idx) => (
            <div key={idx} className="bg-gray-800 px-6 py-3 rounded-lg shadow-inner border border-indigo-500">
              <p className="text-white font-semibold text-lg mb-1">{platform.name}</p>
              <div className="flex items-center justify-center space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.floor(platform.rating) ? 'text-yellow-400' : 'text-gray-600'} />
                ))}
                <span className="ml-2 text-white text-sm">{platform.rating}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-xs text-gray-400 font-light tracking-wider bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 py-2">
          &copy; {new Date().getFullYear()} PixelGenix IT Solution. All Rights Reserved.
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
