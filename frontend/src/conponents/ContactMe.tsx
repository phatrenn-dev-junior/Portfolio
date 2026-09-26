import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { toast } from "sonner";

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    const socialLinks = [
        { icon: FaGithub, label: "GitHub", url: "https://github.com/phatrenn-dev-junior" },
        { icon: FaLinkedin, label: "LinkedIn", url: "#" },
        { icon: FaTwitter, label: "Twitter", url: "#" },
        { icon: FaEnvelope, label: "Email", url: "mailto:your.email@example.com" },
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden" id="contact">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                            Get In Touch
                        </span>
                    </h2>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                        Have a project in mind? Let's work together to build something amazing.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
>
    <form onSubmit={handleSubmit} className="space-y-8 bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-8 shadow-lg">
        {/* Name Field */}
        <div>
            <label htmlFor="name" className="block text-slate-100 mb-2 font-medium">
                Your Name
            </label>
            <TextField
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                required
                fullWidth
                variant="outlined"
                InputProps={{
                    style: {
                        backgroundColor: "rgba(30, 41, 59)",
                        color: "white",
                        borderRadius: "8px",
                    },
                }}
            />
        </div>

        {/* Email Field */}
        <div>
            <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">
                Your Email
            </label>
            <TextField
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                required
                fullWidth
                variant="outlined"
                InputProps={{
                    style: {
                        backgroundColor: "rgba(30, 41, 59, 0.8)",
                        color: "white",
                        borderRadius: "8px",
                    },
                }}
            />
        </div>

        {/* Message Field */}
        <div>
            <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">
                Your Message
            </label>
            <TextField
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message here..."
                required
                multiline
                rows={6}
                fullWidth
                variant="outlined"
                InputProps={{
                    style: {
                        backgroundColor: "rgba(30, 41, 59, 0.8)",
                        color: "white",
                        borderRadius: "8px",
                    },
                }}
            />
        </div>

        {/* Submit Button */}
        <Button
            type="submit"
            size="large"
            className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
            Send Message
        </Button>
    </form>
</motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                            <h3 className="text-2xl font-semibold text-white mb-4">Let's Connect</h3>
                            <p className="text-slate-300 mb-8 leading-relaxed">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of these channels.
                            </p>

                            <div className="space-y-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 text-slate-400 hover:text-indigo-400 transition-colors"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                    >
                                        <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center">
                                            <social.icon className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium">{social.label}</span>
                                    </motion.a>
                                ))}
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-700">
                                <p className="text-slate-400 text-sm">
                                    <span className="text-indigo-400">Available for:</span>
                                    <br />
                                    Freelance projects, Full-time opportunities, Collaborations
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;