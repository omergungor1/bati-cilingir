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
                                    src={"/image/blogs/6.png"}
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
                                    Bursa Çelik Kasa Açma Hizmeti | Profesyonel Kasa Açma Çözümleri
                                </Typography>
                                <Typography className="mb-1 w-full font-normal !text-gray-500">
                                    Çelik kasalar, değerli eşyalar ve belgeler için en yüksek güvenliği sağlar, ancak doğru güvenlik önlemleri alındığında bu koruma daha da etkili hale gelir. İlk adım, kasayı sabit ve gözden uzak bir yere yerleştirmektir; mümkünse, duvara veya zemine sabitlemek ek güvenlik sağlar. Ayrıca, düzenli olarak kasa kilitlerini kontrol etmek ve gerektiğinde güncellemeler yapmak önemlidir.
                                    <br /><br />
                                    Bursa’da çelik kasa açma ve kilit yenileme gibi çilingir hizmetleri sunarak, güvenliğinizi en üst seviyede tutmanıza destek oluyoruz. Kasanızla ilgili acil bir durum yaşarsanız ya da kilit sistemi ile ilgili yardıma ihtiyaç duyarsanız, 7/24 hizmetimizle hızlı ve güvenilir bir destek sağlıyoruz. Çelik kasalarınızın güvenliği için uzman desteğine ihtiyaç duyduğunuz her an yanınızdayız.
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