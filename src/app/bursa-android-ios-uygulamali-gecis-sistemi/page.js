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
                                    src={"/image/blogs/5.png"}
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
                                    Bursa Android ve iOS Uygulamalı Geçiş Sistemi | Akıllı Kontrol
                                </Typography>
                                <Typography className="mb-1 w-full font-normal !text-gray-500">
                                    Mobil uygulamalarla entegre çalışan akıllı geçiş sistemleri, güvenliği ve pratikliği bir arada sunarak geçiş kontrollerini daha yenilikçi bir hale getiriyor. Android ve iOS uyumlu bu sistemler sayesinde kullanıcılar, telefonlarıyla kapı, otopark veya bina girişlerini uzaktan kolayca kontrol edebiliyor. Bursa’da sunduğumuz bu çözümler, apartman, site ve iş yerleri gibi yoğun trafiğe sahip alanlarda hem zaman kazandırıyor hem de güvenliği artırıyor.
                                    <br /><br />
                                    Uygulama destekli geçiş sistemleri, anahtar taşıma zorunluluğunu ortadan kaldırarak yetkililere uzaktan erişim imkanı tanır ve geçiş işlemlerini çok daha kolay hale getirir. Kurulumu hızlı, kullanımı ise son derece basit olan bu sistemler, mobil cihazlarla uyumluluğu sayesinde kullanıcı dostu bir deneyim sunar. Bursa’da güvenlik ihtiyaçlarınıza modern ve pratik bir çözüm arıyorsanız, Android ve iOS uyumlu bu akıllı geçiş sistemleri ideal bir seçenek olacaktır.</Typography>
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