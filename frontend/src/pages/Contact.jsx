import { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  // const data = res.json();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitted(false);
    setFormError("");
    setFieldErrors({});

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        Swal.fire({
          icon: "success",
          title: "Submitted!",
          text: data.message || "Contact form submitted successfully!",
        });
      } else {
        if (data.error) {
          // General error
          setFormError(data.error);
        }
        if (data.fieldErrors) {
          // Field-specific errors if sent as an object like { fieldErrors: { name: "...", email: "..." } }
          setFieldErrors(data.fieldErrors);
        }
        // Show backend validation or server errors
        // setFormError(data.error || "Something went wrong. Please try again.");
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: data.error || "Something went wrong. Please try again.",
        // });
        // alert(data.message || "Something went wrong.");
      }
    } catch (error) {
      setFormError("Server error: " + error.message);
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: error.message,
      });
      // alert("Server error: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full px-4 py-16 bg-gradient-to-br from-white to-indigo-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 leading-tight">
          Get in <span className="text-indigo-600">Touch</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-2xl px-6 md:px-10 py-10 space-y-6"
        >
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            {fieldErrors.name && (
              <p className="text-sm text-red-600 mt-1">{fieldErrors.name}</p>
            )}
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="zerfinixpvtltd@gmail.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            {fieldErrors.email && (
              <p className="text-sm text-red-600 mt-1">{fieldErrors.email}</p>
            )}
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="+91 8949540232"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="message"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
            ></textarea>

            {fieldErrors.message && (
              <p className="text-sm text-red-600 mt-1">{fieldErrors.message}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-block w-full md:w-auto bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 hover:cursor-pointer transition duration-300 shadow-md hover:shadow-lg
                ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-indigo-700 hover:shadow-lg"
                }
                `}
            >
              {isSubmitting ? "📩 Sending..." : "📩 Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
