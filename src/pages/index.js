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
      <div className="flex gap-[20px]">
        <Card
          img="./card-image.png"
          title="Life Lessons with Katie Zaferes"
          rating="4.0"
          reviewCount="(6)"
          price="(136)"
          country="New York"
        />
        <Card
          img="./card-image.png"
          title="Life Lessons with Katie Zaferes"
          rating="5.0"
          reviewCount="(7)"
          price="(136)"
          country="New York"
        />
        <Card
          img="./card-image.png"
          title="Life Lessons with Katie Zaferes"
          rating="3.0"
          reviewCount="(6)"
          price="(136)"
          country="New City Nag"
        />
        <Card
          img="./card-image.png"
          title="Life Lessons with Katie Zaferes"
          rating="4.3"
          reviewCount="(100)"
          price="(200)"
          country="mali"
        />
      </div>
    </>
  );
}
