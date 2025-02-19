import React from "react";
import { storeConfig } from "../../config/config";

const HeaderInfo = () => {
  return (
    <div>
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
    </div>
  );
};

export default HeaderInfo;
