import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div className="p-4 text-white bg-black h-screen flex flex-col justify-center items-center">
    <h1 className="text-4xl font-bold mb-4">AI Command Center 2025 🚀</h1>
    <p className="text-lg">Chatbot. Analytics. Lead Capture. Let's build.</p>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
