import React from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="min-h-screen bg-(--neutral-900) px-10 py-6">
      <Navbar />
      <Search />
    </div>
  );
};

export default App;
