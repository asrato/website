import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.styles.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);

// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass