import { Inter } from "next/font/google";
import Hero from "./hero";
import Navbar from "./navabr";
import Card from "./card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
    </>
  );
}
