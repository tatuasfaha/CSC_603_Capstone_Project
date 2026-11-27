
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

  const symptomSuggestions = [
    { label: "Cold & Flu", prompt: "I have cold or flu symptoms." },
    { label: "Allergies", prompt: "I'm experiencing allergy symptoms." },
    { label: "Minor Cuts", prompt: "I have a minor cut or scrape." },
    { label: "Sore Throat", prompt: "I have a sore throat." },
  ];
  
  function handleSuggestion(prompt) {
    setInput(prompt);
  }

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

        {messages.length === 1 && (
          <div className="suggestions">
          <p>Not sure where to start? Try a common topic:</p>

    <div className="suggestion-buttons">
      {symptomSuggestions.map((suggestion) => (
        <button
          key={suggestion.label}
          type="button"
          onClick={() => handleSuggestion(suggestion.prompt)}
        >
          {suggestion.label}
        </button>
      ))}
    </div>
  </div>
)}

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
