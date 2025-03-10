'use client'

import { useEffect } from "react";

const LiveChat = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://multichoiceagency.odoo.com/im_livechat/loader/1";
    script1.defer = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://multichoiceagency.odoo.com/im_livechat/assets_embed.js";
    script2.defer = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return <div id="livechat-container" className="fixed bottom-4 right-4 z-50"></div>;
};

export default LiveChat;