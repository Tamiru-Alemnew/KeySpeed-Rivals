"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavItemProps {
    href: string;
    children: React.ReactNode;
    }

const NavItem = ({ href, children }:NavItemProps) => (
  <Link href={href} className="text-white hover:text-yellow-500 dark:hover:text-yellow-500">
    {children}
  </Link>
);



function Header() {
  const [scroll, setScroll] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

    const navItems = [
      { href: "#", text: "Practice" },
      { href: "#", text: "Leaderboard" },
      { href: "#", text: "MultiPlayer" },
    ];

  return (
    <header
      className={`z-20 sticky w-full bg-black transition-all duration-200 px-6 `}
    >
      <div className=" mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
            <Image
                src="/favicon.ico"
                alt="KeySpeed Rivals"
                width={50}
                height={50}
            />
          <h1 className=" font-sans font-bold text-lg">KeySpeed Rivals</h1>
        </div>

        <nav className="space-x-5 flex items-center text-lg  min-w-fit">
          {navItems.map((item, index) => (
            <NavItem href={item.href} key={index}>
              {item.text}
            </NavItem>
          ))}

          <Link
            href="/login"
            className="w-fit whitespace-nowrap px-7 bg-gray-700 text-white   items-center justify-center p-4  py-3 overflow-hidden font-medium rounded-lg shadow-md group"
          >
            Signup
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
