import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Updated blog data for WhatsApp Bulk Messaging & OTP API business
const blogData = [
  {
    id: 1,
    title: "The Future of WhatsApp Bulk Messaging for Businesses",
    description: `Discover how WhatsApp bulk messaging is changing the way businesses connect with customers at scale.`,
    content: `
      WhatsApp has become the world's most popular messaging platform, and businesses are leveraging it to deliver instant updates, offers, and alerts.
      
      Bulk messaging APIs allow companies to send thousands of messages with one click, ensuring better reach and engagement compared to traditional SMS.
      
      At Zerfinix, we help businesses unlock this power with secure, scalable, and API-driven solutions — from promotional campaigns to customer support.
    `,
    image: "/whatsapp1.jpg",
    author: "Team Zerfinix",
    date: "September 1, 2025",
    slug: "future-of-whatsapp-bulk-messaging",
  },
  {
    id: 2,
    title: "Why OTP APIs are Essential for Modern Businesses",
    description:
      "Learn why secure OTP authentication is the backbone of digital platforms in banking, e-commerce, and SaaS.",
    content: `
      In today’s digital-first world, protecting user accounts and transactions is more important than ever.
      
      One-Time Passwords (OTPs) sent via SMS or WhatsApp provide a fast and reliable authentication method that prevents fraud while keeping user experience seamless.
      
      Zerfinix OTP APIs are built for speed, reliability, and scalability — ensuring your users never face delays in verification.
    `,
    image: "/otp.jpg",
    author: "Security Experts at Zerfinix",
    date: "August 25, 2025",
    slug: "why-otp-apis-are-essential",
  },
  {
    id: 3,
    title: "Boosting Customer Engagement with WhatsApp Campaigns",
    description:
      "See how businesses use WhatsApp campaigns to drive sales, customer loyalty, and instant communication.",
    content: `
      Marketing is all about being where your customers are — and today, they’re on WhatsApp.
      
      From sending festival greetings to launching a new product, WhatsApp campaigns provide unmatched open rates and direct customer reach.
      
      Zerfinix bulk messaging APIs let you schedule, personalize, and analyze campaigns with ease, helping you maximize ROI.
    `,
    image: "/campaign.jpg",
    author: "Zerfinix Marketing Team",
    date: "August 15, 2025",
    slug: "boosting-customer-engagement-whatsapp",
  },
];

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const found = blogData.find((b) => b.slug === slug);
    setBlog(found);
  }, [slug]);

  if (!blog) {
    return (
      <div className="text-center py-20 text-gray-500">
        <h2 className="text-xl">Blog not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-72 object-cover rounded-xl mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
      <div className="text-sm text-gray-500 mb-6">
        <span>By {blog.author}</span> · <span>{blog.date}</span>
      </div>
      <div className="text-lg text-gray-700 leading-8 whitespace-pre-line">
        {blog.content}
      </div>
    </div>
  );
};

export default BlogDetail;
