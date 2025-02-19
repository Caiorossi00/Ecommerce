import React from "react";
import { storeConfig } from "../config/config";

const Footer = () => {
  return (
    <footer>
      <p>
        Contato:{" "}
        <a
          href={storeConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </p>
      <p>
        {storeConfig.name} - {storeConfig.description}
      </p>
    </footer>
  );
};

export default Footer;
