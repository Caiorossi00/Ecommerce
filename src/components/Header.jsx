import React from "react";
import { storeConfig } from "../config/config";

const Header = () => {
  return (
    <header>
      <h1>{storeConfig.name}</h1>
      <p>{storeConfig.description}</p>
      <div>
        <a
          href={storeConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        <a
          href={storeConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </header>
  );
};

export default Header;
