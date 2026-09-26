import { motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@mui/material";
import profileImage from '../assets/profile.jpg';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50"
        >
            {/* Animated Background Grid */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-black">
                <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-20 animate-pulse">
                    {[...Array(144)].map((_, i) => (
                        <div
                            key={i}
                            className="w-2 h-2 bg-indigo-500 rounded-full"
                            style={{
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${Math.random() * 5 + 3}s`,
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex items-center justify-between h-16">
                  {/* Logo */}
                  <motion.div
    className="flex flex-col items-center gap-2 cursor-pointer"
    whileHover={{ scale: 1.05 }}
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
    {/* Profile Image - Hidden on Mobile */}
    <img
        src={profileImage} // Replace "profile.jpg" with the actual file name in the assets folder
        alt="Profile"
        className="w-16 h-24 rounded-lg object-cover hidden md:block" // Hidden on small screens
    />
    {/* Name */}
    <span className="text-white font-semibold text-lg">
        Ren Developer
    </span>
</motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => scrollToSection(item.href)}
                                className="text-slate-300 hover:text-indigo-400 transition-colors relative group"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-violet-400 group-hover:w-full transition-all duration-300"></span>
                            </button>
                        ))}
                        <Button
                            size="small"
                            className="bg-linear-to-r from-indigo-400 to-violet-300 hover:from-indigo-700 hover:to-violet-700 text-gray-50 border-0 opacity-100"
                            onClick={() => scrollToSection("#contact")}
                        >
                            Hire Me
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden py-4 border-t border-slate-800"
                    >
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-slate-300 hover:text-indigo-400 transition-colors text-left py-2"
                                >
                                    {item.label}
                                </button>
                            ))}
                            <Button
                                size="sm"
                                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white border-0 w-full"
                                onClick={() => scrollToSection("#contact")}
                            >
                                Hire Me
                            </Button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;