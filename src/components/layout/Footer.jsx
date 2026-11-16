import React from "react";
import Logo from "../ui/Logo";
import { NAV_LINKS, STORE_LINKS } from "../../data/content";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-100 bg-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
            A digital asset wallet and blockchain participation platform — secure wallet
            management in one unified mobile experience.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-ink">Explore</h3>
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-ink-muted hover:text-brand-600">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-ink">Get the app</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a href="#download" className="text-sm text-ink-muted hover:text-brand-600">
                iOS
              </a>
            </li>
            <li>
              <a
                href={STORE_LINKS.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-muted hover:text-brand-600"
              >
                Android
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-100">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>© {year} Quanthex. All rights reserved.</p>
          <p className="max-w-xl md:text-right">
            Digital assets are volatile and carry risk. Participation rewards are not guaranteed.
            Only use funds you can afford to lose.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
