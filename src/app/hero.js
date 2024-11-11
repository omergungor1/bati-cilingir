"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";
import { Phone } from "lucide-react"

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10 pt-20" id="anasayfa">
      <Image
        width={1200}
        height={1200}
        src="/image/mainphoto.png"
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
      />
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl"
            >
              Bursa Çilingir Hizmetleri
            </Typography>
            <h1 variant="lead" className="mb-10 mt-6 !text-gray-900 text-xl">Bursa Batı Çilingir olarak 7/24 acil çilingir hizmeti sunuyoruz. <span className=" font-bold">0542 691 01 57</span> numaralı telefondan bize ulaşarak, Bursa&apos;nın her noktasına sadece 15 dakikada kapınızda olacağız.</h1>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <a href="tel:05426910157" className="bg-[#f26419] rounded-lg px-5 py-3 text-white flex gap-2 items-center animate-pulse">
                <Phone size={24} />
                Hemen Ara
              </a>
            </div>

            <Image
              width={1024}
              height={200}
              className="opacity-90 hidden md:block"
              src="/image/payments.webp"
              alt="Bursa çilingir hizmetleri ödeme yöntemleri"
            />

          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
