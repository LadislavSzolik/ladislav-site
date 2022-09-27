import Link from "next/link";
import React from "react";
import style from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={style.navBar} aria-label="Global">
      <NavItem href="/" title="Home" />
      <NavItem href="/projects" title="Projects" />
      <NavItem href="/notes" title="Notes" />
      <NavItem href="/about" title="About" />
    </nav>
  );
}

function NavItem({ title, href }) {
  return (
    <Link href={href}>
      <a>{title}</a>
    </Link>
  );
}
