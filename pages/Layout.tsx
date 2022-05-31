import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Layout({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <NavBar />
      <div className="text-zinc-900">{children}</div>
      <Footer />
    </div>
  );
}
