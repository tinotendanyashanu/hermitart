import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ModeToggle } from "@/components/modeToggle";
import Page from "@/components/Button";
import Nav from "@/components/Sections/Nav";
import Hero from "@/components/Sections/Hero";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <Hero />
    </main>
  );
}
