import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className=" flex gap-10 justify-between items-center max-h-scree mx-20 my-40">
      <div className="items-center justify-center text-center">
        <h1 className=" text-9xl mb-6 "> Featured Art works</h1>
        <h4 className=" text-xl">
          Welcome to the canvas of the imagination, where art is not just a{" "}
          <br />
          collection of colors and shapes, but a journey through the human
          experience.
        </h4>
        <button className="bg-black text-white px-8 py-2 rounded-lg mt-10">
          {" "}
          Shop Now &rarr;
        </button>
      </div>
      <div className="items-center">
        <Image src="/home.png" alt={"Home"} width={700} height={440}></Image>
      </div>
    </div>
  );
}
