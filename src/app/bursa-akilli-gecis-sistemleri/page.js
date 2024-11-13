"use client";
import Image from "next/image";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Phone } from "lucide-react";
// components
import { Navbar, Footer } from "@/components";

export default function Blog() {
    return (
        <div>
            <Navbar />
            <section className="px-8 py-40">
                <div className="container mx-auto">
                    <Card color="transparent" shadow={false} className="">
                        <CardBody className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4">
                            <div className="w-full xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full">
                                <Image
                                    width={768}
                                    height={768}
                                    src={'/image/blogs/8.png'}
                                    alt={alt}
                                    className="w-full h-full scale-110 object-cover"
                                />
                            </div>
                            <div className="col-span-2 w-full">
                                <Typography
                                    variant="h3"
                                    color="blue-gray"
                                    className="mb-4 font-bold"
                                >
                                    Akıllı Geçiş Sistemleri ve İşletmelere Faydaları
                                </Typography>
                                <Typography className="mb-1 w-full font-normal !text-gray-500">
                                    Günümüzde işletmeler, hem çalışanlarının hem de mülklerinin güvenliğini sağlamak için akıllı geçiş sistemlerini tercih ediyor. Akıllı geçiş sistemleri, kartlı ve parmak izi gibi yüksek güvenlikli teknolojilerle, klasik anahtar-kilit sistemlerinin ötesinde bir güvenlik sağlıyor. Bursa’da akıllı geçiş sistemi kurulumu yapan bir çilingir olarak, işletmelere güvenlik ihtiyaçlarını en iyi şekilde karşılayacak çözümler sunuyoruz.
                                    <br /><br />
                                    Kartlı geçiş sistemleri Bursa’daki pek çok iş yeri tarafından tercih edilirken, parmak izi geçiş sistemi de sıklıkla tercih edilen bir diğer teknolojik çözüm. Bu sistemler, güvenliğin yanı sıra personel takibini kolaylaştırarak giriş çıkış kontrollerini daha düzenli hale getirir. Özellikle Osmangazi, Nilüfer ve Mudanya gibi iş merkezlerinin yoğun olduğu bölgelerde tercih edilen bu akıllı sistemler, işletmelere güvenlik, hız ve verimlilik kazandırır.
                                    <br /><br />
                                    Akıllı geçiş sistemleri, sadece işletmeler için değil, aynı zamanda evlerde de güvenliği artırmak isteyenler için büyük bir avantaj sağlar. Bursa güvenli geçiş sistemleri hizmetlerimiz, hızlı kurulum ve kesintisiz destekle, güvenlik ve kolaylığı bir araya getiriyor.
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