import React, { useEffect, useState } from 'react';

const PopupModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 8000); // 8 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-1 rounded-2xl shadow-2xl w-[95%] max-w-3xl h-[95vh] overflow-auto">
            <div className="bg-white rounded-xl overflow-hidden h-full flex flex-col justify-between">
              <div className="p-8 overflow-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-indigo-700">
                    🚀 Welcome to PixelGenix IT Solution
                  </h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-500 hover:text-red-500 text-3xl font-bold"
                  >
                    ×
                  </button>
                </div>

                <p className="text-gray-700 mb-6 text-base">
                  🚨 Unlock access to our premium IT training, project consulting, and tailored software solutions.
                  Fill the form below and we’ll get back to you shortly!
                </p>

                <form className="space-y-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
                  >
                    📩 Send Inquiry
                  </button>
                </form>
              </div>

              <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center py-3 text-sm font-medium rounded-b-xl">
                🔥 1000+ developers trust PixelGenix IT Solution. Join the revolution today!
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupModal;
