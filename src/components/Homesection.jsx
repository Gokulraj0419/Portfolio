import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Github, Linkedin, Twitter } from "lucide-react";
import Cube3D from "./Smallcomponents/Cube3d";
import ErrorBoundary from "./ErrorBoundary";

function Homesection() {
    const socialLinks = [
        { icon: Github, href: "https://github.com/Gokulraj998", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/gokul-raj-52a1b22a6/", label: "LinkedIn" },
        // { icon: Twitter, href: "/", label: "Twitter" },
    ];

    return (
        <section className="min-vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden bg-dark text-white">
            <div className="container py-5 mt-3">
                <div className="row row-cols-1 row-cols-lg-2 g-5 align-items-center">
                    {/* Text Content */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0, duration: 0.8 }}
                            className="fw-medium fs-5"
                            style={{ color: "#aa60f0" }}
                        >
                            Hello, I'm
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="display-1 fw-bold text-gradient"
                        >
                            Gokul raj  P
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="h3 fw-semibold text-light"
                        >
                            Full Stack Developer
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="fs-5 text-white opacity-50"
                        >
                            Crafting exceptional digital experiences through cutting-edge technologies.
                            Passionate about developing innovative solutions that redefine boundaries in web development and user interaction.
                        </motion.p>

                        {/* Social Links */}
                        <motion.div
                            className="d-flex gap-3 mt-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="blank"
                                    className="btn-social"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.2 + index * 0.1, duration: 0.3 }}
                                >
                                    <social.icon className="bi" size={24} />
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* CTA Button */}
                        <motion.a
                            href="/"
                            className="btn bg-gradient-primary px-4 py-3 fw-semibold rounded mt-4 home-btn"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4, duration: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.a>
                    </div>

                    {/* 3D Cube */}
                    <motion.div
                        className="position-relative"
                        style={{ height: "400px" }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        <ErrorBoundary>
                            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                                <ambientLight intensity={0.5} />
                                <pointLight position={[10, 10, 10]} intensity={1} color="#ff0066" />
                                <pointLight position={[-10, -10, -10]} intensity={1} color="#9966ff" />
                                <Cube3D />
                                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                                <Environment preset="night" />
                            </Canvas>
                        </ErrorBoundary>
                        {/* Glow Effect */}
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-glow blur-3xl opacity-30" />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="position-absolute bottom-0 start-70 translate-middle-x mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
            >
                <motion.div
                    className="rounded-pill"
                    style={{ width: "24px", height: "40px", border: "1px solid #aa60f0" }}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <motion.div
                        className="rounded-pill mt-2 mx-auto"
                        style={{ width: "4px", height: "10px", background: "#aa60f0" }}
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Homesection;