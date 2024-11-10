"use client";
import React from "react";
import FeedbackCard from "@/components/feedback-card";
import { Typography } from "@material-tailwind/react";


const FEEDBACKS = [
  {
    feedback:
      "Kapıda kalınca hemen aradım. Çok hızlı geldiler ve kapıyı açtılar. İyiki varsınız.",
    client: "Ayşe Yılmaz",
    title: "Nilüfer çilingir Hizmeti",
    img: "/image/kadın-profil.png",
  },
  {
    feedback:
      "Araç anahtarım içeride kaldı. Kısa sürede gelip kapıyı açtılar. Yardımlarınız için teşekkürler.",
    client: "Mehmet Kaya",
    title: "Araba Kapısı Açma Hizmeti",
    img: "/image/erkek-profil.png",
  },
  {
    feedback:
      "Bahçe kapıma anahtarsız geçiş sistemi kurulumu yapıldı ve çok memnun kaldım. Teşekkürler.",
    client: "Fatma Demir",
    title: "Kartlı Sistem Kurulumu",
    img: "/image/kadın-profil.png",
  },
];

export function StudentsFeedback() {
  return (
    <section className="px-8 py-36">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center w-full">
          <Typography variant="h2" color="blue-gray" className="mb-2">
            Müşterilerimiz Ne Diyor?
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl lg:text-center !text-gray-500"
          >
            Müşteri memnuniyeti bizim için her şeyden önemli. İşte müşterilerimizin bize olan güvenini ve memnuniyetini ifade eden geri bildirimler.
          </Typography>
        </div>
        <div className="grid gap-x-8 gap-y-12 lg:px-32 grid-cols-1 md:grid-cols-3">
          {FEEDBACKS.map((props, key) => (
            <FeedbackCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default StudentsFeedback;
