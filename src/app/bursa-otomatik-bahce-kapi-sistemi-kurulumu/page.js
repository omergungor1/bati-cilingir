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
                                    src={"/image/blogs/1.png"}
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
                                    Bursa Otomatik Bahçe Kapı Sistemi Kurulumu | Konforlu Geçiş
                                </Typography>
                                <Typography className="mb-1 w-full font-normal !text-gray-500">
                                    Bursa'da oturan birçok kişi için otomatik bahçe kapıları, güvenlik ve konforu artıran mükemmel bir çözümdür. Otomatik bahçe kapıları, hem estetik hem de güvenlik açısından önemli bir rol oynar. Yalnızca alanın güvenliğini sağlamakla kalmaz, aynı zamanda konforlu bir geçiş sağlar. Ancak, bu sistemlerin düzgün çalışabilmesi için düzenli bakım ve profesyonel kurulum oldukça önemlidir.
                                    <br /><br />
                                    Otomatik bahçe kapısı kurulumu yapmak isteyenler için uzman çilingir hizmetleri sunmaktayız. Bursa’da otomatik bahçe kapısı kurulumu, güvenlik sistemlerinin montajı ve arızaların giderilmesi konusunda deneyime sahibiz. Ayrıca, kapı sistemlerinin verimli çalışabilmesi için yıllık bakım hizmetleri sunarak, sistemin ömrünü uzatıyoruz. Yıldırım gibi farklı bölgelerde de benzer hizmetlerimizle, otomatik kapı sistemlerinin güvenliğini artırıyor ve olası arızaların önüne geçiyoruz.
                                    <br /><br />
                                    Otomatik bahçe kapılarınızın bakımını düzenli olarak yaparak, sistemin uzun yıllar sorunsuz çalışmasını sağlayabilirsiniz. Bu sistemler, özellikle ev ve iş yerlerinde giriş çıkışları kontrol etmek için önemli bir güvenlik unsuru sunar. Bursa'da güvenlik ve konforun ön planda olduğu bir ortam yaratmak için çilingir ve güvenlik sistemleri hizmetlerimizden faydalanabilirsiniz.
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