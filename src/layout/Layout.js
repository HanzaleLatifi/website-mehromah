import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

function Layout({ children }) {
  return (
    <>
      <header><Navigation/></header>
      <main> {children} </main>
      <footer> <Footer/> </footer>
    </>
  );
}

export default Layout;
