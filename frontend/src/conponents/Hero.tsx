import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@mui/material' // Replace '@mui/material' with the actual library or path if different
import { Database, Server, Code2, Layers } from 'lucide-react'
import profileImage from '../assets/profile.jpg';

const Hero = () => {
    const techIcons = [
        { Icon: Database, color: "text-emerald-400", label: "MongoDB", delay: 0 },
        { Icon: Server, color: "text-amber-400", label: "Express", delay: 0.1 },
        { Icon: Code2, color: "text-indigo-400", label: "React", delay: 0.2 },
        { Icon: Layers, color: "text-emerald-500", label: "Node.js", delay: 0.3 },
    ];

    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateWindowSize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        updateWindowSize(); // Set initial size
        window.addEventListener('resize', updateWindowSize);

        return () => {
            window.removeEventListener('resize', updateWindowSize);
        };
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                       {/* Animated background grid */}
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
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

            {/* Floating tech icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-indigo-500/20 rounded-full"
                        initial={{
                            x: Math.random() * windowSize.width,
                            y: Math.random() * windowSize.height,
                        }}
                        animate={{
                            y: [null, Math.random() * windowSize.height],
                            x: [null, Math.random() * windowSize.width],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 z-10">
                <div className="text-center space-y-8">
                      {/* Profile for Mobile */}
<div className="flex flex-col items-center gap-2 mb-4 md:hidden">
    {/* Profile Image */}
    <img
        src={profileImage} // Replace "profile.jpg" with the actual file name in the assets folder
        alt="Profile"
        className="w-16 h-24 rounded-lg object-cover relative z-10" // 4x6 aspect ratio
    />
    {/* Name */}
    <span className="text-white font-semibold text-lg">
        Phat Ren
    </span>
</div>
                    {/* MERN Stack Icons */}
                    <motion.div
                        className="flex justify-center gap-6 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {techIcons.map(({ Icon, color, label, delay }) => (
                            <motion.div
                                key={label}
                                className="relative group"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay, duration: 0.5, type: "spring" }}
                                whileHover={{ scale: 1.2, rotate: 360 }}
                            >
                                <div className="relative">
                                    <Icon className={`w-12 h-12 ${color}`} />
                                    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-amber-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {label}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                  

                    {/* Main heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-amber-400 bg-clip-text text-transparent animate-gradient">
                                Full Stack Developer
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-2">
                            Building the future with MERN Stack
                        </p>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Crafting scalable, modern web applications with MongoDB, Express, React, and Node.js
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-wrap gap-4 justify-center mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                           <Button
                    size="large"
                    className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 hover:from-teal-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Explore Projects
                </Button>
                <Button
                    size="large"
                    variant="outlined"
                    className="border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Contact Me
                </Button>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        className="absolute bottom-10 left-1/2 -translate-x-1/2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, 10, 0] }}
                        transition={{ delay: 1, duration: 2, repeat: Infinity }}
                    >
                        <div className="w-6 h-10 border-2 border-indigo-500/50 rounded-full flex justify-center p-2">
                            <div className="w-1 h-3 bg-indigo-500 rounded-full"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero