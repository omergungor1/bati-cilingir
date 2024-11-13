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
                                    Bursa gibi büyük bir şehirde, çilingir hizmetleri hayatın her alanında önemli bir ihtiyaçtır. Ev, iş yeri, araç ve güvenlik sistemleriyle ilgili sorunlar aniden ortaya çıkabilir ve bu durum, doğru çözüm için profesyonel bir çilingir desteği gerektirir. Hem acil durumlar hem de güvenlik sistemlerinin kurulumu için uzman bir çilingir, işleri hızlı ve güvenli bir şekilde çözmenize yardımcı olur.
                                    <br /><br />
                                    Bursa'da sunduğumuz tüm çilingir hizmetleri, uzman ekipler tarafından yapılmaktadır. Kartlı geçiş sistemlerinin kurulumu, çelik kasa açma, akıllı güvenlik sistemlerinin montajı gibi işlemler, profesyonellik gerektiren ve dikkatlice yapılması gereken hizmetlerdir. Özellikle acil çilingir hizmetlerinde, uzman kişiler zamanında müdahale ederek, güvenliği riske atmadan işlerinizi çözer. Örneğin, Gürsu, Yıldırım veya Nilüfer gibi farklı bölgelerde, araç kapısı açma ya da ev anahtarı kaybı gibi durumlarla karşılaştığınızda, profesyonel bir çilingir hemen çözüm sunabilir.
                                    <br /><br />
                                    Profesyonel çilingir hizmetleri, sadece pratik çözümler sunmakla kalmaz, aynı zamanda uzun vadede daha güvenli bir yaşam alanı sağlar. Kartlı sistemlerinizi kurarken ya da parmak izi geçiş sistemlerine geçiş yaparken, uzman ekipler doğru malzeme ve teknikle kurulum yaparak, sistemlerin verimli çalışmasını sağlar. Ayrıca, bakım ve onarım hizmetleri ile güvenlik sistemlerinizin ömrünü uzatır. Bu nedenlerle, tüm çilingir ihtiyaçlarınız için profesyonel desteğe başvurmak, hem güvenliğinizi hem de rahatınızı artıracaktır.
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