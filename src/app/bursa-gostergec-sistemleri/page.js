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
                                    Ev ve işletmelerin giriş-çıkışlarını güvenli ve düzenli bir şekilde kontrol altına almak için göstergeç sistemleri, günümüzün en ideal çözümlerinden biridir. Bu modern sistemler, güvenliği artırmanın yanı sıra trafiği düzenlemeye ve günlük operasyonları kolaylaştırmaya yardımcı olur. Bursa’da sunduğumuz göstergeç sistemleri kurulum hizmetleri, hem ev sahipleri hem de işletme sahipleri için etkili ve uzun ömürlü çözümler sunar. Kartlı geçiş, parmak izi okuyucu ve şifreli sistemlerle desteklenen bu teknolojiler, iş yerlerinde çalışanların yetkili alanlara kontrollü girişini sağlarken, evlerde anahtar taşıma zorunluluğunu tamamen ortadan kaldırır.
                                    <br /><br />
                                    Bursa’nın her noktasında, farklı ihtiyaçlara uygun göstergeç sistemleri kurulum hizmeti sağlıyoruz. Özellikle Nilüfer, Osmangazi ve Yıldırım gibi yoğun bölgelerde, işletmelerin güvenlik standartlarını yükseltmek ve günlük operasyonlarını daha verimli hale getirmek için bu sistemlere olan talep oldukça yüksektir. Göstergeç sistemleri yalnızca güvenlik sağlamaz; aynı zamanda zamandan tasarruf ederek iş süreçlerine önemli bir katkı sunar. Ayrıca, ev kullanıcıları için de bu sistemler konforlu ve güvenli bir yaşam ortamı yaratır.
                                    <br /><br />
                                    Göstergeç sistemlerimiz, en son teknolojilere sahip olup, ihtiyacınıza göre özelleştirilebilmektedir. İster küçük bir ofis ister büyük bir konut olsun, her alana uygun çözümler sunuyoruz. Bursa’da göstergeç sistemleri konusunda yılların deneyimine sahip ekibimiz, hızlı ve profesyonel kurulum hizmeti ile yanınızda.
                                    <br /><br />
                                    Eviniz veya iş yeriniz için en uygun göstergeç sistemi çözümlerini öğrenmek, güvenliği artırmak ve modern bir teknolojiye geçiş yapmak için hemen bizimle iletişime geçin. Daha fazla bilgi almak ve ihtiyacınıza uygun seçenekleri keşfetmek için <span className="font-bold">bizi arayın</span>. Bursa’da göstergeç sistemleri ile tanışarak hayatınızı kolaylaştırmaya hemen başlayın!
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