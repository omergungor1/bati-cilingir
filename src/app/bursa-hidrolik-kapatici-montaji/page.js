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
                                    Kapılarınızın sessiz, güvenli ve estetik bir şekilde kapanmasını sağlamak için hidrolik kapatıcılar, günümüzde hem evlerde hem de iş yerlerinde sıklıkla tercih edilen modern çözümlerden biridir. Kapıların kullanımını konforlu hale getirmenin yanı sıra uzun ömürlü bir çözüm sunan bu sistemler, özellikle yoğun trafiğe sahip alanlar için idealdir. Bursa’da sunduğumuz profesyonel hidrolik kapatıcı montaj hizmeti ile kapılarınızda güvenli, pratik ve şık bir kullanım deneyimi sağlıyoruz.
                                    <br /><br />
                                    Hidrolik Kapı Kapatıcıların Avantajları<br />
                                    Hidrolik kapatıcılar, birçok açıdan kapılarınızın kullanımını iyileştirir:
                                    <br /><br />
                                    Sessiz Çalışma: Kapılarınızın çarparak kapanmasını önleyerek gürültüyü minimuma indirir.
                                    Dayanıklılığı Artırır: Kapı ve menteşe sistemlerinin aşınmasını önleyerek kapınızın kullanım ömrünü uzatır.
                                    Güvenlik Sağlar: Özellikle küçük çocuklu aileler için kapıların yavaş kapanmasını sağlayarak olası kazaları engeller.
                                    Estetik Görünüm: Modern tasarımlarıyla kapılarınızın şıklığını tamamlar.
                                    Enerji Tasarrufu: Kapıların tam olarak kapanmasını sağlayarak ev veya iş yerinizin enerji verimliliğini artırır.
                                    Bursa’da Hidrolik Kapatıcı Çözümleri
                                    Bursa’nın yoğun bölgelerinde, özellikle Nilüfer, Osmangazi, ve Yıldırım gibi alanlarda, hidrolik kapatıcılar iş yerleri için sıkça tercih edilmektedir. Restoranlar, ofisler, mağazalar ve apartman girişleri gibi alanlarda, kapıların sürekli açık kalmasını engelleyerek hem güvenliği artırır hem de hava akışını kontrol altına alır. Ayrıca, küçük ölçekli evler için de uygun olan bu sistemler, günlük kullanımda hem konfor hem de güvenlik sunar.
                                    <br /><br />
                                    Hidrolik Kapatıcıların Kurulumu ve Seçimi<br />
                                    Her kapı tipi ve kullanım alanına uygun farklı hidrolik kapatıcı modelleri bulunmaktadır. Bu noktada doğru seçimi yapmak, sistemin performansı açısından kritik önem taşır. İş yerinizde yoğun trafiğe dayanıklı kapatıcılar, evlerde ise daha küçük ve estetik tasarımlar tercih edilebilir. Ekibimiz, kapı tipinize ve kullanım ihtiyaçlarınıza uygun en doğru modeli belirler ve hızlı bir şekilde montaj işlemini gerçekleştirir.
                                    <br /><br />
                                    Montaj Süreci: Profesyonel ekibimiz, hidrolik kapatıcıların kapınıza uygun şekilde ayarlanmasını ve montajını özenle yapar.
                                    Kaliteli Malzemeler: Yüksek kaliteli hidrolik kapatıcılarla uzun ömürlü ve dayanıklı bir sistem garanti edilir.
                                    Hızlı Hizmet: Bursa genelinde, size en yakın ekibimiz hızlı bir şekilde kapınıza gelerek kurulum işlemini tamamlar.
                                    Neden Bizi Tercih Etmelisiniz?
                                    Deneyimli Ekip: Yılların tecrübesiyle, her tür kapı için en uygun çözümleri sunuyoruz.
                                    Kaliteli Hizmet: Kullandığımız ürünler dayanıklı ve uzun ömürlüdür.
                                    Hızlı Montaj: İhtiyacınız olan her an, hızlı ve güvenilir montaj hizmeti sağlıyoruz.
                                    Geniş Hizmet Ağı: Bursa’nın tüm bölgelerine hizmet veriyoruz.
                                    Daha Fazla Bilgi ve Hizmet İçin Bize Ulaşın!
                                    Kapılarınız için hidrolik kapatıcı montajı yaptırmak, hem estetik hem de fonksiyonel bir çözüm arıyorsanız en doğru seçim olacaktır. Daha fazla bilgi almak, ihtiyacınıza uygun hidrolik kapatıcı seçeneklerini öğrenmek ve hızlı kurulum hizmetimizden yararlanmak için hemen bizimle iletişime geçin! Bursa’da kapılarınızı modern ve güvenli hale getirmek için profesyonel hizmetimizle yanınızdayız.
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