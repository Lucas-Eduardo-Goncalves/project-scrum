import { BrowserRouter } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext";
import { Routes } from "./routes";

import { GlobalStyles } from "./global/GlobalStyles";

export function App() {
  GlobalStyles();

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </BrowserRouter>
  );
}
