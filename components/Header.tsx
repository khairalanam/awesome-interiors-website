"use client";

import { useState } from "react";
import Menu from "@/components/Menu";
import Image from "next/image";
import logo from "@/public/main-logo.svg";
import hamburger from "@/public/hamburger-menu.svg";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu: Function = (): void => setIsMenuOpen((prev) => !prev);

  return (
    <header className="flex items-center px-6 py-4 justify-between">
      <section className="flex items-center gap-2">
        <Image src={logo} alt="Main Logo" className="w-8" />
        <h1 className="text-sm font-semibold">Carii</h1>
      </section>

      <button
        onClick={() => toggleMenu()}
        className="lg:hidden text-blue-600 focus:outline-none"
      >
        <Image
          src={hamburger}
          alt="Click here to view the links"
          className={`w-6 transition-transform ${
            isMenuOpen ? "rotate-45" : "rotate-0"
          }`}
        />
      </button>

      {isMenuOpen && <Menu isOpen={isMenuOpen} onClose={() => toggleMenu()} />}
    </header>
  );
};

export default Header;
