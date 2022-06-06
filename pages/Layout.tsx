import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Layout({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  return (
    <div className="flex flex-col justify-between">
      <NavBar />
      <div className="text-zinc-900 min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
