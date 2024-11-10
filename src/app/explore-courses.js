"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const COURSES = [

  // img: "/image/blogs/blog4.svg",
  // {
  //   img: "/image/blogs/blog4.svg",
  //   tag: "",
  //   title: "",
  //   desc: "",
  // },
  {
    img: "/image/blogs/blog4.svg",
    tag: "kartli-sistem-kurulumu",
    title: "Bursa Kartlı Sistem Kurulumu | Güvenli Geçiş Çözümleri",
    desc: "Bursa genelinde güvenli ve hızlı geçişler için kartlı sistem kurulum hizmeti sunuyoruz. Elektrik kesintilerinde bile 3 gün boyunca çalışan sistemlerle, mekanlarınıza yüksek güvenlik sağlar."
  },
  {
    img: "/image/blogs/blog4.svg",
    tag: "parmak-izi-ile-gecis-sistemi",
    title: "Bursa Parmak İzi ile Geçiş Sistemi Kurulumu | Yüksek Güvenlik",
    desc: "Bursa Nilüfer ve çevresindeki mekanlar için parmak izi ile geçiş sistemleri kuruyoruz. Kişiye özel erişim çözümleriyle, güvenliğinizi üst seviyeye çıkarıyoruz."
  },
  {
    img: "/image/blogs/blog4.svg",
    tag: "otomatik-otopark-gecis",
    title: "Bursa Otomatik Otopark Geçiş Sistemi | Hızlı ve Kolay Erişim",
    desc: "Bursa&apos;da otopark yönetimini kolaylaştıran otomatik geçiş sistemleri kuruyoruz. Araçlarınız için hızlı, güvenli ve pratik bir geçiş sağlıyoruz."
  },
  {
    img: "/image/blogs/blog4.svg",
    tag: "otomatik-bahce-kapi-sistemi",
    title: "Bursa Otomatik Bahçe Kapı Sistemi Kurulumu | Konforlu Geçiş",
    desc: "Bursa&apos;daki ev ve iş yerleri için otomatik bahçe kapı sistemleri sunuyoruz. Kolay erişim ve güvenlik sağlamak için modern çözümlerle hizmet veriyoruz."
  },
  {
    img: "/image/blogs/blog4.svg",
    tag: "android-ios-uygulamali-gecis",
    title: "Bursa Android ve iOS Uygulamalı Geçiş Sistemi | Akıllı Kontrol",
    desc: "Bursa&apos;da mobil cihazlarınızla kontrol edebileceğiniz geçiş sistemleri kuruyoruz. Android ve iOS uygulamaları ile güvenli erişim sağlar, kontrolü cebinizde tutarsınız."
  },
  {
    img: "/image/blogs/blog4.svg",
    tag: "tum-cilingir-hizmetleri",
    title: "Bursa Çilingir Hizmetleri | 7/24 Hızlı ve Güvenilir Çözüm",
    desc: "Bursa Nilüfer&apos;den Yıldırım&apos;a kadar 7/24 çilingir hizmeti sunuyoruz. Kapı açma, anahtar değişimi ve acil müdahalelerde en hızlı çözümleri sağlıyoruz."
  },
  {
    img: "/image/blogs/blog4.svg",
    tag: "kumanda-cozaltma-hizmeti",
    title: "Bursa Kumanda Çoğaltma Hizmeti | Kartlı Sistemlerde Yedek Kumanda",
    desc: "Bursa&apos;da kartlı sistemler için kumanda çoğaltma hizmeti sunuyoruz. Arızalanan veya kaybolan kumandalarınızı en hızlı şekilde yenisiyle değiştiriyoruz."
  },
  {
    img: "/image/blogs/blog4.svg",
    tag: "celik-kasa-acma",
    title: "Bursa Çelik Kasa Açma Hizmeti | Profesyonel Kasa Açma Çözümleri",
    desc: "Bursa&apos;da çelik kasa açma hizmeti sunuyoruz. En güvenli ve etkili yöntemlerle, sıkışan veya kaybolan anahtarlarınızı açıyoruz."
  },
  {
    img: "/image/blogs/blog4.svg",
    tag: "arac-kapisi-acma",
    title: "Bursa Araç Kapısı Açma Hizmeti | Oto Çilingir Çözümleri",
    desc: "Bursa&apos;da araç kapısı açma hizmeti sağlıyoruz. Aracınızın kapısı kilitlendiğinde hızlı ve profesyonel bir çözüm için bizlere ulaşabilirsiniz."
  },
  {
    img: "/image/blogs/blog4.svg",
    tag: "kasa-acma-hizmeti",
    title: "Bursa Kasa Açma Hizmeti | Güvenli ve Hızlı Kasa Çözümleri",
    desc: "Bursa&apos;da kasa açma hizmeti veriyoruz. Çelik kasalarınızda yaşadığınız problemleri hızlı ve güvenli bir şekilde çözüyoruz."
  }
];

export function ExploreCourses() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-24 text-center">
        <Typography variant="h2" color="blue-gray">
          Tüm Hizmetlerimizi Keşfedin
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          Yıllardır Bursa&apos;da çilingir hizmetlerinde en önde gelen firmalardan biri olarak hizmet veriyoruz. Danışmak, bilgi almak veya hizmet almak için bizimle iletişime geçebilirsiniz.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default ExploreCourses;
