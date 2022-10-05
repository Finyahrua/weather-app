import React, { useEffect } from "react";
import { NavBar } from "./components";

function App() {
  return (
    <div className="flex h-screen w-full flex-1 bg-[url('./assets/images/Home.png')] bg-cover">
      <div className="mx-[80px]">
        <NavBar />
      </div>
    </div>
  );
}

export default App;
