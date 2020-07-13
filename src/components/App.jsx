import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import createNote from "../functions/createNote";

function App() {
  return (
    <div>
      <Header />
      {createNote}
      <Footer />
    </div>
  );
}

export default App;
