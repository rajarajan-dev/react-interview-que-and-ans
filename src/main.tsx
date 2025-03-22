import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeContextProvider } from "./context/ThemeContextProvider.tsx";
import { PokemonContextProvider } from "./context/PokemonContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <PokemonContextProvider>
        <App />
      </PokemonContextProvider>
    </ThemeContextProvider>
  </StrictMode>
);
