"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import EventCard from "@/components/event-card";

const EVENTS = [
  {
    img: "/image/blogs/2.png",
    title: "Bursa Kartlı Sistem Kurulumu | Güvenli Geçiş Çözümleri",
    desc: "Bursa genelinde güvenli ve hızlı geçişler için kartlı sistem kurulum hizmeti sunuyoruz. Elektrik kesintilerinde bile 3 gün boyunca çalışan sistemlerle, mekanlarınıza yüksek güvenlik sağlar.",
    buttonLabel: "Detaylı Bilgi",
    url: "/bursa-kartli-sistem-kurulum",
    alt: "Bursa Kartlı Sistem Kurulumu"
  },
  {
    img: "/image/blogs/3.png",
    title: "Bursa Parmak İzi ile Geçiş Sistemi Kurulumu | Yüksek Güvenlik",
    desc: "Bursa Nilüfer ve çevresindeki mekanlar için parmak izi ile geçiş sistemleri kuruyoruz. Kişiye özel erişim çözümleriyle, güvenliğinizi üst seviyeye çıkarıyoruz.",
    buttonLabel: "Detaylı Bilgi",
    url: "/bursa-parmak-izi-gecis-sistemi-kurulum",
    alt: "Bursa Parmak İzi ile Geçiş Sistemi Kurulumu"
  },
  {
    img: "/image/blogs/4.png",
    title: "Bursa Otomatik Otopark Geçiş Sistemi | Hızlı ve Kolay Erişim",
    desc: "Bursa’da otopark yönetimini kolaylaştıran otomatik geçiş sistemleri kuruyoruz. Araçlarınız için hızlı, güvenli ve pratik bir geçiş sağlıyoruz.",
    buttonLabel: "Detaylı Bilgi",
    url: "/bursa-otomatik-otopark-gecis-sistemi",
    alt: "Bursa Otomatik Otopark Geçiş Sistemi"
  },
  {
    img: "/image/blogs/1.png",
    title: "Bursa Otomatik Bahçe Kapı Sistemi Kurulumu | Konforlu Geçiş",
    desc: "Bursa’daki ev ve iş yerleri için otomatik bahçe kapı sistemleri sunuyoruz. Kolay erişim ve güvenlik sağlamak için modern çözümlerle hizmet veriyoruz.",
    buttonLabel: "Detaylı Bilgi",
    url: "/bursa-otomatik-bahce-kapi-sistemi-kurulumu",
    alt: "Bursa Otomatik Bahçe Kapı Sistemi Kurulumu"
  },
  {
    img: "/image/blogs/5.png",
    title: "Bursa Android ve iOS Uygulamalı Geçiş Sistemi | Akıllı Kontrol",
    desc: "Bursa’da mobil cihazlarınızla kontrol edebileceğiniz geçiş sistemleri kuruyoruz. Android ve iOS uygulamaları ile güvenli erişim sağlar, kontrolü cebinizde tutarsınız.",
    buttonLabel: "Detaylı Bilgi",
    url: "/bursa-android-ios-uygulamali-gecis-sistemi",
    alt: "Bursa Android ve iOS Uygulamalı Geçiş Sistemi"
  },
  {
    img: "/image/blogs/10.png",
    title: "Bursa Çilingir Hizmetleri | 7/24 Hızlı ve Güvenilir Çözüm",
    desc: "Bursa Nilüfer’den Yıldırım’a kadar 7/24 çilingir hizmeti sunuyoruz. Kapı açma, anahtar değişimi ve acil müdahalelerde en hızlı çözümleri sağlıyoruz.",
    buttonLabel: "Detaylı Bilgi",
    url: "/bursa-cilingir-hizmetleri",
    alt: "Bursa Çilingir Hizmetleri"
  },
  {
    img: "/image/blogs/9.png",
    title: "Bursa Kumanda Çoğaltma Hizmeti | Kartlı Sistemlerde Yedek Kumanda",
    desc: "Bursa’da otomatik geçiş sistemleri için uzaktan kumanda ve çip çoğaltma hizmeti sunuyoruz; arızalanan veya kaybolan kartlı sistem kumandalarınızı hızlı ve güvenilir şekilde yeniliyoruz.",
    buttonLabel: "Detaylı Bilgi",
    url: "/bursa-kumanda-cogaltma-hizmeti",
    alt: "Bursa Kumanda Çoğaltma Hizmeti"
  },
  {
    img: "/image/blogs/6.png",
    title: "Bursa Çelik Kasa Açma Hizmeti | Profesyonel Kasa Açma Çözümleri",
    desc: "Bursa’da çelik kasalarınızla ilgili tüm sorunları hızlı, güvenilir ve etkili yöntemlerle çözüyoruz; sıkışan veya kaybolan anahtarlar için güvenli kasa açma hizmeti sunuyoruz.",
    buttonLabel: "Detaylı Bilgi",
    url: "/bursa-celik-kasa-acma-hizmeti",
    alt: "Bursa Çelik Kasa Açma Hizmeti"
  },
  {
    img: "/image/blogs/7.png",
    title: "Bursa Araç Kapısı Açma Hizmeti | Oto Çilingir Çözümleri",
    desc: "Bursa’da araç kapısı açma hizmeti sağlıyoruz. Aracınızın kapısı kilitlendiğinde hızlı ve profesyonel bir çözüm için bizlere ulaşabilirsiniz.",
    buttonLabel: "Detaylı Bilgi",
    url: "/bursa-arac-kapisi-acma-hizmeti",
    alt: "Bursa Araç Kapısı Açma Hizmeti"
  },
  {
    img: "/image/blogs/8.png",
    title: "Akıllı Geçiş Sistemleri ve İşletmelere Faydaları",
    desc: "Akıllı geçiş sistemleri ile işletmelere güvenli, pratik ve kontrollü giriş-çıkış çözümleri sunarak operasyonel verimliliği artırıyoruz.",
    buttonLabel: "Detaylı Bilgi",
    url: "/bursa-akilli-gecis-sistemleri",
    alt: "Akıllı Geçiş Sistemleri ve İşletmelere Faydaları"
  }
];

export function Events() {
  return (
    <section className="py-10 px-8">
      <div className="container mx-auto mb-10 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Tüm Hizmetlerimizi Keşfedin
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12" >
          Yıllardır Bursa’da çilingir hizmetlerinde en önde gelen firmalardan biri olarak hizmet veriyoruz. Danışmak, bilgi almak veya hizmet almak için bizimle iletişime geçebilirsiniz.
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
