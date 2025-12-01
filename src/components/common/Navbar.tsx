import { useState } from "react";
import {
  FaBriefcase,
  FaEnvelope,
  FaGraduationCap,
  FaTools,
  FaUser,
} from "react-icons/fa";
import ThemeChanger from "./ThemeChanger";

const Navbar = ({ onNavigate }: { onNavigate: (id: string) => void }) => {
  const [open, setOpen] = useState(false);

  const menu = [
    { label: "Summary", href: "#summary" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-6 z-50 flex justify-center">
      <div
        className="
          max-w-2xl w-[90%]
          bg-white/90 dark:bg-gray-900/80
          backdrop-blur-xl
          border border-gray-100 dark:border-gray-700/40
          shadow-xl
          rounded-2xl
          px-6 py-4
          transition-all duration-300
        "
      >
        {/* Top row */}
        <div className="flex justify-between items-center py-4">
          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-12 text-gray-700 font-medium absolute left-1/2 -translate-x-1/2">
            {menu.map((item) => (
              <li key={item.href}>
                <button
                  className="
                    text-xl transition
                    text-gray-700 dark:text-gray-300
                    hover:text-black dark:hover:text-white
                  "
                  onClick={() => onNavigate(item.href.replace("#", ""))}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-7 md:hidden overflow-x-hidden">
            <button
              onClick={() => onNavigate("summary")}
              className="
                text-gray-900 dark:text-gray-300
                hover:text-blue-500 
                hover:scale-130 duration-300 transition
              "
            >
              <FaUser size={32} />
            </button>

            <button
              onClick={() => onNavigate("skills")}
              className="
                text-gray-900 dark:text-gray-300
                hover:text-blue-500 
                hover:scale-130 duration-300 transition
              "
            >
              <FaTools size={32} />
            </button>

            <button
              onClick={() => onNavigate("education")}
              className="
                text-gray-900 dark:text-gray-300
                hover:text-blue-500 
                hover:scale-130 duration-300 transition
              "
            >
              <FaGraduationCap size={32} />
            </button>

            <button
              onClick={() => onNavigate("experience")}
              className="
                text-gray-900 dark:text-gray-300
                hover:text-blue-500 
                hover:scale-130 duration-300 transition
              "
            >
              <FaBriefcase size={32} />
            </button>

            <button
              onClick={() => onNavigate("contact")}
              className="
                text-gray-900 dark:text-gray-300
                hover:text-blue-500 
                hover:scale-130 duration-300 transition
              "
            >
              <FaEnvelope size={32} />
            </button>
            <button
              className="text-gray-900 hover:text-blue-500 hover:scale-130 duration-300 transition hover:cursor-pointer"
            >
              <ThemeChanger size="md" />
            </button>
          </div>
          {/* Mobile Hamburger */}
          {/* <button
            className="md:hidden text-gray-700 ml-auto hover:text-blue-500 hover:scale-110 duration-300 transition hover:cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <span className="text-3xl">
                <IoCloseOutline />
              </span>
            ) : (
              <span className="text-3xl">
                <RxHamburgerMenu />
              </span>
            )}
          </button> */}
        </div>

        {/* Mobile menu */}
        {/* {open && (
          <ul className="md:hidden mt-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl text-center font-medium text-xl rounded-xl overflow-hidden">
            {menu.map((item) => (
              <li
                key={item.href}
                className="p-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <button
                  onClick={() => {
                    setOpen(false);
                    onNavigate(item.href.replace("#", ""));
                  }}
                  className="
                    w-full 
                    text-gray-700 dark:text-gray-300 
                    hover:text-black dark:hover:text-white
                  "
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )} */}
      </div>
    </nav>
  );
};

export default Navbar;
