'use client';

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";


const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            className="relative w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1"
            onClick={toggleTheme}
        >
            <Moon size={18}
            className="text-white"
            />
            <div
                className="absolute bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
                style={theme === 'dark' ? { left: '2px' } : { right: '2px' }}
                ></div>
                <Sun size={18}
                className="ml-auto text-yellow-400"
                />
        </div>
    )
};

export default ThemeToggle