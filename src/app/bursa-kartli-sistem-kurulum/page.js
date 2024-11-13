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
                                    src={"/image/blogs/2.png"}
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
                                    Bursa Kartlı Sistem Kurulumu | Güvenli Geçiş Çözümleri
                                </Typography>
                                <Typography className="mb-1 w-full font-normal !text-gray-500">
                                    Kartlı geçiş sistemleri, güvenliği artırmak ve giriş-çıkışları kolaylaştırmak isteyenler için hem evlerde hem de iş yerlerinde ideal bir çözümdür. Bursa’da pek çok işletme, çalışanların yetkili alanlara güvenle erişimini sağlamak için bu sistemleri tercih ediyor. Özellikle Osmangazi ve Nilüfer gibi iş yoğunluğunun yüksek olduğu bölgelerde, kartlı geçiş sistemleri, hem güvenliği sağlıyor hem de giriş-çıkış trafiğini düzenliyor.<br /><br />
                                    Evlerde de tercih edilen kartlı geçiş sistemleri, kapı anahtarını taşıma zorunluluğunu ortadan kaldırarak hem pratiklik hem de ekstra güvenlik sağlıyor. Bursa’da güvenlik sistemleri kurulum hizmetlerimizle, ihtiyaçlarınıza uygun kartlı geçiş sistemlerini sunarak güvenliğinizi en üst seviyeye çıkarmanıza yardımcı oluyoruz.
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