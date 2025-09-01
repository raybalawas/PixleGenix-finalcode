// BlogPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

// Blog images (replace with your WhatsApp/OTP related images)
import blog1 from "../assets/blog1.webp";
import blog2 from "../assets/blog2.webp";
import blog3 from "../assets/blog3.jpeg";
import blog4 from "../assets/blog4.jpeg";
import blog5 from "../assets/blog5.webp";
import blog6 from "../assets/blog6.webp";

// Blog categories
const categories = [
  "Latest",
  "WhatsApp Messaging",
  "OTP & Security",
  "Customer Engagement",
  "API Integration",
];

// Blog posts by category
const postsByCat = {
  Latest: [
    {
      id: 1,
      title: "The Future of WhatsApp Bulk Messaging for Businesses",
      category: "WhatsApp Messaging",
      author: "Team Zerfinix",
      date: "1 Sept, 2025",
      img: blog1,
      content:
        "WhatsApp has become the world’s most used messaging platform, and businesses are leveraging bulk messaging APIs for marketing, alerts, and customer engagement. Zerfinix provides scalable APIs that help companies send thousands of messages instantly with analytics and delivery reports.",
    },
    {
      id: 2,
      title: "Why OTP APIs are Critical for Modern Applications",
      category: "OTP & Security",
      author: "Security Experts at Zerfinix",
      date: "25 Aug, 2025",
      img: blog2,
      content:
        "One-Time Passwords (OTPs) play a vital role in safeguarding logins, transactions, and account verifications. Our OTP APIs ensure high-speed delivery, reliability, and fraud prevention for fintech, e-commerce, and SaaS platforms.",
    },
    {
      id: 3,
      title: "Boosting Customer Engagement with WhatsApp Campaigns",
      category: "Customer Engagement",
      author: "Zerfinix Marketing Team",
      date: "15 Aug, 2025",
      img: blog3,
      content:
        "WhatsApp campaigns provide unmatched open rates compared to email. From festive greetings to promotional offers, businesses can connect directly with customers. Zerfinix APIs let you personalize, schedule, and track campaigns effortlessly.",
    },
  ],
  "WhatsApp Messaging": [
    {
      id: 4,
      title: "How Businesses Use WhatsApp for Customer Support",
      category: "WhatsApp Messaging",
      author: "Rajat Verma",
      date: "10 Aug, 2025",
      img: blog4,
      content:
        "WhatsApp support reduces response times and improves customer satisfaction. With our APIs, businesses can automate replies, send quick notifications, and manage multiple chats efficiently.",
    },
    {
      id: 5,
      title: "WhatsApp vs Traditional SMS – Which is Better for Marketing?",
      category: "WhatsApp Messaging",
      author: "Neha Singh",
      date: "5 Aug, 2025",
      img: blog5,
      content:
        "SMS has been around for decades, but WhatsApp offers higher open rates, media support, and instant customer interaction. Learn why businesses are moving their campaigns to WhatsApp bulk messaging.",
    },
  ],
  "OTP & Security": [
    {
      id: 6,
      title: "How OTP APIs Prevent Fraud in Digital Transactions",
      category: "OTP & Security",
      author: "Ajay Kumar",
      date: "20 July, 2025",
      img: blog6,
      content:
        "From banking to e-commerce, OTPs provide a critical layer of security. Zerfinix OTP APIs ensure messages are delivered in real time with 99.9% uptime, making customer authentication seamless and safe.",
    },
  ],
  "Customer Engagement": [
    {
      id: 7,
      title: "Personalized Campaigns: The Key to Higher Conversions",
      category: "Customer Engagement",
      author: "Priya Yadav",
      date: "10 July, 2025",
      img: blog1,
      content:
        "Personalization increases engagement and ROI. With Zerfinix APIs, you can send tailored messages to customer segments and track performance with detailed analytics.",
    },
  ],
  "API Integration": [
    {
      id: 8,
      title: "Integrating WhatsApp APIs into Your Business Platform",
      category: "API Integration",
      author: "Vivek Jha",
      date: "1 July, 2025",
      img: blog2,
      content:
        "Our APIs are developer-friendly and can be integrated with CRMs, ERPs, and mobile apps. Learn how easy it is to get started with our documentation and SDKs.",
    },
  ],
};

const PER_PAGE = 6;

const BlogPage = () => {
  const [activeCat, setActiveCat] = useState("Latest");
  const [page, setPage] = useState(1);
  const posts = postsByCat[activeCat] || [];
  const totalPages = Math.ceil(posts.length / PER_PAGE);
  const displayPosts = posts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero + Search */}
      <div className="py-16 bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Insights on WhatsApp Bulk Messaging & OTP APIs
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Explore expert guides on messaging, authentication, campaigns, and
            integration.
          </p>
          <input
            type="text"
            placeholder="Search..."
            className="w-full md:w-2/3 p-3 rounded-md border border-gray-300 focus:ring-indigo-500 focus:outline-none"
          />
        </motion.div>
      </div>

      {/* Categories Tabs */}
      <div className="mt-8 max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCat(cat);
                setPage(1);
                setSelectedPost(null);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCat === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post Detail View */}
        {selectedPost ? (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <img
                src={selectedPost.img}
                alt={selectedPost.title}
                className="w-full h-96 object-cover rounded"
              />
              <h2 className="text-3xl font-bold mt-6 mb-2 text-gray-800">
                {selectedPost.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                By {selectedPost.author} | {selectedPost.date}
              </p>
              <p className="text-lg text-gray-700 whitespace-pre-wrap">
                {selectedPost.content}
              </p>
            </div>
            <div className="bg-gray-50 rounded p-4 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Related Posts</h3>
              {posts
                .filter((p) => p.id !== selectedPost.id)
                .slice(0, 3)
                .map((post) => (
                  <div
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                    className="cursor-pointer mb-4"
                  >
                    <p className="text-sm text-indigo-600 font-medium">
                      {post.category}
                    </p>
                    <p className="text-md font-semibold text-gray-800">
                      {post.title}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <>
            {/* Posts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg"
                >
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-indigo-500 font-semibold mb-1">
                      {post.category}
                    </p>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600">
                      By {post.author} | {post.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-10 flex justify-center gap-4">
                <button
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  disabled={page === 1}
                  className="px-4 py-2 border rounded disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                  disabled={page === totalPages}
                  className="px-4 py-2 border rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
