import React, { useState, useEffect } from "react";
import { FloatingDock } from "./ui/floating-dock";
import { Home, Book, GraduationCap, Briefcase, FolderGit2, Moon, Sun } from "lucide-react";

export function FloatingDockComponent() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('darkMode');
            return saved === 'true';
        }
        return false;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', isDarkMode.toString());
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const links = [
        {
            title: "Home",
            icon: <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "#home",
        },
        {
            title: "Skills",
            icon: <Book className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "#skills",
        },
        {
            title: "Education",
            icon: <GraduationCap className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "#edu",
        },
        {
            title: "Experience",
            icon: <Briefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "#experience",
        },
        {
            title: "Projects",
            icon: <FolderGit2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "#projects",
        },
        {
            title: isDarkMode ? "Light Mode" : "Dark Mode",
            icon: isDarkMode ?
                <Sun className="h-full w-full text-neutral-500 dark:text-neutral-300" /> :
                <Moon className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "#",
            onClick: toggleDarkMode,
        },
    ];

    return (
        <div className="flex items-center justify-center w-full">
            <FloatingDock
                mobileClassName="translate-y-20" // only for demo, remove for production
                items={links}
            />
        </div>
    );
}