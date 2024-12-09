"use client";
import Image from "next/image";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Phone } from "lucide-react";
import Head from 'next/head';
// components
import { Navbar, Footer } from "@/components";

export default function Blog() {
    return (
        <div>
            <Head>
                <title>Bursa Gürsu Çilingir Anahtarcı | 7/24 Çilingir Hizmeti</title>
                <meta name="description" content="Bursa Gürsu Çilingir Anahtarcı, güvenilir ve uygun fiyatlı 7/24 çilingir hizmeti sunuyor. Kapı açma, oto çilingir, anahtar çoğaltma ve daha fazlası." />
                <meta name="keywords" content="Bursa çilingir, Gürsu çilingir, acil çilingir, oto çilingir, anahtar çoğaltma, kapı açma" />
                <meta property="og:title" content="Bursa Gürsu Çilingir Anahtarcı | 7/24 Çilingir Hizmeti" />
                <meta property="og:description" content="Bursa Gürsu Çilingir Anahtarcı ile güvenli, hızlı ve uygun fiyatlı çilingir hizmetleri. 7/24 kapı açma ve oto çilingir hizmeti." />
                <meta property="og:url" content="https://www.bursabaticilingir.com/bursa-gursu-cilingir-anahtarci" />
            </Head>
            <Navbar />
            <section className="px-8 py-40">
                <div className="container mx-auto">
                    <Card color="transparent" shadow={false} className="">
                        <CardBody className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4">
                            <div className="w-full xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full">
                                <Image
                                    width={768}
                                    height={768}
                                    src={"/image/blogs/cilingir.png"}
                                    alt={"Bursa Çilingirci"}
                                    className="w-full h-full scale-110 object-cover"
                                />
                            </div>
                            <div className="col-span-2 w-full">
                                <Typography
                                    variant="h3"
                                    color="blue-gray"
                                    className="mb-4 font-bold"
                                >
                                    Bursa Gürsu Acil Çilingir | 7/24 Hızlı, Ekonomik ve Güvenilir Çilingir
                                </Typography>
                                <Typography className="mb-1 w-full font-normal !text-gray-800">
                                    Bursa Gürsu Çilingir Anahtarcı: Hızlı ve Güvenilir Çilingir Hizmetleri
                                    Bursa’nın Gürsu ilçesinde sunduğumuz çilingir ve anahtarcı hizmetleri, güvenilirliği ve uygun fiyatlarıyla öne çıkmaktadır. Acil durumlarınızda, ev veya araç kapısı açma ihtiyaçlarınızda yanınızda olan ekibimiz, modern ekipmanlarla ve profesyonel bir yaklaşımla hizmet vermektedir. 0542 691 01 57 numaralı telefonumuzdan 7/24 bize ulaşabilir ve sadece 15 dakika içerisinde kapınıza ulaşmamızı sağlayabilirsiniz.
                                    <br /><br />
                                    Hızlı ve Profesyonel Çilingir Hizmetleri
                                    Bursa Gürsu bölgesindeki çilingir ekibimiz, ihtiyaçlarınıza en hızlı şekilde cevap verecek şekilde konumlanmıştır. Ev veya iş yerinizde kapınızın kilitli kalması ya da anahtarınızı kaybetmeniz gibi acil durumlarda, uzman ekibimiz güvenliği ön planda tutarak kapılarınızı açmaktadır. Kapınıza zarar vermeden ve profesyonel ekipman kullanarak gerçekleştirdiğimiz hizmetler, size hem zaman kazandırır hem de gönül rahatlığı sağlar.
                                    <br /><br />
                                    Oto Çilingir Hizmetleri<br />
                                    Araç kapısı açma işlemleri, dikkat ve uzmanlık gerektirir. Bursa Gürsu Çilingir Anahtarcı olarak, araç kapısı açma hizmetlerinde tecrübeli ekibimizle hizmet sunuyoruz. Aracınızın marka veya modeli ne olursa olsun, kapınıza veya kilidinize zarar vermeden araç içi erişiminizi en kısa sürede sağlıyoruz. Anahtarınızı aracın içinde unuttuğunuzda veya kaybettiğinizde, bizimle iletişime geçerek hızlı ve güvenilir bir çözüm alabilirsiniz.
                                    <br /><br />
                                    Modern ve Gelişmiş Ekipmanlarla Çalışıyoruz<br />
                                    Hizmet kalitemizin temelini, modern ekipmanlar ve profesyonel uzmanlık oluşturmaktadır. Bursa Gürsu Çilingir Anahtarcı olarak, yalnızca kapı açma işlemleri değil, aynı zamanda anahtar çoğaltma, kilit değişimi ve güvenlik sistemlerinin kurulumu gibi konularda da en iyi çözümleri sunuyoruz. İhtiyacınıza uygun olarak kartlı geçiş sistemleri ve diğer güvenlik çözümleri için de destek alabilirsiniz.
                                    <br /><br />
                                    Neden Bursa Gürsu Çilingir Anahtarcı?
                                    7/24 Hizmet: Günün her saatinde ulaşabileceğiniz ekibimiz, acil durumlarınızda yanınızda.
                                    Hızlı Erişim: Bursa’nın her noktasına 15 dakika gibi kısa bir sürede ulaşım sağlıyoruz.
                                    Uygun Fiyat: Kaliteli hizmeti bütçenizi zorlamadan sunuyoruz.
                                    Uzman Kadro: Tecrübeli ve profesyonel çilingirlerimizle güvenli çözümler sağlıyoruz.
                                    Geniş Hizmet Yelpazesi: Oto çilingir, kapı açma, anahtar çoğaltma ve daha fazlası.
                                    İhtiyacınız Olduğunda Yanınızdayız
                                    Ev kapınızı açamıyor musunuz? Aracınızın anahtarını mı kaybettiniz? Ya da iş yerinizin güvenlik sistemini yenilemek mi istiyorsunuz? Bursa Gürsu Çilingir Anahtarcı, tüm bu ihtiyaçlarınız için doğru adres! Sadece bir telefon kadar uzağınızdayız.
                                    <br /><br />
                                    Hızlı, güvenilir ve uygun fiyatlı çilingir hizmetlerimizden faydalanmak için 0542 691 01 57 numaramızdan bizimle iletişime geçin. Gürsu’da ve Bursa genelinde, kapınızın güvenliği bize emanet!
                                </Typography>

                                <div className="pt-4">
                                    <a href="tel:05426910157">
                                        <Button className="flex gap-2 items-center !bg-[#f26419]  px-10"><Phone size={18} />HEMEN ARA</Button>
                                    </a>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </section>
            <Footer />
        </div>
    );
}