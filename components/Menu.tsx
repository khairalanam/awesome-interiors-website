// components/Menu.tsx
import Link from "next/link";
import closeButton from "@/public/close-button.svg";
import Image from "next/image";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden absolute top-0 left-0 w-full h-full bg-white p-10 z-10 flex flex-col items-center gap-4`}
      >
        <button
          onClick={onClose}
          className="font-semibold mt-4 absolute top-2 right-6 w-6"
        >
          <Image
            src={closeButton}
            alt="Click here to close the navigation page"
          />
        </button>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/" className="text-xs">
          Let&apos;s Work
        </Link>
      </nav>
    </>
  );
};

export default Menu;
