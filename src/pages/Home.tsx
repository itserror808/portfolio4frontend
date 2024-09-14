import React, { useState } from 'react';
import { FloatingDockComponent } from '../components/FloatingDockComponent';
import { motion, AnimatePresence } from 'framer-motion';
import {ChevronRight, Code, Shield, Globe, Server, Bitcoin, Terminal, LucideIcon} from 'lucide-react';

interface SkillCategoryProps {
    icon: LucideIcon;
    title: string;
    skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ icon: Icon, title, skills }) => (
    <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 shadow-md">
        <div className="flex items-center mb-3">
            <Icon className="w-6 h-6 mr-2 text-blue-500" />
            <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 rounded-full text-sm">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

export default function Home() {
    const [expandedJob, setExpandedJob] = useState<number | null>(null);
    const [expandedEdu, setExpandedEdu] = useState<number | null>(null);
    const [hoveredJob, setHoveredJob] = useState<number | null>(null);

    const workExperience = [
        {
            company: "Vivo Energy",
            role: "Intern",
            period: "July 2023 - August 2023",
            description: "Internship experience at Vivo Energy.",
            logo: "data:image/webp;base64,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",
            location: "Casablanca"
        },
        {
            company: "Excellence Tapis",
            role: "Freelance Developer",
            period: "2024",
            description: "Freelance project for Excellence Tapis.",
            logo: "/assets/excellence-tapis-logo.png",
            location: "Fes"
        },
        {
            company: "UrbanVoyage",
            role: "Academic Project",
            period: "2024",
            description: "Academic project focused on urban transportation solutions.",
            logo: "/assets/urban-voyage-logo.png",
            location: "Casablanca"
        }
    ];

    const education = [
        {
            institution: "Marrakech National School of Applied Sciences - Cady Ayad University",
            degree: "Computer Science Engineering",
            period: "2019 - 2025 (Expected Graduation)",
            logo: "https://www.ensamaroc.com/guest/img/partners/cadiayyad.png",
            location: "Marrakech"
        },
        {
            institution: "Technical Highschool Anoual",
            degree: "Baccalaureat of Mathematical Sciences",
            period: "2018 - 2019",
            logo: "/assets/anoual-logo.png",
            location: "Casablanca"
        }
    ];

    const skillCategories = [
        {
            icon: Terminal,
            title: "Programming",
            skills: ["C/C++", "Java", "JavaScript", "TypeScript", "Python", "Bash Scripting"]
        },
        {
            icon: Globe,
            title: "Web Development",
            skills: ["React", "Angular", "Spring Boot", "Node.js", "Tailwind CSS", "JakartaEE"]
        },
        {
            icon: Server,
            title: "Databases & Tools",
            skills: ["MySQL", "PostgreSQL", "Oracle", "Git", "GitHub", "VSCode", "IntelliJ IDEA"]
        },
        {
            icon: Shield,
            title: "Software Engineering",
            skills: ["Data Structures", "Algorithms", "OOP", "Software Engineering", "Operating Systems"]
        },
        {
            icon: Code,
            title: "Libraries & Frameworks",
            skills: ["OpenCV", "OpenGL", "ReactJS", "AngularJS", "Spring Boot"]
        },
        {
            icon: Bitcoin,
            title: "Other Skills",
            skills: ["Problem Solving", "Self-learning", "Adaptability", "Team Management"]
        }
    ];

    return (
        <motion.div
            id="home"
            className="w-full bg-neutral-100 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-100 min-h-screen flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <main className="w-full md:2/3 lg:w-1/2 grow flex flex-col items-center py-4 px-4 sm:px-6 lg:px-8">
                {/* Profile section */}
                <div
                    className="w-full flex items-center justify-between mt-6 md:mt-16 mb-8 flex-col sm:flex-row"
                >
                    <div className="text-center sm:text-left flex flex-col justify-center max-w-[70%]">
                        <motion.h1
                            className="text-4xl md:text-5xl font-bold"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Hi, I'm Meftah<span className="text-cyan-500">.</span>
                        </motion.h1>
                        <motion.h2
                            className="text-md mt-2"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Versatile full-stack web developer creating seamless, responsive
                            applications from database to user interface.
                        </motion.h2>
                    </div>
                    <motion.div
                        className="z-50 h-[8rem] aspect-square relative rounded-full overflow-hidden duration-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <img
                            className="-translate-y-10"
                            src="/assets/profile.jpeg"
                            alt="M"
                        />
                    </motion.div>
                </div>

                {/* About Me section */}
                <motion.section
                    className="w-full mb-16"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <h2 className="text-2xl font-bold mb-4">About Me</h2>
                    <p className="text-md">
                        As a passionate software engineering student, I'm constantly exploring new technologies and
                        pushing the boundaries of what's possible in the digital world. My journey in tech is driven by
                        curiosity and a desire to create innovative solutions that make a difference.
                    </p>
                </motion.section>

                {/* Education section */}
                <motion.section
                    id="edu"
                    className="w-full mb-16"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <h2 className="text-2xl font-bold mb-4">Education</h2>
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="mb-4 cursor-pointer"
                            onClick={() => setExpandedEdu(expandedEdu === index ? null : index)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex items-center">
                                <div
                                    className="w-16 aspect-square mr-4 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center overflow-hidden">
                                    <img src={edu.logo} alt={edu.institution[0]}
                                         className="w-full h-full flex items-center justify-center text-2xl font-bold object-cover"/>

                                </div>
                                <div className="w-full flex flex-row items-start justify-between text-sm">
                                <div>
                                        <h3 className="font-semibold">{edu.institution}</h3>
                                        <p className="text-sm">{edu.degree}</p>
                                    </div>
                                    <div className="flex flex-col items-end justify-center">
                                        <p className="italic text-sm text-neutral-500">{edu.period}</p>
                                        <p className="italic text-sm text-neutral-500">{edu.location}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.section>

                {/* Work Experience section */}
                <motion.section
                    id="experience"
                    className="w-full mb-16"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
                    {workExperience.map((job, index) => (
                        <motion.div
                            key={index}
                            className="mb-4 cursor-pointer relative"
                            onClick={() => setExpandedJob(expandedJob === index ? null : index)}
                            onMouseEnter={() => setHoveredJob(index)}
                            onMouseLeave={() => setHoveredJob(null)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex items-center">
                                <div
                                    className="w-16 aspect-square mr-4 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center overflow-hidden">
                                    <img src={job.logo} alt={job.company[0]}
                                         className="w-full h-full flex items-center justify-center text-2xl font-bold object-cover"/>
                                </div>

                                <div className="w-full flex flex-row items-start justify-between text-sm">
                                    <div>
                                        <div className="flex flex-row gap-2 items-center">
                                            <h3 className="font-semibold">{job.company}</h3>
                                            <motion.div
                                                initial={{opacity: 0}}
                                                animate={{
                                                    opacity: hoveredJob === index ? 1 : 0,
                                                    rotate: expandedJob === index ? 90 : 0
                                                }}
                                                transition={{duration: 0.3}}
                                            >
                                                <ChevronRight size={15}/>
                                            </motion.div>
                                        </div>
                                        <p className="text-sm">{job.role}</p>
                                    </div>
                                    <div className="flex flex-col items-end justify-center">
                                        <p className="italic text-sm text-neutral-500 mr-2">{job.period}</p>
                                        <p className="italic text-sm text-neutral-500 mr-2">{job.location}</p>
                                    </div>
                                </div>
                            </div>
                            <AnimatePresence>
                                {expandedJob === index && (
                                    <motion.p
                                        className="ml-[4.7rem] text-sm mt-2"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {job.description}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.section>

                {/* Skills section */}
                <motion.section
                    id="skills"
                    className="w-full mb-16"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                >
                    <h2 className="text-2xl font-bold mb-4">Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {skillCategories.map((category, index) => (
                            <SkillCategory key={index} {...category} />
                        ))}
                    </div>
                </motion.section>
            </main>

            <div className="fixed z-50 bottom-4">
                <FloatingDockComponent />
            </div>
        </motion.div>
    );
}