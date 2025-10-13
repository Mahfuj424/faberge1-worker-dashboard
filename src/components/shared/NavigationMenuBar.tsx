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
    <nav className="sticky top-0 bg-white shadow-sm border-b border-pink-100 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Icon */}
        <div className="h-10">
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
            <Link
              href={item?.href}
              key={item?.href}
              className={`cursor-pointer transition-colors text-xl ${pathname === item.href
                ? "text-pink-600 border-b-2 border-pink-600 pb-1"
                : "hover:text-pink-700"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Logo */}
        <div className="flex-shrink-0 w-[180px] flex items-center justify-center md:justify-end">
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

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Left Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Image src={logo} alt="IHBS Logo" width={80} height={60} />
          <button onClick={() => setIsOpen(false)}>
            <X className="text-gray-700" size={28} />
          </button>
        </div>
        <ul className="flex flex-col p-6 space-y-6 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block text-lg ${pathname === item.href
                  ? "text-pink-600 font-semibold"
                  : "hover:text-pink-700"
                  }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationMenuBar;
