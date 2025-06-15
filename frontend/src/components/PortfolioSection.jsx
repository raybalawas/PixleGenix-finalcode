const projects = [
  {
    title: "E-Commerce Mobile App",
    image: "https://images.unsplash.com/photo-1643906226799-59eab234e41d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RSUyMENvbW1lcmNlJTIwTW9iaWxlJTIwQXBwfGVufDB8fDB8fHww",
    description: "A scalable and feature-rich e-commerce mobile application for Android and iOS.",
    // link: "/portfolio/ecommerce-app",
  },
  {
    title: "SaaS Web Platform",
    image: "https://images.unsplash.com/photo-1555209183-8facf96a4349?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNhYVMlMjBXZWIlMjBQbGF0Zm9ybXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Cloud-based SaaS platform with multi-tenant architecture and advanced analytics.",
    // link: "/portfolio/saas-platform",
  },
  {
    title: "Healthcare Portal",
    image: "https://images.unsplash.com/photo-1608979827489-2b855e79debe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEhlYWx0aGNhcmUlMjBQb3J0YWx8ZW58MHx8MHx8fDA%3D",
    description: "Secure and HIPAA-compliant healthcare management portal for patients and doctors.",
    // link: "/portfolio/healthcare-portal",
  },
  {
    title: "Travel Booking Website",
    image: "https://images.unsplash.com/photo-1619687702140-93b976c626ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFRyYXZlbCUyMEJvb2tpbmclMjBXZWJzaXRlfGVufDB8fDB8fHww",
    description: "User-friendly travel booking website with integrated payment gateways.",
    // link: "/portfolio/travel-booking",
  },
];

const PortfolioSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Our <span className="text-indigo-600">Portfolio</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map(({ title, image, description, link }) => (
            <a
              key={title}
              href={link}
              className="block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
