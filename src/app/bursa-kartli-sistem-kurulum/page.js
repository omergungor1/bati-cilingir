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
                                    Güvenliği artırmak ve giriş-çıkışları daha pratik hale getirmek isteyenler için kartlı geçiş sistemleri günümüzde hem evlerde hem de iş yerlerinde vazgeçilmez bir çözümdür. Bu sistemler, erişim kontrollerini sağlayarak yetkisiz girişleri engellerken, kullanıcı dostu yapıları sayesinde hem güvenlik hem de rahatlık sunar. Bursa’daki işletmeler ve konutlar için sunduğumuz kartlı geçiş sistemleriyle, güvenliğinizi üst düzeye çıkarırken, giriş-çıkış işlemlerinizi çok daha düzenli ve verimli hale getiriyoruz.
                                    <br /><br />
                                    İş Yerlerinde Yüksek Güvenlik ve Düzenli Trafik<br />
                                    Bursa’da Osmangazi ve Nilüfer gibi yoğun iş bölgelerinde, işletmelerin güvenliği ve çalışanların yetkili alanlara kontrollü girişleri için kartlı geçiş sistemleri sıklıkla tercih edilmektedir. Bu sistemler, özellikle ofis binaları, fabrikalar, hastaneler ve okullar gibi alanlarda, personel ve ziyaretçiler için güvenli ve hızlı geçişler sağlarken, aynı zamanda giriş-çıkış trafiğini düzenler.
                                    <br /><br />
                                    Güvenlik: Kartlı sistemler, her bireyin yalnızca yetkili olduğu alanlara giriş yapabilmesini sağlar, böylece güvenlik açığı yaratmaz.
                                    Zaman ve Kolaylık: Kullanıcılar, kartlarını geçirebilecekleri noktalar aracılığıyla hızlıca giriş yapabilir, böylece zaman kaybı yaşamazlar.
                                    Veri Takibi: Giriş çıkış saatlerini kaydederek, işletmelerin çalışan takibini ve güvenlik kontrolünü kolaylaştırır.
                                    Evlerde Kartlı Geçiş Sistemleri ile Güvenlik ve Konfor
                                    Kartlı geçiş sistemleri, sadece iş yerleri için değil, aynı zamanda evler için de mükemmel bir çözüm sunmaktadır. Özellikle yoğun yaşam alanlarında, kapı anahtarı taşımak ve kaybetmek sık karşılaşılan sorunlardandır. Kartlı geçiş sistemleri, bu sorunu ortadan kaldırarak hem pratiklik hem de ek güvenlik sağlar. Evler için tercih edilen kartlı geçiş sistemlerinin avantajları:
                                    <br /><br />
                                    Anahtar Taşıma Derdi Yok: Kapı anahtarlarını unutma veya kaybetme riski ortadan kalkar, sadece kartınızla güvenli bir şekilde giriş yapabilirsiniz.
                                    Çocuklar İçin Güvenlik: Küçük çocukların yanlışlıkla kapı anahtarını kaybetmesi veya yanlış kullanması engellenir.
                                    Ekstra Güvenlik: Ev sahipleri, kartları yalnızca belirli kişilere vererek güvenliği arttırabilir ve her zaman kimin evde olduğunu takip edebilirler.
                                    Bursa’da Kartlı Geçiş Sistemleri Kurulum Hizmeti
                                    Bursa’da güvenlik sistemleri kurulum hizmetleri sunarak, her ihtimale göre özelleştirilmiş kartlı geçiş sistemlerini uygulamaktayız. Hem ev sahipleri hem de işletmeler için güvenlik sağlamak ve giriş-çıkış kontrolünü kolaylaştırmak amacıyla, farklı kartlı geçiş sistemleri seçeneklerini profesyonel bir şekilde kuruyoruz. İhtiyaçlarınıza uygun en verimli çözümü sunarak, güvenliğinizi en üst seviyeye çıkarıyoruz.
                                    <br /><br />
                                    Neden Kartlı Geçiş Sistemlerini Tercih Etmelisiniz?<br />
                                    Yüksek Güvenlik: Yetkisiz girişleri engelleyerek sadece izin verilen kişilerin alanlara girmesini sağlar.
                                    Pratiklik: Anahtar taşıma derdini ortadan kaldırır, sadece kartla hızlı ve kolay giriş yapılabilir.
                                    Düzenli Takip: Kartlı sistemler, giriş ve çıkışların düzenli bir şekilde kaydını tutarak güvenlik ve yönetim kolaylığı sağlar.
                                    Uzun Ömürlü Çözümler: Yüksek kaliteli malzemelerle kurulumu yapılan kartlı geçiş sistemleri, uzun süre güvenli kullanım sağlar.
                                    Bursa’da En İyi Kartlı Geçiş Sistemi Çözümleri İçin Bize Ulaşın!
                                    Bursa’daki eviniz ya da iş yeriniz için en uygun kartlı geçiş sistemleri çözümlerini öğrenmek ve profesyonel kurulum hizmetlerimizden yararlanmak için hemen bizimle iletişime geçin! Hem evler hem de işletmeler için güvenliği artırmak, giriş-çıkış işlemlerini kolaylaştırmak ve yönetimini sağlamak için doğru çözüm sunuyoruz. Bursa’nın her bölgesine hızlı kurulum ve destek hizmeti sağlıyoruz. Şimdi arayıp güvenliğinizi en üst düzeye çıkarabilirsiniz.
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