import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <main>
      <h1>AI Advice Nurse</h1>

      <p>
        Educational chatbot prototype for common minor illnesses.
      </p>

      <p>
        The chat interface will be added after the backend is ready.
      </p>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);