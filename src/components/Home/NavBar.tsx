import { Icon } from "@iconify/react";
import { useState } from "react";

export interface NavBarDataProps {
  title: string;
  links: {
    name: string;
    href: string;
    icon: string;
  }[];
}

interface NavBarProps extends NavBarDataProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NavBar = (props: NavBarProps) => {
  const [mobileMenuHidden, setMobileMenuHidden] = useState<boolean>(true);

  return (
    // DARK: bg
    <header className="w-full fixed bottom-0 md:bottom-auto md:top-0 bg-white dark:bg-[#212121]">
      {/* Mobile Menu */}
      {/* <div className="h-24 bg-cyan-300"></div> */}
      <nav className="py-3 md:py-6 px-4 md:px-8 flex items-center">
        {/* Title */}
        <a href="/" className="hover:text-violet-500">
          {props.title}
        </a>

        {/* Menu */}
        {/* DARK: bg */}
        <div
          className={`md:ml-auto absolute bottom-0 left-0 md:static md:block bg-white dark:bg-[#212121] w-full md:w-auto ${
            mobileMenuHidden ? "hidden" : "block"
          }`}
        >
          <ul className="grid grid-cols-3 gap-4 px-6 pt-8 md:flex md:p-0 md:gap-8">
            {props.links.map((link, index) => (
              <li key={index} className="p-2 md:py-0">
                <a
                  href={link.href}
                  className="hover:text-violet-500 flex flex-col items-center justify-center"
                >
                  <Icon icon={link.icon} className="md:hidden" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="w-full hover:text-violet-500 flex justify-end md:hidden">
            <button
              className="p-2 mr-2 mb-2"
              onClick={() => {
                setMobileMenuHidden((prev) => !prev);
              }}
              aria-label="Hide Menu"
            >
              <Icon
                icon="ant-design:close-circle-outlined"
                className="text-2xl"
              />
            </button>
          </div>
        </div>

        {/* Theme toggle */}
        <button
          className="ml-auto md:ml-8 p-2 text-lg hover:text-violet-500"
          onClick={() => props.toggleDarkMode()}
          aria-label="Toggle dark mode"
        >
          <Icon icon={props.darkMode ? "bi:moon" : "bi:sun"} />
        </button>

        {/* Mobile Menu button */}
        <button
          className="md:hidden mx-4 text-lg hover:text-violet-500"
          onClick={() => {
            setMobileMenuHidden((prev) => !prev);
          }}
          aria-label="Toggle mobile menu"
        >
          <Icon icon="uil:apps" />
        </button>
      </nav>
    </header>
  );
};
export default NavBar;
