import React, { useEffect } from "react";
import { Banner, Cards, NavBar, SearchAndFilters } from "./components";

function App() {
  return (
    <div className="flex  flex-1 overflow-x-clip bg-[url('./assets/images/Home.png')] sm:h-screen sm:w-full sm:bg-cover">
      <div className="mx-0 mt-1 w-full sm:mx-[40px] sm:mt-[51px] md:mx-[80px] ">
        <NavBar />
        <Banner />
        <SearchAndFilters />
        <Cards />
      </div>
    </div>
  );
}

export default App;
