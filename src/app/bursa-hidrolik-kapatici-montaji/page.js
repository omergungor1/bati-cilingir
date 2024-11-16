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
                                    src={"/image/blogs/12.jpg"}
                                    alt={"bursa çilingir"}
                                    className="w-full h-full scale-110 object-cover"
                                />
                            </div>
                            <div className="col-span-2 w-full">
                                <Typography
                                    variant="h3"
                                    color="blue-gray"
                                    className="mb-4 font-bold"
                                >
                                    Kapı hidrolik kapatıcı montajı | Bursa Kapı Hidrolik Kapatıcı Montajı
                                </Typography>
                                <Typography className="mb-1 w-full font-normal !text-gray-500">
                                    Kapılarınızın sessiz ve güvenli bir şekilde kapanmasını sağlamak için hidrolik kapatıcılar, günümüzde hem ev hem de iş yerlerinde tercih edilen pratik ve estetik bir çözümdür. Bursa’da hidrolik kapatıcı montajı hizmeti sunarak, kapılarınızın kullanımını daha konforlu hale getiriyoruz. Yüksek kaliteli malzemeler ve profesyonel işçilikle sunduğumuz bu hizmet, özellikle yoğun kullanılan kapılarda uzun ömürlü bir çözüm sunar.
                                    <br /><br />
                                    Hidrolik kapatıcılar, kapılarınızın çarparak kapanmasını önler, böylece hem gürültüyü azaltır hem de kapı ve menteşe ömrünü uzatır. Bursa’nın Nilüfer, Osmangazi ve Yıldırım gibi yoğun bölgelerinde, işletmelerin kapı güvenliğini artırmak için bu sistemi tercih ettiğini gözlemliyoruz. Evler için de uygun olan hidrolik kapatıcılar, küçük çocuklu ailelerin güvenliğini sağlamak için ideal bir çözüm sunar.
                                    <br /><br />
                                    Kapılarınız için en uygun hidrolik kapatıcı seçeneklerini ve montaj sürecini öğrenmek istiyorsanız, bize ulaşabilirsiniz. Bursa hidrolik kapı kapatıcı montajı hizmetimizle, hem estetik hem de fonksiyonel bir kapı çözümüne sahip olun. Daha fazla bilgi almak ve hızlı kurulum hizmetimizden yararlanmak için <span className="font-bold">hemen arayın</span>!
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