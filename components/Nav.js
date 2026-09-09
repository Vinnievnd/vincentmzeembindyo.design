"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/concepts", label: "Concepts" },
  { href: "#contact", label: "Contact Us" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="logo" aria-label="Mzee Design Agency">M</Link>
        <span className="nav-name">Vincent Mzee Mbindyo</span>
        <div className={`nav-links${isOpen ? " is-open" : ""}`} id="navLinks">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/resume" className="nav-cta">Resume</Link>
        </div>
        <Link href="/resume" className="btn-resume">Resume</Link>
        <button
          className={`nav-toggle${isOpen ? " is-open" : ""}`}
          aria-label="Menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          <span></span>
        </button>
      </div>
    </nav>
  );
}
