import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Layout({ children }: { children: any }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
