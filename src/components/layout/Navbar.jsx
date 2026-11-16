import React, { useEffect, useState } from "react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { NAV_LINKS } from "../../data/content";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/85 shadow-[0_1px_0_rgba(79,24,98,0.08)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-page flex h-[72px] items-center justify-between">
        <Logo />

        <ul className="hidden items-center gap-7 rounded-full bg-white/90 px-7 py-2.5 ring-1 ring-brand-100 backdrop-blur md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-brand-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="#download" className="px-5 py-2.5">
            Get the app
          </Button>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand-100 bg-white md:hidden">
          <ul className="container-page flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block py-3 text-base font-medium text-ink-soft hover:text-brand-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <Button href="#download" onClick={close} className="w-full">
                Get the app
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
