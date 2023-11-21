import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 justify-between items-center mx-5 lg:mx-20 my-32  lg:my-40">
      <div className="text-center">
        <h1 className="text-3xl lg:text-9xl mb-6">Featured Artworks</h1>
        <h4 className="text-sm lg:text-xl">
          Welcome to the canvas of the imagination, where art is not just a
          <br />
          collection of colors and shapes, but a journey through the human
          experience.
        </h4>
        <Button className=" px-4 lg:px-8 py-2 rounded-lg mt-5 lg:mt-10">
          Shop Now &rarr;
        </Button>
      </div>
      <div className="flex justify-center">
        <Image
          src="/home.png"
          alt="Home"
          width={700}
          height={440}
          layout="responsive"
        />
      </div>
    </div>
  );
}
