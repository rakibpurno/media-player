import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChannelProvider } from "./Context/ChannelContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ChannelProvider>
      <App />
    </ChannelProvider>
  </React.StrictMode>
);