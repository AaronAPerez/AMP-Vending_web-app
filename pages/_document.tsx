import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Navbar/>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
      <Footer/>
    </Html>
  );
}
