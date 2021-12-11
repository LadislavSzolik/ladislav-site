import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Navbar() {
  return (
    <div className="max-w-4xl mx-auto">
      <nav
        className="py-2 flex space-x-2 lg:space-x-8 justify-center"
        aria-label="Global"
      >
        <NavItem href="/" title="Home" />
        <NavItem href="/posts" title="Posts" />
        <NavItem href="/projects" title="Projects" />
        <NavItem href="/about" title="About" />
      </nav>
    </div>
  );
}

function NavItem({ title, href }) {
  const router = useRouter();

  let style = 'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium';
  if (router.pathname === href) {
    style += ' bg-sky-50 text-sky-900';
  } else {
    style += ' text-sky-900 hover:bg-sky-50 hover:text-sky-900';
  }

  return (
    <Link href={href}>
      <a className={style}>{title}</a>
    </Link>
  );
}
