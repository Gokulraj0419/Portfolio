import React from 'react'
import { ExternalLink, MapPin, Calendar, Download } from "lucide-react";
import { motion } from "framer-motion";
import MyResume from "../assets/Gokul_Resume.pdf";

function ResumeSection() {
  const experiences = [
    {
      title: "Full Stack Developer",
      Development:"Frontend Development",
      company: "Clarisco Solution",
      location: "Madurai,TamilNadu",
      period: "2023 - 2025",
      description: [
        "Integrated RESTful APIs and blockchain protocols using Web3.js and Ethers.js to enable Ethereum wallet connections (MetaMask), transaction tracking, and smart contract interactions on the frontend",
        "Built and validated dynamic forms using Formik, Yup, and React Hook Form with real-time validation, error handling, and user-friendly feedback to improve submission accuracy and UX."
      ]
    },
    {
      title: "Full Stack Developer",
      Development:"Backend Development",
      company: "Clarisco Solution",
      location: "Madurai,TamilNadu",
      period: "2023 - 2025",
      description: [
        "Designed and secured RESTful APIs using Node.js, Express.js, and MongoDB, implementing JWT authentication, email OTP, and Google OAuth with HTTP-only session cookies for secure user login and session handling",
        "Reduced API response time by 30% by optimizing MongoDB queries and indexes.",
        "Handled backend deployment using AWS server access via FileZilla, deploying Node.js and React apps remotely and verifying live issues for quick patch fixes"
      ]
    },
  ];

  const education = [
    {
      degree: "bachelor of engineering in Electronics and Communication Engineering ",
      school: "SACS MAVMM Engineering Colleage",
      period: "2015 - 2019",
    }
  ];

  return (
    <div>
      <section className="py-4" style={{ marginTop: "70px" }}>
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="display-2 fw-bold text-gradient"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Resume
            </motion.h2>

            <motion.a href={MyResume} target='blank'>
              <motion.button
                className="btn align-items-center gap-2 mt-3 px-4 py-3 rounded-3"
                style={{
                  color: "black",
                  background: 'linear-gradient(to right, #ff0066, #9966ff)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                Download Resume
              </motion.button>
            </motion.a>
          </motion.div>

          <div className="row">
            {/* Experience */}
            <div className="col-lg-6">
              <h3 className="h3 fw-bold mb-4">Experience</h3>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="position-relative ps-4 border-2 mb-4 border-right-custom"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="position-absolute top-0 start-0 translate-middle rounded-circle" style={{ width: '12px', height: '12px', background: "#b366ff" }}></div>
                  <h5 className="fw-bold mb-1">{exp.title}</h5>
                   <h6 className="fw-bold mb-1">{exp.Development}</h6>
                  <p className="text-danger mb-1">{exp.company}</p>
                  <div className="d-flex gap-3 text-white opacity-50 small mb-2">
                    <span><MapPin size={14} className="me-1" /> {exp.location}</span>
                    <span><Calendar size={14} className="me-1" /> {exp.period}</span>
                  </div>
                  <ul className="ps-3">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Education & Certifications */}
            <div className="col-lg-6">
              <h3 className="h3 fw-bold mb-4">Education</h3>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  style={{ borderColor: "rgb(57, 56, 56)" }}
                  className="card p-4 mb-4 shadow-sm bg-dark card-edu"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h5 className="fw-bold text-white">{edu.degree}</h5>
                  <p className="text-primary mb-1">{edu.school}</p>
                  <div className="text-white small mb-2"><Calendar size={14} className="me-1 pb-1" />{edu.period}</div>
                  {/* <div className="d-flex flex-wrap gap-2">
                    {edu.achievements.map((ach, i) => (
                      <span key={i} className="badge bg-success text-white">{ach}</span>
                    ))}
                  </div> */}
                </motion.div>
              ))}

              <div className="mt-4">
                <h4 className="h5 fw-bold">Certifications</h4>
                {["CORE JAVA Developer", "React Developer Certification","PHP Developer Certification"].map((cert, i) => (
                  <motion.div
                    key={i}
                    className="d-flex justify-content-between align-items-center rounded-1 p-3 mb-2 certification-box"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span>{cert}</span>
                    <ExternalLink size={16} className="text-white opacity-50" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ResumeSection