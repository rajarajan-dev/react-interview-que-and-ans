import { createContext } from "react";

// Define the type for the context value
type ThemeContextType = {
  theme: "light" | "dark";
  switchTheme: () => void;
};

// Create the context with a default value
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
