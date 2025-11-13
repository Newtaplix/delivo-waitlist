"use client";
import { Moon, Sun, SunDim } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";

interface Props {
  label?: string;
}

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <motion.button
      onClick={toggleTheme}
      className="h-7 rounded-full p-1 flex items-center cursor-pointer shadow-lg transition-colors duration-300 relative"
      style={{ width: 52 }}
      data-theme={theme}
      // Set up the background color for light and dark modes
      variants={{
        light: { backgroundColor: "#d1d5db" }, // bg-gray-300
        dark: { backgroundColor: "hsl(222, 47%, 11%)" }, // bg-gray-800
      }}
      initial={theme}
      animate={theme}>
      {/* The sliding orb/dot */}
      <motion.span
        className="w-5 h-5 rounded-full bg-white shadow-md absolute z-10"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        variants={{
          light: { x: 0 },
          dark: { x: 22 },
        }}
      />

      {/* The icons for sun and moon */}
      <AnimatePresence mode="wait">
        {theme === "light" && (
          <motion.div
            key="sun-icon"
            className="absolute inset-0 flex items-center justify-end pr-1"
            initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.5 }}
            transition={{ duration: 0.2 }}>
            <SunDim className="size-5 text-dark" />
          </motion.div>
        )}

        {theme === "dark" && (
          <motion.div
            key="moon-icon"
            className="absolute inset-0 flex items-center justify-start pl-1"
            initial={{ opacity: 0, rotate: 45, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -45, scale: 0.5 }}
            transition={{ duration: 0.2 }}>
            <Moon className="size-4 text-dark" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
