import React from 'react'
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gokulraj00419@gmail.com",
      href: "mailto:gokulraj00419@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8098280998",
      href: "tel:8098280998",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Madurai,TN",
      href: "",
    },
  ];

  const inputStyle = {
    backgroundColor: "#1a1a1a",
    color: "white",
    border: "1px solid #333",
  };

  return (
    <div>
      <section className="min-vh-100 py-5 d-flex align-items-center" style={{ marginTop: "70px" }}>
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="display-4 fw-bold"
              style={{
                background: "linear-gradient(to right, #ff0066, #9966ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Get In Touch
            </h2>
          </motion.div>

          <div className="row">
            {/* Contact Info */}
            <motion.div
              className="col-lg-6 mb-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <h3 className="h4 fw-bold">Let's work together</h3>
                <p className="text-white opacity-50">
                  I'm always open to discussing new opportunities, interesting
                  projects, or just having a conversation about technology. Feel
                  free to reach out!
                </p>
              </div>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="d-flex align-items-center mb-3 p-3 border-0 rounded border-none text-decoration-none text-light  contact-details"
                  style={{
                    transition: "transform 0.3s",
                    backgroundColor: "#1f1f1f",
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className="p-2 rounded me-3"
                    style={{
                      background: "linear-gradient(to right, #ff0066, #9966ff)",
                      color: "white",
                    }}
                  >
                    <info.icon size={20} />
                  </div>
                  <div>
                    <div className="fw-semibold">{info.label}</div>
                    <div className="text-white opacity-50 small">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label ">Name</label>
                    <input
                      type="text"
                      name="name"
                      style={inputStyle}
                      className="form-control form-in-border"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      style={inputStyle}
                      className="form-control form-in-border"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    style={inputStyle}
                    className="form-control form-in-border"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Discussion"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    className="form-control form-in-border"
                    rows="6"
                    style={inputStyle}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="btn w-100 text-white py-3 btn-contact"
                  disabled={isSubmitting}
                  style={{
                    background: "linear-gradient(to right, #ff0066, #9966ff)",
                  }}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="spinner-border spinner-border-sm text-light" />
                  ) : (
                    <>
                      <Send className="me-2" size={16} /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactSection