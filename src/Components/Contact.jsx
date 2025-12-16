import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 w-11/12 mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Contact <span className="text-orange-500">Me</span>
        </h2>
        <p className="text-gray-500 font-semibold max-w-xl mx-auto">
          Feel free to reach out if you want to collaborate, have a project idea,
          or just want to say hello.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* LEFT SIDE - INFO */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-100">
            Let’s Talk
          </h3>

          <p className="text-gray-100 leading-relaxed">
            I’m a MERN Stack Developer who loves building modern web applications.
            Open to freelance work, internships, and collaboration opportunities.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="text-orange-500" />
              <span className="text-gray-300">hasib.gub221@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-orange-500" />
              <span className="text-gray-300">+880 1570265433</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-orange-500" />
              <span className="text-gray-300">Bangladesh</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/Hasib473"
              className="p-3 rounded-full border border-gray-300 hover:border-orange-500 hover:text-orange-500 transition"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/hasib-al-mamun-4229a5317/"
              className="p-3 rounded-full border border-gray-300 hover:border-orange-500 hover:text-orange-500 transition"
            >
              <Linkedin />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-gray-800 shadow-lg rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-orange-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-orange-500 outline-none"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-orange-500 outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold
              hover:bg-orange-600 transition flex items-center justify-center gap-2"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
