import React, { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

// Create the provider component
export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Log the updated theme after the state changes
  useEffect(() => {}, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
