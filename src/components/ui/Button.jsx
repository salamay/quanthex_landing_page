import React from "react";

const VARIANTS = {
  primary:
    "bg-brand-600 text-white shadow-glow hover:bg-brand-700 focus-visible:outline-brand-600",
  secondary:
    "bg-white text-brand-700 ring-1 ring-brand-200 hover:ring-brand-400 hover:bg-brand-50 focus-visible:outline-brand-600",
  light:
    "bg-white text-brand-800 hover:bg-brand-100 focus-visible:outline-white",
  ghostLight:
    "text-white ring-1 ring-white/30 hover:bg-white/10 focus-visible:outline-white",
};

function Button({ href, variant = "primary", className = "", children, ...rest }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${VARIANTS[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
