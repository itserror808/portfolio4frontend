import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';
import 'aos/dist/aos.css';

interface Job {
    company: string;
    role: string;
    period: string;
    description: string;
    logo: string;
    location: string;
    screenshots: string[];
}

const workExperience: Job[] = [
    {
        company: "Vivo Energy",
        role: "Intern",
        period: "July 2023 - August 2023",
        description: "As an intern at Vivo Energy, I led a crucial data transformation initiative, converting complex Excel spreadsheets into dynamic, user-friendly web pages. This project significantly enhanced data accessibility for the 'siege' staff, revolutionizing their information browsing experience. Leveraging a comprehensive tech stack of HTML, CSS, JavaScript, and PHP, I developed an intuitive and responsive interface.\n\nKey Achievements:\n• Engineered a robust web application that accurately mirrored Excel data structures, ensuring data integrity and usability.\n• Implemented advanced data retrieval and display algorithms, resulting in a 40% improvement in page load times.\n• Collaborated closely with the IT department to ensure seamless integration with existing systems and databases.\n• Incorporated responsive design principles, guaranteeing a consistent user experience across various devices and screen sizes.\n• Developed custom PHP scripts to handle complex data processing tasks, improving overall system efficiency.",
        logo: "data:image/webp;base64,UklGRvIFAABXRUJQVlA4IOYFAADQHQCdASpAAD4APjEMjEYiEREKgCADBLYAXZygqA8S/j34zewJSP5N94/3e/w2YQ+MfqH/B/rX5GdovzAP4B/Cv7R/Ov3I/uPcb8wH61/8n/R+/b6PP9P6gH9Q/2vWAegB5Z/7e/B3+0f7VfAX+s3/dvRz7H0WPoL2lyib5nwdvBHan/yH5C8Qzj//b2xeZ75Cfpj2Bf1c/1vYH9ID9mVOVGbi1byrH9iOFWUp7J0TDfbzTespD6e/wK2ZQe9JM/X7xvxOZvKN9oFRvQEdfBlU2TTeoqORF6jxAiSH507ZOWvHAlTOgeyB22Zr86hC1LRW1CsU+vGAAP7//pQrbSIOsHsGkommVCN1xUBMwZW/z/9Cfi9i2u/yj7CHL8YbOww7H7jOyi/Ky3Z43MP+t4FwuUhCpgHLeN/KJ0cFk3xv4jcbjD/CbFaBoMSA8IEINQzXbYmV+PQZBlh5d+JP5Fmqqg5XKkxAjPrGD/AHOGF7xyk7mZZIrnDxX9JFSiswB4BSMozNFTquT98Zig95x9/qam4qvp2Xv+3DIh744KDDsXu99v33lkumRmisnyjcXAFNI4MNY8bRuXUhCTHBYOjemohKNvpaGxT/O6xUySr3MnqjDKisHamyTW",
        location: "Casablanca",
        screenshots: ["/assets/img_1.png","/assets/img_1.png","/assets/img_1.png"]
    },
    {
        company: "Excellence Tapis",
        role: "Freelance Developer",
        period: "2024",
        description: "As a freelance developer for Excellence Tapis, I spearheaded the development of a cutting-edge e-commerce platform specializing in high-quality carpets and rugs. This project showcased my expertise in both frontend and backend technologies, resulting in a seamless and visually stunning user experience.\n\nFrontend Development:\n• Crafted a responsive and intuitive user interface using React, ensuring a smooth browsing experience across all devices.\n• Implemented Tailwind CSS for efficient and consistent styling, significantly reducing development time and improving maintainability.\n• Integrated Data AOS (Animate On Scroll) library to create engaging animations, enhancing user engagement and visual appeal.\n\nBackend Contributions:\n• Collaborated on backend development using the Symfony framework, focusing on RESTful API design and implementation.\n• Developed custom Symfony services for efficient product management, user authentication, and order processing.\n• Implemented robust error handling and logging mechanisms to ensure system stability and facilitate debugging.\n\nThis project not only showcased my technical skills but also demonstrated my ability to deliver a comprehensive, full-stack solution tailored to the client's specific needs in the e-commerce sector.",
        logo: "/assets/excellence-tapis-logo.png",
        location: "Fes",
        screenshots: ["/assets/img_1.png","/assets/img_1.png","/assets/img_1.png"]
    },
    {
        company: "UrbanVoyage",
        role: "Full-Stack Developer",
        period: "2024",
        description: "UrbanVoyage represents the pinnacle of my full-stack development capabilities. This innovative auto travel web application revolutionizes the way users explore Moroccan cities, offering a comprehensive platform for planning and booking urban adventures. Developed entirely by myself, this project showcases my proficiency in both frontend and backend technologies, as well as my ability to integrate a wide array of third-party services.\n\nFrontend Development:\n• Built a dynamic and responsive user interface using Angular, ensuring a seamless experience across devices.\n• Implemented Tailwind CSS for efficient, utility-first styling, resulting in a sleek and modern design.\n• Integrated Data AOS for subtle, engaging animations that enhance user interaction without compromising performance.\n\nBackend Architecture:\n• Engineered a robust backend using Spring Boot, leveraging its powerful features for rapid development and scalability.\n• Implemented secure user authentication and authorization using JWT and Spring Security, with OAuth integration for social login options.\n• Designed and optimized a PostgreSQL database schema to efficiently handle complex travel data and user information.\n\nKey Features and Integrations:\n• Developed a custom email notification system using Gmail API for booking confirmations and travel updates.\n• Integrated a PDF generation service for creating downloadable itineraries and booking receipts.\n• Implemented Stripe for secure and seamless payment processing.\n• Utilized Cloudinary for efficient management and delivery of image assets.\n• Integrated DeepL API for real-time translation services, enhancing the app's accessibility for international users.\n\nThis project not only demonstrates my technical expertise across the full stack but also showcases my ability to conceptualize, design, and implement a complex, feature-rich web application from the ground up.",
        logo: "/assets/urban-voyage-logo.png",
        location: "Casablanca",
        screenshots: ["/assets/img_1.png","/assets/img_1.png","/assets/img_1.png"]
    }
];

export default function WorkExperience() {
    const [expandedJob, setExpandedJob] = useState<number | null>(null);
    const [hoveredJob, setHoveredJob] = useState<number | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentJobIndex, setCurrentJobIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    const openModal = (jobIndex: number, imageIndex: number) => {
        setCurrentJobIndex(jobIndex);
        setCurrentImageIndex(imageIndex);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % workExperience[currentJobIndex].screenshots.length
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + workExperience[currentJobIndex].screenshots.length) % workExperience[currentJobIndex].screenshots.length
        );
    };

    return (
        <section id="experience" className="w-full mb-16">
            <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
            {workExperience.map((job, index) => (
                <motion.div
                    key={index}
                    className="mb-8 cursor-pointer relative"
                    onClick={() => setExpandedJob(expandedJob === index ? null : index)}
                    onMouseEnter={() => setHoveredJob(index)}
                    onMouseLeave={() => setHoveredJob(null)}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: index * 0.1}}
                >
                    <div className="flex items-center mb-2">
                        <div className="w-16 aspect-square mr-4 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center overflow-hidden">
                            {job.logo ? (
                                <img
                                    src={job.logo}
                                    alt={`${job.company} logo`}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <span className="text-2xl font-bold">{job.company[0]}</span>
                            )}
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
                            <motion.div
                                className="mt-4"
                                initial={{opacity: 0, height: 0}}
                                animate={{opacity: 1, height: 'auto'}}
                                exit={{opacity: 0, height: 0}}
                                transition={{duration: 0.3}}
                            >
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="w-full sm:w-1/3 grid grid-cols-2 gap-2">
                                        {job.screenshots.map((screenshot, imgIndex) => (
                                            <div
                                                key={imgIndex}
                                                className="aspect-video cursor-pointer"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    openModal(index, imgIndex);
                                                }}
                                            >
                                                <img
                                                    src={screenshot}
                                                    alt={`${job.company} project screenshot ${imgIndex + 1}`}
                                                    className="w-full h-full object-cover rounded-lg shadow-md"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-sm flex-1 whitespace-pre-line">{job.description}</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}

            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <div
                        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-neutral-800 rounded-lg overflow-hidden"
                        data-aos="zoom-in"
                    >
                        <img
                            src={workExperience[currentJobIndex]?.screenshots[currentImageIndex]}
                            alt={`${workExperience[currentJobIndex]?.company} project screenshot`}
                            className="w-full h-full object-contain"
                        />
                        <button
                            className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-75"
                            onClick={closeModal}
                        >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </button>
                        <button
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-75"
                            onClick={prevImage}
                        >
                            <ChevronLeft className="h-4 w-4" />
                            <span className="sr-only">Previous image</span>
                        </button>
                        <button
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-75"
                            onClick={nextImage}
                        >
                            <ChevronRightIcon className="h-4 w-4" />
                            <span className="sr-only">Next image</span>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}