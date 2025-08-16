import { color, motion } from "framer-motion";

function SkillsSection() {
    const skills = [
        { name: "React", level: 90, color: "text-primary" },
        { name: "Javascipt", level: 90 ,  color:"text-warning"},
        { name: "Node.js", level: 88, color: "text-success" },
        { name: "TypeScript", level: 60, color: "text-warning" },
        { name: "Mongodb", level: 82, color: "text-primary" },
        { name: "Express", level: 80, color: "text-warning" },
        { name: "Java", level: 77, color: "text-danger" },
        { name: "Solidity", level: 70, color: "text-success" },
    ];

    const technologies = [
        "Html","Css","Boostrap 5","React","TypeScript", "Node.js","Express.js", "MySQL", "MongoDB",
        "AWS", "GraphQL", "REST APIs", "Git", "CI/CD Pipeline",
        "Jest", "Postman", "Webpack", "Vite", "Tailwind CSS", 
    ];

    return (    
        <section className="py-5 min-vh-100 d-flex align-items-center text-white"  style={{ marginTop: "70px" }}>
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
                            WebkitTextFillColor: "transparent"
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Skills & Expertise
                    </motion.h2>
                </motion.div>

                {/* Skill Bars */}
                <div className="row gy-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            className="col-md-6"
                            key={skill.name}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-3 d-flex justify-content-between">
                                <span className="fw-semibold">{skill.name}</span>
                                <span className={`fw-medium ${skill.color}`}>{skill.level}%</span>
                            </div>
                            <div className="progress" style={{ height: "10px", backgroundColor: "#333" }}>
                                <motion.div
                                    className="progress-bar"
                                    style={{
                                        background: "linear-gradient(to right, #ff0066, #9966ff)"
                                    }}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                                    viewport={{ once: true }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Technologies List */}
                <motion.div
                    className="mt-5 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="h4 fw-bold mb-4">Technologies I Work With</h3>
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                        {technologies.map((tech, index) => (
                            <motion.span
                                key={tech}
                                className="px-3 py-2 border rounded"
                                style={{
                                    color: "#ffffff",
                                    borderColor: "#9966ff",
                                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                                    transition: "all 0.3s ease-in-out",
                                    cursor: "default"
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -5,
                                    color: "#9966ff",
                                    borderColor: "#9966ff",
                                    boxShadow: "0 0 10px #9966ff",
                                    textShadow: "0 0 6px #9966ff"
                                }}
                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
