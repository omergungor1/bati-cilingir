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
                                    Bursa Emek Acil Çilingir | 7/24 Hızlı, Ekonomik ve Güvenilir Çilingir
                                </Typography>
                                <Typography className="mb-1 w-full font-normal !text-gray-800">
                                    <b>Bursa Emek Çilingir Anahtarcı</b> olarak güvenilir ve uygun fiyatlı çözümler sunuyoruz. <b>0542 691 01 57</b> numaramızdan bize 7/24 ulaşabilir ve Bursa’nın her bölgesine 15 dakika içinde hizmet alabilirsiniz.
                                    <br /><br />
                                    <b>Bursa Emek Çilingir Anahtarcı</b> ekibi, size en yakın çilingir desteğini anında sağlıyor. Oto çilingir ve kapı açma ihtiyaçlarınızda hızlı ve profesyonel çözümler sunmaktayız.
                                    <br /><br />
                                    Tecrübeli ekibimiz ve modern ekipmanlarımızla, <b>Bursa Emek Çilingir Anahtarcı</b> olarak oto çilingir, kapı açma ve anahtar çoğaltma hizmetlerinde Bursa genelinde en hızlı ve etkili hizmeti vermekteyiz.
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