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
                                    src={"/image/blogs/11.jpg"}
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
                                    Göster Geç Sistemi Nedir? | Bursa Göster Geç Sistemi Kurulumu
                                </Typography>
                                <Typography className="mb-1 w-full font-normal !text-gray-500">
                                    Ev ve işletmelerin giriş-çıkışlarını kontrol altına almak, güvenliği artırmak ve trafiği düzenlemek için göstergeç sistemleri en ideal çözümlerden biridir. Bursa’da göstergeç sistemleri kuruyoruz, hem ev sahipleri hem de işletme sahipleri için modern ve etkili çözümler sunuyoruz. Kartlı geçiş, parmak izi okuyucu veya şifreli sistemlerle desteklenen göstergeç sistemleri, özellikle iş yerlerinde çalışanların yetkili alanlara kontrollü girişini sağlarken, evlerde de anahtar taşıma derdini ortadan kaldırıyor.
                                    <br /><br />
                                    Bursa’nın her bölgesinde, farklı ihtiyaçlara uygun göstergeç sistemleri kurulum hizmeti veriyoruz. Özellikle Nilüfer, Osmangazi, ve Yıldırım gibi yoğun bölgelerde, işletmelerin güvenlik seviyelerini artırmaları ve günlük operasyonlarını kolaylaştırmaları için bu sistemler yoğun talep görüyor. Göstergeç sistemleri yalnızca güvenliği artırmakla kalmaz, aynı zamanda zamandan tasarruf sağlayarak işletmelere verimlilik katar.
                                    <br /><br />
                                    Eviniz veya iş yeriniz için ideal göstergeç sistemi çözümlerini öğrenmek ve profesyonel kurulum hizmetlerimizden yararlanmak için hemen bizimle iletişime geçin. Bursa’da göstergeç sistemleri ile ilgili daha fazla bilgi almak için <span className="font-bold">hemen arayın</span> ve size en uygun seçenekleri keşfedin.
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