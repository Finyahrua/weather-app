import React, { useEffect } from "react";
import { Banner, Cards, NavBar, SearchAndFilters } from "./components";

function App() {
  return (
    <div className="flex h-screen w-full flex-1 bg-[url('./assets/images/Home.png')] bg-cover">
      <div className="mx-[80px] mt-[51px] w-full">
        <NavBar />
        <Banner />
        <SearchAndFilters />
        <Cards />
      </div>
    </div>
  );
}

export default App;
