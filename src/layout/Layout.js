import React from "react";
import Navigation from "../components/Navigation";

function Layout({ children }) {
  return (
    <>
      <header><Navigation/></header>
      <main> {children} </main>
      <footer>footer</footer>
    </>
  );
}

export default Layout;
