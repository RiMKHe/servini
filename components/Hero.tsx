"use client";

import Image from "next/image";
import Link from "next/link";
import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x " >
        <h1 className="hero__title">
        services you may looking for !
        </h1>

        <p className="hero__subtitle">
          from now solving your problems won't be a challenge for you !
        </p>


        <a href="/getstarted" >
          <button className="bg-primary-blue text-white rounded-full mt-10 onClick={() => window.location.href ='/getstarted'}">
            get started
          </button>
        </a>
       
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/presentation.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;