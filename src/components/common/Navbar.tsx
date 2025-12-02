import ThemeChanger from "./ThemeChanger";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

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
    <>
      {/* DESKTOP NAVBAR */}
      <nav className="hidden md:flex fixed left-0 right-0 top-6 z-50 justify-center">
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
          <div className="flex justify-center items-center relative py-2">
            <ul className="flex space-x-12 text-gray-700 font-medium">
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
          </div>
        </div>
      </nav>

      {/* MOBILE: FLOATING HAMBURGER BUTTON ONLY */}
      <button
        className="
          md:hidden
          fixed top-6 right-24 z-50
          w-14 h-14
          flex items-center justify-center
          rounded-full
          backdrop-blur-md
          border border-gray-300/40 dark:border-white/20
          shadow-lg
        "
      >
        <ThemeChanger size="md" />
      </button>
      <button
        onClick={() => setOpen(!open)}
        className="
          md:hidden
          fixed top-6 right-6 z-50
          w-14 h-14
          flex items-center justify-center
          rounded-full
          backdrop-blur-md
          border border-gray-300/40 dark:border-white/20
          shadow-lg
          dark:text-white
        "
      >
        {open ? <IoCloseOutline size={28} /> : <RxHamburgerMenu size={28} />}
      </button>

      {/* MOBILE MENU PANEL */}
      {open && (
        <div
          className="
            md:hidden
            fixed top-24 right-6 left-6 z-40
            bg-white/90 dark:bg-gray-900/80
            backdrop-blur-xl
            border border-gray-200 dark:border-gray-700
            shadow-xl
            rounded-2xl
            py-4
            transition-all duration-300
            animate-slideDown
          "
        >
          <ul className="text-center text-lg font-medium divide-y divide-gray-200 dark:divide-gray-700">
            {menu.map((item) => (
              <li key={item.href} className="py-4">
                <button
                  onClick={() => {
                    setOpen(false);
                    onNavigate(item.href.replace("#", ""));
                  }}
                  className="
                    w-full
                    text-gray-700 dark:text-gray-300
                    hover:text-black dark:hover:text-white
                    transition
                  "
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
