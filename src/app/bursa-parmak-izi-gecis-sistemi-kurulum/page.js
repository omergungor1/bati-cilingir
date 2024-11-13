"use client";
import Image from "next/image";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Phone } from "lucide-react";
// components
import { Navbar, Footer } from "@/components";

// sections

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
                                    src={"/image/blogs/3.png"}
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
                                    Bursa Parmak İzi ile Geçiş Sistemi Kurulumu | Yüksek Güvenlik
                                </Typography>
                                <Typography className="mb-1 w-full font-normal !text-gray-500">
                                    Parmak izi ile geçiş sistemleri, güvenlikte yüksek standartları karşılayan bir çözüm sunar. Özellikle iş yerleri ve apartman girişleri gibi yoğun kullanım alanlarında tercih edilen bu sistemler, kişiye özel erişim imkanı tanıyarak giriş-çıkışları güvenli hale getirir. Bursa’da parmak izi geçiş sistemi kurulumu hizmeti sunan bir çilingir olarak, işletme ve ev sahiplerine hızlı ve güvenilir çözümler sunuyoruz.
                                    <br /><br />
                                    Kurulum süreci, kullanıcı dostu bir yapıyla oldukça pratiktir. Uzman ekibimiz, ihtiyacınıza uygun cihazları belirleyip sistemi kısa sürede aktif hale getirir. Bursa ve çevresinde güvenlik ihtiyaçlarını en üst seviyeye çıkaran bu çözümler, hem zaman tasarrufu sağlar hem de güvenliği artırarak mekanlarınıza huzur katar.
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