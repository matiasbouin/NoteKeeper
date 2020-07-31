import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Matias Bouin ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
