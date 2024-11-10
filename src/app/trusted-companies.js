"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const COMPANIES = [
  {
    url: "/image/bft.webp",
    alt: "Bft",
  },
  {
    url: "/image/nice.png",
    alt: "Nice",
  },
];

function TrustedCompany() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          <Typography variant="h5" className="mb-4 uppercase !text-gray-500">
            ÇÖZÜM ORTAKLARIMIZ
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Güvenilir Markalar
          </Typography>

          <Typography variant="h6" color="blue-gray" className="text-[#2f4858] mb-12">
            Müşterilerimize en kaliteli hizmeti sunmak için güvenilir ve sektöründe lider markaların ürünlerini tercih ediyoruz. Çözüm ortaklarımızla kurduğumuz güçlü iş birliği sayesinde, güvenlik ve dayanıklılığı ön planda tutarak her projede en iyi sonuçları sağlamayı hedefliyoruz.
          </Typography>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {COMPANIES.map(({ url, alt }, key) => (
            <Image
              width={768}
              height={768}
              key={key}
              src={url}
              alt={alt}
              className="w-40 grayscale opacity-75 p-2"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedCompany;
