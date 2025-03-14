'use client'

import { useEffect } from "react";

interface LiveChatProps {
  // You can add props here if needed in the future
}

const LiveChat: React.FC<LiveChatProps> = () => {
  useEffect(() => {
    const script1: HTMLScriptElement = document.createElement("script");
    script1.src = "https://multichoiceagency.odoo.com/im_livechat/loader/1";
    script1.defer = true;
    document.body.appendChild(script1);

    const script2: HTMLScriptElement = document.createElement("script");
    script2.src = "https://multichoiceagency.odoo.com/im_livechat/assets_embed.js";
    script2.defer = true;
    document.body.appendChild(script2);

    return () => {
      if (script1.parentNode) {
        script1.parentNode.removeChild(script1);
      }
      if (script2.parentNode) {
        script2.parentNode.removeChild(script2);
      }
    };
  }, []);

  return <div id="livechat-container" className="fixed bottom-10 right-4 z-50"></div>;
};

export default LiveChat;