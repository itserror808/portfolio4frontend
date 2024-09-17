"use client";

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, X } from 'lucide-react'

interface Project {
    title: string
    type: string
    period: string
    description: string
    technologies: string[]
    screenshots: string[]
    githubLink?: string
}

interface ProjectGridProps {
    projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setSelectedProject(null)
            }
        }

        if (selectedProject) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

        window.addEventListener("keydown", onKeyDown)
        return () => window.removeEventListener("keydown", onKeyDown)
    }, [selectedProject])

    return (
        <>
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 h-full w-full z-10"
                        onClick={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center z-[100] p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            ref={ref}
                            className="w-full z-20 max-w-4xl bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl"
                            initial={{opacity: 0, scale: 0.9, height: 0}}
                            animate={{opacity: 1, scale: 1, height: 'auto'}}
                            exit={{opacity: 0, scale: 0.9, height: 0}}
                            transition={{type: "spring", damping: 20, stiffness: 300}}
                        >
                            <div className="relative w-full h-[50vh]">
                                <motion.img
                                    layoutId={`project-image-${selectedProject.title}`}
                                    src={selectedProject.screenshots[currentImageIndex]}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover object-top"
                                />
                                <button
                                    className="absolute top-4 right-4 bg-white dark:bg-neutral-800 bg-opacity-50 backdrop-blur-sm rounded-full p-1"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedProject(null);
                                    }}
                                >
                                    <X size={16}/>
                                </button>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                                            {selectedProject.title}
                                        </h3>
                                        <p className="text-lg text-neutral-600 dark:text-neutral-400">
                                            {selectedProject.type}
                                        </p>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-500">
                                            {selectedProject.period}
                                        </p>
                                    </div>

                                    {selectedProject.githubLink && (
                                        <a
                                            href={selectedProject.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center px-4 py-2 text-sm rounded-full font-bold bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors duration-300"
                                        >
                                            <Github className="inline-block mr-2 h-4 w-4"/>
                                            GitHub Repository
                                        </a>
                                    )}
                                </div>
                                <motion.div
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{delay: 0.2}}
                                    className="space-y-4"
                                >
                                    <p className="text-neutral-700 dark:text-neutral-300">{selectedProject.description}</p>
                                    <div>
                                        <h4 className="font-semibold mb-2 text-neutral-800 dark:text-neutral-200">Technologies:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((tech, i) => (
                                                <span key={i}
                                                      className="px-3 py-1 bg-neutral-200 dark:bg-neutral-700 rounded-full text-sm text-neutral-700 dark:text-neutral-300">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="absolute top-0 right-0 w-full h-screen z-0 bg-white bg-opacity-50 backdrop-blur-sm dark:bg-black dark:bg-opacity-50 dark:backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <ul className="space-y-8">
                {projects.map((project) => (
                    <motion.li
                        key={project.title}
                        onClick={() => setSelectedProject(project)}
                        className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-2/5 h-52 md:h-64">
                                <motion.img
                                    layoutId={`project-image-${project.title}`}
                                    src={project.screenshots[0]}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="p-6 w-full md:w-3/5 flex flex-col justify-between">
                                <div>
                                    <h3 className="font-bold text-xl text-neutral-800 dark:text-neutral-100 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-md text-neutral-600 dark:text-neutral-400 mb-2">
                                        {project.type}
                                    </p>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4">
                                        {project.period}
                                    </p>
                                    <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4 line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 4).map((tech, i) => (
                                        <span key={i} className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded-full text-xs text-neutral-700 dark:text-neutral-300">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <span className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded-full text-xs text-neutral-700 dark:text-neutral-300">
                                            +{project.technologies.length - 4} more
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </>
    )
}