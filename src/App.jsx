import React from "react";
import { Navbar, Sidebar, MainPage } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="mt-6 flex h-full">
        <Sidebar />
        <section className="flex-1 bg-[#F6F8FA] pl-[17rem] pr-4 pt-12">
          <MainPage />
        </section>
      </main>
    </>
  );
};

export default App;
