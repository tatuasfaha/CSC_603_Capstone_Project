
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! I'm AI Advice Nurse. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  function handleSend(event) {
    event.preventDefault();

    const message = input.trim();

    if (!message) return;

    setMessages((previous) => [
      ...previous,
      { role: "user", text: message },
      {
        role: "assistant",
        text: "Thank you for sharing your symptoms. This is a demo response. The AI backend will be connected later.",
      },
    ]);

    setInput("");
  }

  return (
    <div className="app">
      <header className="header">
        <h1>AI Advice Nurse</h1>
        <p>Your educational health information assistant</p>
      </header>

      <main className="chat-container">
        <div className="disclaimer">
          Educational prototype only. Not a medical diagnosis.
          For emergencies, call 911 in the United States.
        </div>

        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.role}`}
            >
              {message.text}
            </div>
          ))}
        </div>

        <form className="input-area" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Describe your symptoms..."
            aria-label="Describe your symptoms"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
