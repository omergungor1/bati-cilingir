"use client";

import React from "react";
import {
  Button,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";
import { Lock, Fingerprint, Car, Vault } from "lucide-react";

import CategoryCard from "@/components/category-card";


const CATEGORIES = [
  {
    img: "/image/blogs/blog-3.png",
    icon: Lock,
    title: "Akıllı Geçiş Sistemi Kurulumu",
    desc: "Akıllı geçiş sistemleri, güvenlik ve teknolojiyi birleştirerek modern bir çözüm sunar. Bu hizmet, özellikle güvenlik bilincine sahip bireyler ve işletmeler için oldukça çekici olabilir.",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    icon: Fingerprint,
    title: "Parmak İzi ile Geçiş Sistemi Kurulumu:",
    desc: "Parmak iziyle geçiş, güvenlik açısından oldukça yüksek bir tercih sebebi olup, insanların teknolojiye olan ilgisi ve güvenlik ihtiyacı ile paralel bir hizmettir.",
  },
  {
    img: "/image/blogs/blog-10.jpeg",
    icon: Car,
    title: "Otomatik Otopark Geçiş Sistemi Kurulumu",
    desc: "Otopark geçiş sistemleri, özellikle büyük binalar ve otoparklar için büyük kolaylık sağlar. Bu hizmet, büyük alanlara hitap eden işletmelerin ilgisini çekebilir.",
  },
  {
    img: "/image/blogs/blog-13.png",
    icon: Vault,
    title: "Çelik Kasa Açma ve Kasa Açma Hizmetleri:",
    desc: "Kasa açma hizmetleri, hem bireyler hem de işletmeler için kritik bir hizmettir. Kişisel güvenlik ve değerli eşyaların korunması konusunda duyarlı olanlar için bu hizmet büyük bir talep görebilir.",
  },
];

export function CoursesCategories() {
  return (
    <section className="container mx-auto px-8 py-36 pt-72">
      <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3">
          Hizmetlerimiz
        </Typography>
        <Typography variant="lead" className="!text-gray-500 md:w-8/12 lg:w-6/12">
          Bursa'da yıllardır hizmet veren köklü bir çilingir firması olarak geniş hizmet yelpazemizle, Bursa'nın her noktasında hizmet veriyoruz. İhtiyaç halinde en kısa sürede yanınızdayız.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            <Typography color="white" className="text-xs font-bold opacity-50">
              Kapı açma, kasa açma, oto çilingir, kilit değişimi, kartlı geçiş sistemleri ve daha fazlası.
            </Typography>
            <Typography variant="h4" className="mt-9" color="white">
              Tüm Çilingir Hizmetleri
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal opacity-50"
            >
              Bursa'da çilingire ihtiyacınız varsa hemen bizimle iletişime geçin.
            </Typography>
            <a
              href="tel:5426910157"
            >
              <Button size="sm" color="white">Şimdi Ara</Button>
            </a>
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesCategories;