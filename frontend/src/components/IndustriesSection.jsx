const industries = [
  {
    name: "FinTech",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1374&auto=format&fit=crop",
  },
  {
    name: "Healthcare",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format&fit=crop",
  },
  {
    name: "Education",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format&fit=crop",
  },
  {
    name: "Retail",
    image: "https://images.unsplash.com/photo-1739989934321-fadbccc56265?w=500&auto=format&fit=crop",
  },
  {
    name: "Travel & Hospitality",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop",
  },
  {
    name: "Logistics",
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=500&auto=format&fit=crop",
  },
];

const IndustriesSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Industries We <span className="text-indigo-600">Serve</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Empowering businesses across sectors with innovative technology solutions tailored to each industry's needs.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map(({ name, image }) => (
            <div
              key={name}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 p-4 flex flex-col items-center"
            >
              <img
                src={image}
                alt={name}
                className="h-16 w-16 object-cover rounded-full mb-3 border-2 border-indigo-100"
                loading="lazy"
              />
              <p className="text-gray-800 font-semibold text-sm">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
