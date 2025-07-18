import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/src/styles/global.css";
import App from "./App.tsx";
import Footer from "./components/footer.tsx";
import Header from "./components/header.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <main>
      <App />
    </main>
    <Footer />
  </StrictMode>,
);
