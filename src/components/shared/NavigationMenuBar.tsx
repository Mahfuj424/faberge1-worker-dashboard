"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import logo from "@/app/assets/images/logo.png";
import userIcon from "@/app/assets/icons/user-icon.svg";
import Link from "next/link";

const NavigationMenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm border-b border-pink-100">
      <div className="container mx-auto p-4 flex items-center justify-between">
        {/* Left Icon (Fixed Size) */}
        <div className="h-8">
          <Image
            src={userIcon}
            alt="User Icon"
            width={52}
            height={52}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Center Menu (desktop) */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <Link href={item?.href} key={item?.href}
              className={`cursor-pointer transition-colors ${pathname === item.href
                ? "text-pink-600 border-b-2 border-pink-600 pb-1"
                : "hover:text-pink-700"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Logo */}
        <div className="flex-shrink-0 w-[180px] flex items-center justify-end">
          <Image
            src={logo}
            alt="IHBS Logo"
            width={84}
            height={86}
            className="object-contain"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`${pathname === item.href
                  ? "text-pink-600 font-semibold"
                  : "hover:text-pink-700"
                  }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavigationMenuBar;
