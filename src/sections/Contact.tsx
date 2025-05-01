"use client";

import * as React from "react";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (like sending email or saving data)
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#10b981]">Contact Me</h2>
        <div className="max-w-md mx-auto bg-[#0f1511] border-[#10b981]/20 shadow-lg rounded-lg">
          <div className="p-6 bg-[#0f1511] border-b border-[#10b981]/20">
            <h3 className="text-2xl text-[#10b981]">Get In Touch</h3>
          </div>

          <div className="p-6">
            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-[#10b981]">Name</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-[#0a0f0d] border border-[#10b981]/20 focus:border-[#10b981] focus:ring-[#10b981] p-3 text-white rounded-md transition-all duration-300 hover:border-[#10b981] focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-[#10b981]">Email</label>
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-[#0a0f0d] border border-[#10b981]/20 focus:border-[#10b981] focus:ring-[#10b981] p-3 text-white rounded-md transition-all duration-300 hover:border-[#10b981] focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-[#10b981]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  className="w-full bg-[#0a0f0d] border border-[#10b981]/20 focus:border-[#10b981] focus:ring-[#10b981] p-3 text-white rounded-md transition-all duration-300 hover:border-[#10b981] focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#10b981] hover:bg-[#10b981]/90 text-white py-2 rounded-md text-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
