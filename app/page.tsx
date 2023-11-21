import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ModeToggle } from "@/components/modeToggle";
import Page from "@/components/Button";
import Nav from "@/components/Sections/Nav";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        {/* <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        /> */}
      </div>
      <nav>
        <ModeToggle />
      </nav>
      <p className="text-4xl font-bold text-center mb-7">
        {" "}
        Welcome to Next.js!
      </p>

      <div className="flex gap-6">
        <Button variant="outline">Click me</Button>
        <Button>Click me</Button>
        <Page />
      </div>
    </main>
  );
}
