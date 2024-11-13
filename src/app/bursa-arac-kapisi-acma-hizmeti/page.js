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
                                    src={"/image/blogs/7.png"}
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
                                    Bursa Araç Kapısı Açma Hizmeti | Oto Çilingir Çözümleri
                                </Typography>
                                <Typography className="mb-1 w-full font-normal !text-gray-500">
                                    Anahtarınızı aracın içinde unuttuğunuzda ya da anahtarınız kaybolduğunda, araç kapısı açma hizmetleri hızlı bir çözüm sunar. Bursa’da sunduğumuz bu hizmetle, aracınızın kapısını güvenli bir şekilde açarak hasar riskini minimuma indiriyoruz. Profesyonel ekipman ve deneyimle, araç kapısı açma işlemlerini marka ve model gözetmeksizin kısa sürede tamamlıyoruz.
                                    <br /><br />
                                    Acil durumlar için 7/24 Bursa araç kapısı açma hizmeti sağlayarak, yolda kaldığınızda ya da acil bir durumda size en hızlı şekilde ulaşıyoruz. Kilide veya kapıya zarar vermeden gerçekleştirdiğimiz işlemler, hem güvenlik hem de konfor sunar. Aracınızın güvenliği için uzman bir çözüme ihtiyaç duyduğunuzda, profesyonel çilingir desteğimizle yanınızdayız.
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