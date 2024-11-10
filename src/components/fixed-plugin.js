"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <div className="flex flex-col justify-center">
      {/* Phone*/}
      <a href="tel:5426910157" target="_blank">
        <Image src={'/image/call.png'} height={36} width={36} className="rounded-full animate-bounce !fixed bottom-16 left-4 flex items-center" />
      </a>
      {/* Whatsapp*/}
      <a href="https://wa.me/905426910157" target="_blank">
        <Image src={'/image/whatsapp.png'} height={36} width={36} className="rounded-full animate-pulse !fixed bottom-4 left-4 flex items-center" />
      </a>
    </div>
  );
}
