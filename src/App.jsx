import React, { useEffect } from "react";
import { Background } from "./assets/images/";

function App() {
  return (
    <div className="flex h-screen w-full flex-1 bg-[url('./assets/images/Home.png')] bg-cover">
      <NavBar/>
    </div>
  );
}

export default App;
