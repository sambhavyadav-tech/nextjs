"use client";
import Image from "next/image";
import "./globals.css";
import Login from "../app/login/page";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <main>
        <Login />
      </main>
    </>
  );
}
