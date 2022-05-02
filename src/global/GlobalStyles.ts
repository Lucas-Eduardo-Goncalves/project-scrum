import { globalCss } from "@stitches/react";

export const GlobalStyles = globalCss({
  ":root": {
    "--primary": "#E86C5D",
    "--primary-light": "rgba(232, 108, 93, 0.5)",
    
    "--secondary": "#455A64",
    "--secondary-light": "rgba(69, 90, 100, 0.5)",
    
    "--text": "#000000",
    "--shape": "#FFFFFF",
    "--background": "#DFDFDF",
  },

  '*': { 
    margin: 0, 
    padding: 0,
    outline: 0,
    boxSizing: "border-box",
  },

  "html": {
    background: "var(--background)",
  },

  "html, body, #root": {
    maxHeight: "100vh",
    maxWidth: "100vw",
    height: "100%",
    width: "100%",
  },

  "body, input, button": {
    font: "16px Poppins, sans-serif",
    color: "var(--text)",
  },

  "h1, h2, h3, h4, h5, h6": {
    fontFamily: "Poppins, sans-serif",
    color: "var(--text)",
  },

  "button, a": {
    cursor: "pointer",
  },

  "button[disabled]": {
    opacity: 0.8,
    cursor: "not-allowed",
  }
});