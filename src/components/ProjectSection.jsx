import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

function ProjectSection() {
    const projects = [
        {
            title: "Staking And Swap",
            description:
                "Basic Staking Contract – Simple ETH and ERC-20 staking with deposit/withdraw functions, allowance checks, and event logs.  Fixed-Rate Token Swap Contract – Minimal ERC-20 swap with admin-set rates, liquidity control, and slippage protection.",
            image: "/api/placeholder/400/300",
            technologies: ["Solidity", "Erc20", "Blackchain"],
            liveUrl: "",
            githubUrl: "https://github.com/Gokulraj998/BasicStaking-",
            featured: true,
        },
        {
            title: "PortFolio Details",
            description:
                "A modern, interactive 3D portfolio built with React, Three.js, and Framer Motion to showcase projects with smooth animations and immersive visuals. Designed for fast performance and a clean, responsive UI",
            image: "/api/placeholder/400/300",
            technologies: ["React", "VITE", "Boostrap", "Three.js"],
            liveUrl: "",
            githubUrl: "https://github.com/Gokulraj998/Portfolio",
            featured: true,
        },
        {
            title: "Weather Websites",
            description:
                "A simple weather application that displays weather data from an API and includes user authentication using Mailbox API.",
            image: "/api/placeholder/400/300",
            technologies: ["React", "Express.js", "Node.js", "weatherAPI"],
            liveUrl: "",
            githubUrl: "https://github.com/Gokulraj998/Weather-Check",
            featured: false,
        },
        {
            title: "Basic dashboard panel",
            description:
                "Basic login/register system with MySQL, supporting image uploads and up to 5 MB video uploads via a simple dashboard",
            image: "/api/placeholder/400/300",
            technologies: ["PHP", "jQuey", "MYsql"],
            liveUrl: "",
            githubUrl: "https://github.com/Gokulraj998/databasevideoupload",
            featured: false,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section className="min-vh-100 py-5 d-flex align-items-center" style={{ marginTop: "70px" }}>
            <div className="container">
                <motion.div
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="display-4 fw-bold"
                        style={{
                            background: "linear-gradient(to right, #ff0066, #9966ff)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Featured Projects
                    </motion.h2>
                </motion.div>

                <motion.div
                    className="row"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className={`col-lg-4 col-md-6 mb-5`}
                            variants={cardVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            <div className="card card-glow h-100 text-light p-3">
                                <div className="card-cover">
                                    {/* Image */}
                                    <div
                                        className="d-flex align-items-center justify-content-center mb-3 rounded"
                                        style={{
                                            height: "200px",
                                            background: "linear-gradient(to right, #2a0033, #330033)",
                                            color: "#ccc",
                                        }}
                                    >
                                        Project Image
                                    </div>

                                    {/* Content */}
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <div>
                                            <h5 className="fw-bold mb-3">
                                                {project.title}
                                            </h5>
                                            <p className="text-white opacity-50">{project.description}</p>

                                            <div className="my-3">
                                                {project.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="badge rounded-pill me-2 mb-2"
                                                        style={{
                                                            backgroundColor: "#1f1f1f",
                                                            border: "1px solid #9966ff",
                                                            color: "#ccc",
                                                            fontSize: "0.75rem",
                                                        }}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Buttons */}
                                        <div className="d-flex gap-2">
                                            { project.liveUrl ? <a
                                                href={project.liveUrl}
                                                className="btn btn-sm"
                                                style={{
                                                    background: "linear-gradient(to right, #ff0066, #9966ff)",
                                                    color: "white",
                                                    border: "none",
                                                }}
                                            >
                                                <ExternalLink size={16} className="me-1" />
                                                Live Demo
                                            </a> : <></>}
                                            <a
                                                href={project.githubUrl}
                                                className="btn btn-sm btn-dark border border-secondary text-light"
                                            >
                                                <Github size={16} className="me-1" />
                                                Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectSection;

