import React from "react";
import currentYear from "../functions/currentYear";

function Footer() {
  return (
    <footer>
      <p>Copyright © {currentYear()}</p>
    </footer>
  );
}

//

export default Footer;
