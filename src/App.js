import "./App.css";
// import { useState } from "react";
import FirebaseForms from "./components/firebaseforms/FirebaseForms";
import Navbar from "./components/header/Navbar";
import PreviewArea from "./components/previewArea/PreviewArea.js";

function App() {
  return (
    <div>
      <div className="navbarContainer">
        <Navbar />,
      </div>
      <FirebaseForms />
      <PreviewArea />
    </div>
  );
}

export default App;
