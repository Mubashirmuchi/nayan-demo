"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi! How can I help you today?", isUser: false },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentInput }),
      });

      const data = await response.json();

      const botMessage: Message = {
        id: Date.now() + 1,
        text: data.text || "Sorry, I could not generate a response.",
        isUser: false,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Sorry, something went wrong. Please try again.",
        isUser: false,
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-2 right-6 w-16 h-16 bg-white text-white rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Image
          src="/logo.png"
          alt="Chat Icon"
          width={64}
          height={64}
          className="object-contain w-full h-full p-3"
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 rounded-t-lg">
              <h3 className="font-semibold">Chat Support</h3>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      message.isUser
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  onClick={sendMessage}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
