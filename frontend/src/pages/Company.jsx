import { useParams } from "react-router-dom";
import {
  FaUserTie,
  FaLaptopCode,
  FaBriefcase,
  FaNetworkWired,
  FaCommentAlt,
  FaUserFriends,
  FaNewspaper,
  FaProjectDiagram,
} from "react-icons/fa";

// Full content for each company section (Updated for WhatsApp Business Automation)
const companyData = {
  about: {
    title: "About Us",
    description:
      "Learn about our WhatsApp Bulk Messaging & Automation services.",
    icon: <FaUserTie className="text-indigo-600 text-4xl mb-4" />,
    content: (
      <>
        <p className="mb-4">
          At <strong>Zerfinis</strong>, we help businesses grow smarter with
          next-gen WhatsApp Bulk Messaging, Chatbots, and Automation tools. Our
          solutions empower companies to connect with their customers instantly,
          build relationships, and drive sales.
        </p>
        <p className="mb-4">
          Whether you’re a startup, SME, or enterprise, our secure and scalable
          messaging platforms make customer engagement seamless and impactful.
        </p>
        <ul className="list-disc list-inside text-left text-gray-700 space-y-1">
          <li>50k+ messages delivered successfully</li>
          <li>Serving 17+ businesses worldwide</li>
          <li>99.9% uptime with enterprise-grade security</li>
        </ul>
      </>
    ),
  },
  "case-studies": {
    title: "Case Studies",
    description: "See how businesses scaled with Zerfinis.",
    icon: <FaLaptopCode className="text-indigo-600 text-4xl mb-4" />,
    content: (
      <>
        <h3 className="text-lg font-semibold mt-4 mb-2">
          Case Study: E-commerce Brand
        </h3>
        <p className="mb-4">
          A leading e-commerce store increased repeat orders by{" "}
          <strong>70%</strong>
          using our WhatsApp abandoned cart recovery campaigns and broadcast
          promotions.
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">
          Case Study: Education Institute
        </h3>
        <p>
          We implemented an AI-powered chatbot for student queries, reducing
          support calls by <strong>60%</strong>
          and improving admission conversion rates.
        </p>
      </>
    ),
  },
  career: {
    title: "Career",
    description:
      "Join Zerfinis & be part of the future of business communication.",
    icon: <FaBriefcase className="text-indigo-600 text-4xl mb-4" />,
    content: (
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="mb-4">
            At Zerfinis, we’re building cutting-edge communication platforms. If
            you’re passionate about automation, AI, and digital growth — we’d
            love to have you onboard.
          </p>
          <ul className="list-disc list-inside text-left text-gray-700 space-y-1 mb-6">
            <li>Flexible remote work opportunities</li>
            <li>Innovation-driven culture</li>
            <li>Learning & growth programs</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">Open Positions:</h3>
          <ul className="list-disc list-inside text-left text-gray-700 space-y-1">
            <li>Full Stack Developer (Node.js, React)</li>
            <li>AI/Chatbot Specialist</li>
            <li>Business Development Executive</li>
            <li>Customer Success Manager</li>
          </ul>
        </div>
        <div className="bg-white border rounded-xl shadow-lg p-6">
          <h4 className="text-xl font-semibold mb-4 text-indigo-700">
            Apply Now
          </h4>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded-md"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-2 border rounded-md"
            />
            <select className="w-full p-2 border rounded-md">
              <option>Select Position</option>
              <option>Full Stack Developer</option>
              <option>AI/Chatbot Specialist</option>
              <option>Business Development Executive</option>
              <option>Customer Success Manager</option>
            </select>
            <input type="file" className="w-full" />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-2 border rounded-md"
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    ),
  },
  infrastructure: {
    title: "Infrastructure",
    description: "Robust systems for large-scale messaging.",
    icon: <FaNetworkWired className="text-indigo-600 text-4xl mb-4" />,
    content: (
      <>
        <p className="mb-4">
          Zerfinis infrastructure is designed for speed, reliability, and
          compliance. We ensure smooth delivery of millions of messages daily
          with enterprise-level security.
        </p>
        <ul className="list-disc list-inside text-left text-gray-700 space-y-1">
          <li>Cloud-hosted scalable servers</li>
          <li>End-to-end encrypted message delivery</li>
          <li>99.9% uptime with global coverage</li>
        </ul>
      </>
    ),
  },
  testimonials: {
    title: "Testimonials",
    description: "What our clients say about us.",
    icon: <FaCommentAlt className="text-indigo-600 text-4xl mb-4" />,
    content: (
      <div className="space-y-6">
        <div className="bg-white border rounded-xl shadow-md p-6">
          <p className="text-gray-700 italic">
            “Zerfinis helped us cut marketing costs and boost ROI with targeted
            WhatsApp campaigns. Our conversions increased by 50% in just 3
            months!”
          </p>
          <div className="mt-4 font-semibold text-indigo-600">
            — CA Hawan, Founder of EduTech Coaching Center
          </div>
        </div>
        <div className="bg-white border rounded-xl shadow-md p-6">
          <p className="text-gray-700 italic">
            “The Bulk WhatsApp Messaging Service helped us connect with
            customers faster and grow our business effortlessly.”
          </p>
          <div className="mt-4 font-semibold text-indigo-600">
            — Veena Kanwar, Founder of PixelGenix IT Solutions
          </div>
        </div>
      </div>
    ),
  },
  "referral-partner": {
    title: "Referral Partner",
    description: "Refer clients & earn up to 25% commission.",
    icon: <FaUserFriends className="text-indigo-600 text-4xl mb-4" />,
    content: (
      <>
        <p className="mb-4">
          Partner with Zerfinis — earn while helping businesses grow with
          WhatsApp automation.
        </p>
        <ul className="list-disc list-inside text-left text-gray-700 space-y-1">
          <li>Up to 25% commission on referrals</li>
          <li>Dedicated partner support</li>
          <li>Real-time referral tracking dashboard</li>
        </ul>
        <p className="mt-4">
          📩 Contact: <strong>zerfinispvtltd@gmail.com</strong>
        </p>
      </>
    ),
  },
  news: {
    title: "News",
    description: "Latest updates from Zerfinis.",
    icon: <FaNewspaper className="text-indigo-600 text-4xl mb-4" />,
    content: (
      <>
        <ul className="list-disc list-inside text-left text-gray-700 space-y-1">
          {/* <li>Zerfinis launches AI-powered WhatsApp Chatbot</li> */}
          <li>Crossed 17+ global clients milestone</li>
          <li>Recognized as “Top WhatsApp Business API Provider 2025”</li>
        </ul>
      </>
    ),
  },
  portfolio: {
    title: "Portfolio",
    description: "Some of our successful client implementations.",
    icon: <FaProjectDiagram className="text-indigo-600 text-4xl mb-4" />,
    content: (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-lg shadow-lg p-4 bg-white">
          <img
            src="/src/assets/portfolio1.avif"
            alt="Project 1"
            className="rounded mb-3"
          />
          <h4 className="text-lg font-semibold text-indigo-700 mb-1">
            Retail Broadcast Campaign
          </h4>
          <p className="text-sm text-gray-600 mb-2">
            Automated festive sale campaigns via WhatsApp — boosted sales by 3X
            in 2 weeks.
          </p>
          <p className="text-xs text-gray-500">
            Tech Stack: WhatsApp API, Node.js, Cloud Hosting
          </p>
        </div>
        <div className="border rounded-lg shadow-lg p-4 bg-white">
          <img
            src="/src/assets/portfolio2.avif"
            alt="Project 2"
            className="rounded mb-3"
          />
          <h4 className="text-lg font-semibold text-indigo-700 mb-1">
            Education Chatbot
          </h4>
          <p className="text-sm text-gray-600 mb-2">
            Smart chatbot to answer student queries, send reminders & process
            registrations automatically.
          </p>
          <p className="text-xs text-gray-500">
            Tech Stack: WhatsApp API, Dialogflow, React
          </p>
        </div>
      </div>
    ),
  },
};

const Company = () => {
  const { section } = useParams();
  const content = companyData[section];

  if (!content) {
    return (
      <div className="text-center py-20 text-gray-500">
        <h2 className="text-xl">Page Not Found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <div className="text-center mb-6">
        {content.icon}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          {content.title}
        </h1>
        <p className="text-gray-600 text-lg">{content.description}</p>
      </div>
      <div className="text-gray-700 text-base leading-7">{content.content}</div>
    </div>
  );
};

export default Company;
