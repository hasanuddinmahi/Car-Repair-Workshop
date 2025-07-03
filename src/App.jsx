import React from "react";
import Home from "./Home";
import SEO from "./hooks/SEO"; // ← Add this line

function App() {
  return (
    <>
      <SEO />
      <Home />
    </>
  );
}

export default App;
