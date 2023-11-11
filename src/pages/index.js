import { Inter } from "next/font/google";
import Hero from "./hero";
import Navbar from "./navabr";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
