import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import slideyLogo from "@/assets/images/logo-black.png";

const Layout = ({ children }) => {
  return (
    <main className="mt-16">
      <div className="w-[80%] mx-auto ">
        <Navbar logo={slideyLogo} />
      </div>
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
