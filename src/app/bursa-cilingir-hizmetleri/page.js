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
                                    src={"/image/blogs/10.png"}
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
                                    Bursa Çilingir Hizmetleri | 7/24 Hızlı ve Güvenilir Çözüm
                                </Typography>
                                <Typography className="mb-1 w-full font-normal !text-gray-500">
                                    Bursa gibi büyük bir şehirde, çilingir hizmetleri günlük hayatın vazgeçilmez bir parçasıdır. Ev, iş yeri veya araçlarla ilgili beklenmedik sorunlar profesyonel bir çilingir desteği gerektirir. Hem acil durumlarda hem de güvenlik sistemlerinin kurulumunda uzman bir çilingir, ihtiyaçlarınıza hızlı ve güvenli çözümler sunar.
                                    <br /><br />
                                    Bursa genelinde sunduğumuz çilingir hizmetleri, alanında uzman ekipler tarafından özenle gerçekleştirilir. Kartlı geçiş sistemleri kurulumu, çelik kasa açma ve akıllı güvenlik sistemlerinin montajı gibi profesyonellik isteyen işlemleri dikkatle yapıyoruz. Gürsu, Yıldırım ve Nilüfer gibi farklı bölgelerde, ev anahtarı kaybı veya araç kapısı açma gibi acil durumlarda hızlı müdahalemizle yanınızdayız.
                                    <br /><br />
                                    Profesyonel çilingir hizmetleri, pratik çözümler sağlamanın yanı sıra, uzun vadede daha güvenli bir yaşam sunar. Kartlı geçiş sistemleri veya parmak iziyle çalışan güvenlik sistemlerinin kurulumunda uzman ekiplerimiz doğru malzeme ve teknikle çalışarak, sistemlerin verimli ve sorunsuz çalışmasını sağlar. Ayrıca, düzenli bakım ve onarım hizmetleriyle güvenlik sistemlerinizin ömrünü uzatıyoruz. Tüm çilingir ihtiyaçlarınız için uzman desteği alarak, güvenliğinizi ve konforunuzu artırabilirsiniz.
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