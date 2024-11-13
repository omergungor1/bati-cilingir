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
                                    Mobil uygulamalarla entegre çalışan geçiş sistemleri, güvenliği ve kolaylığı bir araya getirerek geçiş kontrollerini daha akıllı hale getiriyor. Android ve iOS destekli geçiş sistemleri sayesinde kullanıcılar, telefonlarını kullanarak kapı, otopark ya da bina girişlerini uzaktan kontrol edebiliyor. Bursa’da sunduğumuz bu akıllı geçiş çözümleri, özellikle apartman, site ve iş yerleri gibi yoğun trafiğe sahip mekanlarda hem zamandan tasarruf sağlıyor hem de güvenlik seviyesini yükseltiyor.
                                    <br /><br />
                                    Uygulama destekli bu geçiş sistemleri, anahtar taşıma zorunluluğunu ortadan kaldırdığı gibi, yetkili kişilere uzaktan erişim izni vererek geçişleri pratik hale getirir. Kurulumu kolay ve kullanımı son derece basit olan bu sistemler, mobil cihazlarla uyumlu yapısı sayesinde kullanıcı dostu bir çözüm sunar. Bursa'da güvenlik ihtiyaçlarınıza modern bir çözüm arıyorsanız, Android ve iOS uygulamalarıyla entegre geçiş sistemleri mükemmel bir seçenek olacaktır.
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