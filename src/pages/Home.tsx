import React, { useState } from 'react';
import { FloatingDockComponent } from '../components/FloatingDockComponent';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronRight,
    Code,
    Shield,
    Globe,
    Server,
    Bitcoin,
    Terminal,
    LucideIcon,
    Calendar,
    MapPin,
    X
} from 'lucide-react';
import {IconCloudDemo} from "../components/iconCloud";
import ProjectGrid from "../components/project-grid";

interface SkillCategoryProps {
    icon: LucideIcon;
    title: string;
    skills: string[];
}


interface Project {
    title: string
    type: string
    period: string
    description: string
    technologies: string[]
    screenshots: string[]
    githubLink?: string
}


const projects: Project[] = [
    {
        title: "I Need This",
        type: "Academic Project",
        period: "2023",
        description: "A platform where buyers can put requests and sellers can contact them. This project demonstrates my ability to create a marketplace-style application with user interaction features.",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        screenshots: ["/assets/img_1.png", "/assets/img_1.png"],
        githubLink: "https://github.com/yourusername/i-need-this"

    },
    {
        title: "Jibi",
        type: "Academic Project",
        period: "2022",
        description: "A web application for managing an electronic wallet to pay multiple creditors. This project showcases my skills in handling financial transactions and user account management.",
        technologies: ["Angular", "Spring Boot", "PostgreSQL"],
        screenshots: ["/assets/img_1.png", "/assets/img_1.png"],
        githubLink: "https://github.com/yourusername/i-need-this"

    },
    {
        title: "UrbanVoyage",
        type: "Academic Project",
        period: "2024",
        description: "An innovative auto travel web application that revolutionizes the way users explore Moroccan cities, offering a comprehensive platform for planning and booking urban adventures.",
        technologies: ["Angular", "Spring Boot", "PostgreSQL", "Stripe API", "Google Maps API"],
        screenshots: ["/assets/img_1.png", "/assets/img_1.png", "/assets/img_1.png"],
        githubLink: "https://github.com/yourusername/i-need-this"

    },
    {
        title: "Excellence Tapis",
        type: "Freelance Project",
        period: "2024",
        description: "A cutting-edge e-commerce platform specializing in high-quality carpets and rugs. This project showcases my expertise in both frontend and backend technologies, resulting in a seamless and visually stunning user experience.",
        technologies: ["React", "Tailwind CSS", "Symfony", "MySQL"],
        screenshots: ["/assets/img_1.png", "/assets/img_1.png"],
        githubLink: "https://github.com/yourusername/i-need-this"

    }
];



const SkillCategory: React.FC<SkillCategoryProps> = ({ icon: Icon, title, skills }) => (
    <div className="mb-8">
        <div className="flex items-center mb-2">
            <Icon className="w-6 h-6 mr-2 text-blue-500" />
            <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-neutral-200 dark:bg-neutral-700 rounded-full text-sm hover:scale-110 duration-200">
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
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const workExperience = [
        {
            company: "Vivo Energy",
            role: "Intern",
            period: "July 2023 - August 2023",
            description: "As an intern at Vivo Energy, I led a crucial data transformation initiative, converting complex Excel spreadsheets into dynamic, user-friendly web pages. This project significantly enhanced data accessibility for the 'siege' staff, revolutionizing their information browsing experience. Leveraging a comprehensive tech stack of HTML, CSS, JavaScript, and PHP, I developed an intuitive and responsive interface.\n\nKey Achievements:\n• Engineered a robust web application that accurately mirrored Excel data structures, ensuring data integrity and usability.\n• Implemented advanced data retrieval and display algorithms, resulting in a 40% improvement in page load times.\n• Collaborated closely with the IT department to ensure seamless integration with existing systems and databases.\n• Incorporated responsive design principles, guaranteeing a consistent user experience across various devices and screen sizes.\n• Developed custom PHP scripts to handle complex data processing tasks, improving overall system efficiency.",
            logo: "data:image/webp;base64,UklGRvIFAABXRUJQVlA4IOYFAADQHQCdASpAAD4APjEMjEYiEREKgCADBLYAXZygqA8S/j34zewJSP5N94/3e/w2YQ+MfqH/B/rX5GdovzAP4B/Cv7R/Ov3I/uPcb8wH61/8n/R+/b6PP9P6gH9Q/2vWAegB5Z/7e/B3+0f7VfAX+s3/dvRz7H0WPoL2lyib5nwdvBHan/yH5C8Qzj//b2xeZ75Cfpj2Bf1c/1vYH9ID9mVOVGbi1byrH9iOFWUp7J0TDfbzTespD6e/wK2ZQe9JM/X7xvxOZvKN9oFRvQEdfBlU2TTeoqORF6jxAiSH507ZOWvHAlTOgeyB22Zr86hC1LRW1CsU+vGAAP7//pQrbSIOsHsGkommVCN1xUBMwZW/z/9Cfi9i2u/yj7CHL8YbOww7H7jOyi/Ky3Z43MP+t4FwuUhCpgHLeN/KJ0cFk3xv4jcbjD/CbFaBoMSA8IEINQzXbYmV+PQZBlh5d+JP5Fmqqg5XKkxAjPrGD/AHOGF7xyk7mZZIrnDxX9JFSiswB4BSMozNFTquT98Zig95x9/qam4qvp2Xv+3DIh744KDDsXu99v33lkumRmisnyjcXAFNI4MNY8bRuXUhCTHBYOjemohKNvpaGxT/O6xUySr3MnqjDKisHamyTW",
            location: "Casablanca",
            //screenshot: "/assets/img_1.png"
        },
        {
            company: "Excellence Tapis",
            role: "Freelance Developer",
            period: "2024",
            description: "As a freelance developer for Excellence Tapis, I spearheaded the development of a cutting-edge e-commerce platform specializing in high-quality carpets and rugs. This project showcased my expertise in both frontend and backend technologies, resulting in a seamless and visually stunning user experience.\n\nFrontend Development:\n• Crafted a responsive and intuitive user interface using React, ensuring a smooth browsing experience across all devices.\n• Implemented Tailwind CSS for efficient and consistent styling, significantly reducing development time and improving maintainability.\n• Integrated Data AOS (Animate On Scroll) library to create engaging animations, enhancing user engagement and visual appeal.\n\nBackend Contributions:\n• Collaborated on backend development using the Symfony framework, focusing on RESTful API design and implementation.\n• Developed custom Symfony services for efficient product management, user authentication, and order processing.\n• Implemented robust error handling and logging mechanisms to ensure system stability and facilitate debugging.\n\nThis project not only showcased my technical skills but also demonstrated my ability to deliver a comprehensive, full-stack solution tailored to the client's specific needs in the e-commerce sector.",
            logo: "/assets/excellence-tapis-logo.png",
            location: "Fes",
            //screenshot: "/assets/img_1.png"
        },
        {
            company: "UrbanVoyage",
            role: "Full-Stack Developer",
            period: "2024",
            description: "UrbanVoyage represents the pinnacle of my full-stack development capabilities. This innovative auto travel web application revolutionizes the way users explore Moroccan cities, offering a comprehensive platform for planning and booking urban adventures. Developed entirely by myself, this project showcases my proficiency in both frontend and backend technologies, as well as my ability to integrate a wide array of third-party services.\n\nFrontend Development:\n• Built a dynamic and responsive user interface using Angular, ensuring a seamless experience across devices.\n• Implemented Tailwind CSS for efficient, utility-first styling, resulting in a sleek and modern design.\n• Integrated Data AOS for subtle, engaging animations that enhance user interaction without compromising performance.\n\nBackend Architecture:\n• Engineered a robust backend using Spring Boot, leveraging its powerful features for rapid development and scalability.\n• Implemented secure user authentication and authorization using JWT and Spring Security, with OAuth integration for social login options.\n• Designed and optimized a PostgreSQL database schema to efficiently handle complex travel data and user information.\n\nKey Features and Integrations:\n• Developed a custom email notification system using Gmail API for booking confirmations and travel updates.\n• Integrated a PDF generation service for creating downloadable itineraries and booking receipts.\n• Implemented Stripe for secure and seamless payment processing.\n• Utilized Cloudinary for efficient management and delivery of image assets.\n• Integrated DeepL API for real-time translation services, enhancing the app's accessibility for international users.\n\nThis project not only demonstrates my technical expertise across the full stack but also showcases my ability to conceptualize, design, and implement a complex, feature-rich web application from the ground up.",
            logo: "/assets/urban-voyage-logo.png",
            location: "Casablanca",
            //screenshot: "/assets/img_1.png"
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


    const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
        return (
            <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="bg-white dark:bg-neutral-800 rounded-lg w-11/12 max-w-4xl overflow-hidden"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                >
                    <div className="flex p-4">
                        <button onClick={onClose} className="ml-auto">
                            <X size={24} />
                        </button>
                    </div>
                    <div className="flex flex-col md:flex-row p-6">
                        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-6">
                            <motion.div
                                className="relative h-64 md:h-96 rounded-lg overflow-hidden"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <AnimatePresence initial={false} custom={currentImageIndex}>
                                    <motion.img
                                        key={currentImageIndex}
                                        src={project.screenshots[currentImageIndex]}
                                        alt={`${project.title} screenshot`}
                                        className="w-full h-full object-cover"
                                        initial={{ opacity: 0, x: 300 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -300 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </AnimatePresence>
                                {project.screenshots.length > 1 && (
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                        {project.screenshots.map((_, i) => (
                                            <button
                                                key={i}
                                                className={`w-3 h-3 rounded-full ${i === currentImageIndex ? 'bg-white' : 'bg-neutral-400'}`}
                                                onClick={() => setCurrentImageIndex(i)}
                                            />
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <motion.h2
                                className="text-2xl font-bold mb-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                {project.title}
                            </motion.h2>
                            <motion.p
                                className="text-sm text-neutral-600 dark:text-neutral-400 mb-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                {project.type}
                            </motion.p>
                            <motion.p
                                className="text-sm text-neutral-500 mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                {project.period}
                            </motion.p>
                            <motion.p
                                className="mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                {project.description}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                <h4 className="font-semibold mb-2">Technologies:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded-full text-sm">
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        );
    };

    const skillCategories = [
        {
            icon: Terminal,
            title: "Programming",
            skills: ["C/C++", "Java", "JavaScript", "TypeScript", "Python", "Bash Scripting"]
        },
        {
            icon: Globe,
            title: "Web Development",
            skills: ["React", "Angular", "Spring Boot", "Tailwind CSS", "JakartaEE"]
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
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
        >
            <main className="w-full md:2/3 lg:w-1/2 grow flex flex-col items-center py-4 px-4 sm:px-6 lg:px-8">
                {/* Profile section */}
                <div className="w-full flex items-center justify-between mt-6 md:mt-16 mb-8 flex-col sm:flex-row">
                    <div className="text-center sm:text-left flex flex-col justify-center max-w-[70%]">
                        <motion.h1
                            className="text-4xl md:text-5xl font-bold"
                            initial={{x: -50, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: 0.5, delay: 0.2}}
                        >
                            Hi, I'm Meftah<span className="text-cyan-500">.</span>
                        </motion.h1>
                        <motion.h2
                            className="text-md mt-2"
                            initial={{x: -50, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: 0.5, delay: 0.4}}
                        >
                            Versatile full-stack web developer creating seamless, responsive
                            applications from database to user interface.
                        </motion.h2>
                    </div>
                    <motion.div
                        className="z-50 h-[8rem] aspect-square relative rounded-full overflow-hidden duration-200"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.5, delay: 0.6}}
                    >
                        <img
                            className="-translate-y-10"
                            src="/assets/profile.jpeg"
                            alt="profile"
                        />
                    </motion.div>
                </div>

                {/* About Me section */}
                <motion.section
                    className="w-full mb-16"
                    initial={{y: 50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.8}}
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
                    initial={{y: 50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 1}}
                >
                    <h2 className="text-2xl font-bold mb-4">Education</h2>
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="mb-4 cursor-pointer"
                            onClick={() => setExpandedEdu(expandedEdu === index ? null : index)}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                        >
                            <div className="flex items-center">
                                <div
                                    className="w-16 aspect-square mr-4 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center overflow-hidden">
                                    {edu.logo ? (
                                        <img
                                            src={edu.logo}
                                            alt="edu.logo"
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                const target = e.currentTarget;
                                                target.style.display = 'none';
                                                const parent = target.parentElement;
                                                if (parent) {
                                                    parent.innerHTML = `<h1 class="text-2xl font-bold">${edu.institution[0]}</h1>`;
                                                }
                                            }}
                                        />
                                    ) : (
                                        <h1 className="text-2xl font-bold">{edu.institution[0]}</h1>
                                    )}
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
                    initial={{y: 50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 1.2}}
                >
                    <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
                    {workExperience.map((job, index) => (
                        <motion.div
                            key={index}
                            className="mb-8 cursor-pointer relative overflow-hidden"
                            onClick={() => setExpandedJob(expandedJob === index ? null : index)}
                            onMouseEnter={() => setHoveredJob(index)}
                            onMouseLeave={() => setHoveredJob(null)}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                        >
                            <div className="flex items-center">
                                <div
                                    className="w-16 h-16 mr-4 bg-neutral-200 dark:bg-neutral-700 rounded-full flex items-center justify-center overflow-hidden">
                                    {job.logo ? (
                                        <img
                                            src={job.logo}
                                            className="w-full h-full object-cover"
                                            alt={`${job.company} logo`}
                                            onError={(e) => {
                                                const target = e.currentTarget;
                                                target.style.display = 'none';
                                                const parent = target.parentElement;
                                                if (parent) {
                                                    parent.innerHTML = `<h1 class="text-2xl font-bold">${job.company[0]}</h1>`;
                                                }
                                            }}
                                        />
                                    ) : (
                                        <h1 className="text-2xl font-bold">{job.company[0]}</h1>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-start gap-2">
                                        <h3 className="text-lg font-semibold">{job.company}</h3>
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
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{job.role}</p>
                                    <div className="flex items-center mt-2 text-sm text-neutral-500">
                                        <Calendar size={14} className="mr-1"/>
                                        <span className="mr-4">{job.period}</span>
                                        <MapPin size={14} className="mr-1"/>
                                        <span>{job.location}</span>
                                    </div>
                                </div>
                            </div>
                            <AnimatePresence>
                                {expandedJob === index && (
                                    <motion.div
                                        className="p-4 my-4 rounded-md bg-neutral-50 dark:bg-neutral-900"
                                        initial={{opacity: 0, height: 0}}
                                        animate={{opacity: 1, height: 'auto'}}
                                        exit={{opacity: 0, height: 0}}
                                        transition={{duration: 0.3}}
                                    >
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <div className="flex-1">
                                                <h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
                                                <ul className="list-disc list-inside space-y-2 text-sm">
                                                    {job.description.split('\n').filter(item => item.trim().startsWith('•')).map((item, i) => (
                                                        <li key={i} className="text-neutral-700 dark:text-neutral-300">
                                                            {item.trim().substring(1).trim()}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                                                    {job.description.split('\n').filter(item => !item.trim().startsWith('•')).join(' ')}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.section>


                {/* Skills section */}
                <motion.section
                    id="skills"
                    className="w-full mb-16"
                    initial={{y: 50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.2}}
                >
                    <h2 className="text-2xl font-bold mb-6">Skills</h2>

                    <div className="flex flex-col md:flex-row items-center justify-between w-full">
                        <div className="w-full md:w-auto">
                            {skillCategories.map((category, index) => (
                                <SkillCategory key={index} {...category} />
                            ))}
                        </div>
                        <div className="w-full mt-4 md:mt-0">
                            <IconCloudDemo/>
                        </div>
                    </div>
                </motion.section>

                {/* Projects section */}
                <motion.section
                    id="projects"
                    className="w-full mb-16"
                    initial={{y: 50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 1.4}}
                >
                    <h2 className="text-2xl font-bold mb-6">My Projects</h2>
                    <ProjectGrid projects={projects}/>
                </motion.section>


            </main>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)}/>
                )}
            </AnimatePresence>

            <div className="fixed z-50 bottom-4">
                <FloatingDockComponent/>
            </div>
        </motion.div>
    );
}