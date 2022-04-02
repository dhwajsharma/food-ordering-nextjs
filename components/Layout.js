import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div style={{ background: "#18191a", color: "white" }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
