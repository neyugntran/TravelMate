// src/components/ChatBox.jsx
import { useState } from "react";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg"
      >
        {isOpen ? "Close Chat" : "Open Chat"}
      </button>

      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 h-96 bg-white border rounded-lg shadow-lg">
          <h2 className="p-4 bg-gray-200">Chat Box</h2>
          <div className="p-4">
            <div className="space-y-4">
              <p>Welcome to chat!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
