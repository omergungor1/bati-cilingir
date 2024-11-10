"use client";

import React from "react";
import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import EventCard from "@/components/event-card";

const EVENTS = [
  {
    img: "/image/blogs/2.png",
    title: "Bursa Kartlı Sistem Kurulumu | Güvenli Geçiş Çözümleri",
    desc: "Bursa genelinde güvenli ve hızlı geçişler için kartlı sistem kurulum hizmeti sunuyoruz. Elektrik kesintilerinde bile 3 gün boyunca çalışan sistemlerle, mekanlarınıza yüksek güvenlik sağlar.",
    buttonLabel: "Detaylı Bilgi",
  },
  {
    img: "/image/blogs/3.png",
    title: "Bursa Parmak İzi ile Geçiş Sistemi Kurulumu | Yüksek Güvenlik",
    desc: "Bursa Nilüfer ve çevresindeki mekanlar için parmak izi ile geçiş sistemleri kuruyoruz. Kişiye özel erişim çözümleriyle, güvenliğinizi üst seviyeye çıkarıyoruz.",
    buttonLabel: "Detaylı Bilgi",
  },
  {
    img: "/image/blogs/4.png",
    title: "Bursa Otomatik Otopark Geçiş Sistemi | Hızlı ve Kolay Erişim",
    desc: "Bursa&apos;da otopark yönetimini kolaylaştıran otomatik geçiş sistemleri kuruyoruz. Araçlarınız için hızlı, güvenli ve pratik bir geçiş sağlıyoruz.",
    buttonLabel: "Detaylı Bilgi",
  },
  {
    img: "/image/blogs/10.png",
    title: "Bursa Otomatik Bahçe Kapı Sistemi Kurulumu | Konforlu Geçiş",
    desc: "Bursa&apos;daki ev ve iş yerleri için otomatik bahçe kapı sistemleri sunuyoruz. Kolay erişim ve güvenlik sağlamak için modern çözümlerle hizmet veriyoruz.",
    buttonLabel: "Detaylı Bilgi",
  },
  {
    img: "/image/blogs/5.png",
    title: "Bursa Android ve iOS Uygulamalı Geçiş Sistemi | Akıllı Kontrol",
    desc: "Bursa&apos;da mobil cihazlarınızla kontrol edebileceğiniz geçiş sistemleri kuruyoruz. Android ve iOS uygulamaları ile güvenli erişim sağlar, kontrolü cebinizde tutarsınız.",
    buttonLabel: "Detaylı Bilgi",
  },
  {
    img: "/image/blogs/10.png",
    title: "Bursa Çilingir Hizmetleri | 7/24 Hızlı ve Güvenilir Çözüm",
    desc: "Bursa Nilüfer&apos;den Yıldırım&apos;a kadar 7/24 çilingir hizmeti sunuyoruz. Kapı açma, anahtar değişimi ve acil müdahalelerde en hızlı çözümleri sağlıyoruz.",
    buttonLabel: "Detaylı Bilgi",
  },
  {
    img: "/image/blogs/9.png",
    title: "Bursa Kumanda Çoğaltma Hizmeti | Kartlı Sistemlerde Yedek Kumanda",
    desc: "Bursa&apos;da kartlı sistemler için kumanda çoğaltma hizmeti sunuyoruz. Arızalanan veya kaybolan kumandalarınızı en hızlı şekilde yenisiyle değiştiriyoruz.",
    buttonLabel: "Detaylı Bilgi",
  },
  {
    img: "/image/blogs/6.png",
    title: "Bursa Çelik Kasa Açma Hizmeti | Profesyonel Kasa Açma Çözümleri",
    desc: "Bursa&apos;da çelik kasa açma hizmeti sunuyoruz. En güvenli ve etkili yöntemlerle, sıkışan veya kaybolan anahtarlarınızı açıyoruz.",
    buttonLabel: "Detaylı Bilgi",
  },
  {
    img: "/image/blogs/7.png",
    title: "Bursa Araç Kapısı Açma Hizmeti | Oto Çilingir Çözümleri",
    desc: "Bursa&apos;da araç kapısı açma hizmeti sağlıyoruz. Aracınızın kapısı kilitlendiğinde hızlı ve profesyonel bir çözüm için bizlere ulaşabilirsiniz.",
    buttonLabel: "Detaylı Bilgi",
  },
  {
    img: "/image/blogs/6.png",
    title: "Bursa Kasa Açma Hizmeti | Güvenli ve Hızlı Kasa Çözümleri",
    desc: "Bursa&apos;da kasa açma hizmeti veriyoruz. Çelik kasalarınızda yaşadığınız problemleri hızlı ve güvenli bir şekilde çözüyoruz.",
    buttonLabel: "Detaylı Bilgi",
  }
];

export function Events() {
  return (
    <section className="py-20 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Tüm Hizmetlerimizi Keşfedin
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Yıllardır Bursa&apos;da çilingir hizmetlerinde en önde gelen firmalardan biri olarak hizmet veriyoruz. Danışmak, bilgi almak veya hizmet almak için bizimle iletişime geçebilirsiniz.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {EVENTS.map((props, idx) => (
          <EventCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}


export default Events;
