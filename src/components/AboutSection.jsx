import React from 'react'
import { motion } from "framer-motion";
import profile from "../assets/images/profile.jpg"

function AboutSection() {
    return (
        <div>
            <section className="py-5 d-flex align-items-center min-vh-100">
                <div className="container mt-3">
                    <motion.div
                        className="text-center mb-5"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="display-4 fw-bold "
                            style={{
                                background: 'linear-gradient(to right, #ff0066, #9966ff)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            About Me
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        className="row align-items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {/* Left content */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <motion.p
                                className="lead text-white opacity-50"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                               Full-stack developer with 2 years of experience turning ideas into functional, user-centric applications. 
                               I focus on writing readable code and adopting best practices, while actively expanding my skills in modern frameworks and architectures.
                               Beyond development, I contribute to tech discussions and learn through building real-world projects—because great software comes from both knowledge and iteration
                            </motion.p>

                            <motion.p
                                className="lead text-white opacity-50"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                viewport={{ once: true }}
                            >
                                When I'm not coding, you'll find me exploring new technologies,
                                contributing to open-source projects, or sharing knowledge with
                                the developer community. I believe in continuous learning and
                                staying at the forefront of innovation.
                            </motion.p>

                            <motion.div
                                className="d-flex flex-wrap gap-2 mt-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1 }}
                                viewport={{ once: true }}
                            >
                                {["Problem Solving", "Team Collaboration", "Innovation", "Leadership"].map((trait, index) => (
                                    <motion.span
                                        key={trait}
                                        className="px-4 py-2 fw-medium rounded-pill border"
                                        style={{
                                            borderColor: '#a855f7', // Soft purple
                                            color: '#a855f7',
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            boxShadow: '0 0 5px rgba(168, 85, 247, 0.2)',
                                            transition: 'all 0.3s ease-in-out',
                                        }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{
                                            scale: 1.08,
                                            boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)',
                                            textShadow: '0 0 8px rgba(168, 85, 247, 0.5)',
                                        }}
                                    >
                                        {trait}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>

                        {/* Right image + badge */}
                        <motion.div
                            className="col-md-6 text-center"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div
                                className="position-relative mx-auto"
                                style={{ width: '300px', height: '300px' }}
                            >
                                {/* Circular background layers */}
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
                                    style={{
                                        background: 'linear-gradient(to right, #ff0066, #9966ff)',
                                        opacity: 0.6,
                                        zIndex: 2,
                                        filter: 'blur(15px)',
                                    }}
                                />

                                {/* Profile Image */}
                                <div
                                    className="position-relative mx-auto rounded-circle overflow-hidden"
                                    style={{
                                        width: '300px',
                                        height: '300px',
                                        zIndex: 3,
                                    }}
                                >
                                    <img
                                        src={profile}
                                        alt="Profile"
                                        className="w-100 h-90"
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                        }}
                                    />

                                    <div
                                        className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
                                        style={{
                                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                        }}
                                    />
                                </div>

                                {/* Badge */}
                                <motion.div
                                    className="position-absolute bottom-0 end-0 d-flex align-items-center justify-content-center rounded-circle shadow"
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        background: 'linear-gradient(to right, #ff0066, #9966ff)',
                                        color: '#fff',
                                        transform: 'translate(50%, 50%)',
                                        zIndex: 4,
                                        boxShadow: '0 0 20px rgba(255, 0, 102, 0.6), 0 0 40px rgba(153, 102, 255, 0.5)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        cursor: 'pointer'
                                    }}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    whileHover={{
                                        scale: 1.1,
                                        boxShadow: '0 0 30px rgba(255, 0, 102, 0.8), 0 0 60px rgba(153, 102, 255, 0.7)'
                                    }}
                                    transition={{ duration: 0.5, delay: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="text-center">
                                        <div className="fw-bold" style={{ fontSize: '1.5rem' }}>2+</div>
                                        <div className="small">Years</div>
                                    </div>
                                </motion.div>

                            </div>
                        </motion.div>


                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default AboutSection