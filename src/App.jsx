import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, MainPage } from "./components";

const App = () => {
  return (
    <>
      <header className="fixed top-0 z-50 w-full">
        <Navbar />
      </header>
      <main className="mt-14 flex h-full max-h-screen">
        <Sidebar />
        <section className="flex-1 bg-[#F6F8FA] p-6">
          <MainPage />
        </section>
      </main>
    </>
  );
};

export default App;
