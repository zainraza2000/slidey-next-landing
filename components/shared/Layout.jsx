import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import slideyLogo from "@/assets/images/logo-black.png";

const Layout = ({ children }) => {
  return (
    <main className="md:mt-[75px] mt-8">
      <div className="w-[80%] mx-auto md:px-10">
        <Navbar logo={slideyLogo} />
      </div>
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
