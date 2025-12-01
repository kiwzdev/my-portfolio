import { FaSun, FaMoon } from "react-icons/fa";
import { useThemeContext } from "../../context/ThemeContext";

interface ThemeChangerProps {
  size?: "sm" | "md" | "lg";
}

const ThemeChanger = ({ size = "md" }: ThemeChangerProps) => {
  const { theme, toggleTheme } = useThemeContext()

  const isDark = theme === "dark";

  // Icon size map
  const sizeMap = {
    sm: 24,
    md: 34,
    lg: 40,
  };

  const iconSize = sizeMap[size];

  return (
    <div className="flex items-center">
      <button onClick={toggleTheme} className="">
        {isDark ? (
          <FaSun size={iconSize} className="text-gray-700 dark:text-gray-300 hover:text-yellow-600" />
        ) : (
          <FaMoon size={iconSize} className="text-gray-700 dark:text-gray-300 hover:text-blue-900" />
        )}
      </button>
    </div>
  );
};

export default ThemeChanger;
