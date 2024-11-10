"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { Phone } from "lucide-react";

export function FixedPlugin() {
  return (
<div className="flex flex-col justify-center">
<a href="https://www.material-tailwind.com" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-16 left-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <Phone color="blue" size={24} />
      </Button>
    </a>
<a href="https://www.material-tailwind.com" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 left-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <Phone color="blue" size={24} />
      </Button>
    </a>
</div>
  );
}
