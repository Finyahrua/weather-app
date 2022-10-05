import React, { useEffect } from "react";
import { Banner, NavBar } from "./components";

function App() {
  return (
    <div className="flex h-screen w-full flex-1 bg-[url('./assets/images/Home.png')] bg-cover">
      <div className="mx-[80px] w-full mt-[51px]">
        <NavBar />
        <Banner/>
      </div>
    </div>
  );
}

export default App;
