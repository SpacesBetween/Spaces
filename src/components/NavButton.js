import React from "react";
import './NavButton.css';
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({ children, type, onClick, style, size }) => {
  const checkStyle = STYLES.includes(style) ? style : STYLES[1];

  const checkSize = SIZES.includes(size) ? size : SIZES[0];

  return (
    <Link to="/" className="btn-mobile">
      <button
        className={`btn ${checkStyle} ${checkSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
