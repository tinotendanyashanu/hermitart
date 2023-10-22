import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-6">
      <p className="text-4xl font-bold text-center mb-7">
        {" "}
        Welcome to Next.js!
      </p>
      <div className="flex gap-6">
        <Button variant="outline">Click me</Button>
        <Button>Click me</Button>
      </div>
    </main>
  );
}
