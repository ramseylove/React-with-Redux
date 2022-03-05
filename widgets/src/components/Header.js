import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Accordion
      </Link>
      <Link href="/dropdown" className="item">
        Dropdown
      </Link>
      <Link href="/search" className="item">
        search
      </Link>
      <Link href="/translator" className="item">
        Translator
      </Link>
      <Link href="/selectMenu" className="item">
        Select Menu
      </Link>
    </div>
  );
};

export default Header;
