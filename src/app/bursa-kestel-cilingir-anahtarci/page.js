"use client";
import Image from "next/image";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Phone } from "lucide-react";
import Head from 'next/head';
// components
import { Navbar, Footer } from "@/components";

export default function Blog() {
    return (
        <div>
            <Head>
                <title>Bursa Kestel Çilingir Anahtarcı | 7/24 Çilingir Hizmeti</title>
                <meta name="description" content="Bursa Kestel Çilingir Anahtarcı, güvenilir ve uygun fiyatlı 7/24 çilingir hizmeti sunuyor. Kapı açma, oto çilingir, anahtar çoğaltma ve daha fazlası." />
                <meta name="keywords" content="Bursa çilingir, Kestel çilingir, acil çilingir, oto çilingir, anahtar çoğaltma, kapı açma" />
                <meta property="og:title" content="Bursa Kestel Çilingir Anahtarcı | 7/24 Çilingir Hizmeti" />
                <meta property="og:description" content="Bursa Kestel Çilingir Anahtarcı ile güvenli, hızlı ve uygun fiyatlı çilingir hizmetleri. 7/24 kapı açma ve oto çilingir hizmeti." />
                <meta property="og:url" content="https://www.bursabaticilingir.com/bursa-kestel-cilingir-anahtarci" />
            </Head>
            <Navbar />
            <section className="px-8 py-40">
                <div className="container mx-auto">
                    <Card color="transparent" shadow={false} className="">
                        <CardBody className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4">
                            <div className="w-full xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full">
                                <Image
                                    width={768}
                                    height={768}
                                    src={"/image/blogs/cilingir.png"}
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
                                    Bursa Kestel Acil Çilingir | 7/24 Hızlı, Ekonomik ve Güvenilir Çilingir
                                </Typography>
                                <Typography className="mb-1 w-full font-normal !text-gray-800">
                                    Bursa’nın Kestel ilçesinde acil çilingir hizmetine mi ihtiyacınız var? Bursa Kestel Çilingir Anahtarcı olarak, kapı açma, oto çilingir ve anahtar çoğaltma gibi hizmetlerle güvenliğinizi sağlıyoruz. 7/24 aktif olan hizmetimizle, güvenilir ve uygun fiyatlı çözümler sunuyoruz. Hızlı bir şekilde profesyonel desteğe ulaşmak için 0542 691 01 57 numarasını arayarak, Bursa’nın her köşesine 15 dakika içerisinde ulaşmamızı sağlayabilirsiniz.
                                    <br /><br />
                                    Kestel ve Bursa Genelinde 7/24 Hızlı Çilingir Hizmetleri<br />
                                    Bursa Kestel Çilingir Anahtarcı olarak, herhangi bir acil durumla karşılaştığınızda sizi yalnız bırakmıyoruz. Evinizden aracınıza kadar her türlü kapı açma işleminiz için hızlı, güvenli ve profesyonel hizmet sunuyoruz. Acil durumlarda 7/24 hizmet vererek, gündüz-gece fark etmeden her zaman yanınızdayız.
                                    <br /><br />
                                    Kapı Açma: Kilitli kalan kapılarınızı zarar vermeden açıyor, hızlı ve güvenli bir şekilde size teslim ediyoruz.
                                    Oto Çilingir Hizmetleri: Araç kilitleri ve anahtarlarıyla ilgili her türlü sorunuzu çözebilecek deneyime sahibiz. Araçlarınızdaki kilit sorunlarını anında çözüyoruz.
                                    Anahtar Çoğaltma: Kaybolan veya bozulmuş anahtarlarınızı kolayca ve hızlıca çoğaltıyoruz, böylece bir tane kaybolduğunda tekrar sorun yaşamazsınız.
                                    Bursa’nın Her Noktasına 15 Dakika İçinde Ulaşım
                                    Zamanınız değerli, bu yüzden Bursa Kestel Çilingir Anahtarcı olarak, 15 dakika içinde adresinize ulaşma garantisi veriyoruz. İster Kestel’de ister Bursa’nın diğer ilçelerinde olun, güvenliğinizi ve rahatlığınızı sağlayacak çözümler için sadece bir telefon kadar uzağınızdayız.
                                    <br /><br />
                                    Profesyonel Ekip, Modern Ekipmanlar<br />
                                    Bursa Kestel Çilingir Anahtarcı olarak, deneyimli ve sertifikalı çilingirlerimizle en güvenilir çözümleri sunuyoruz. Ekipmanlarımız son teknolojiye sahip olup, kapılarınıza veya araçlarınıza zarar vermeden işinizi hallediyoruz. İster evde, ister işyerinizde, modern ekipmanlarımızla hızlı bir çözüm sunuyoruz.
                                    <br /><br />
                                    Neden Bursa Kestel Çilingir Anahtarcı’yı Tercih Etmelisiniz?<br />
                                    Hızlı ve Güvenilir: Acil durumlarda size en kısa sürede yardımcı oluyoruz.
                                    Ekonomik Fiyatlar: Hizmetlerimizi uygun fiyatlarla sunuyor, bütçenizi zorlama derdine son veriyoruz.
                                    7/24 Hizmet: Gündüz gece fark etmeden, 7/24 hizmet veriyoruz, acil durumlar için her zaman ulaşabilirsiniz.
                                    Profesyonel Çözümler: Deneyimli ekibimiz ve modern ekipmanlarımızla işinizi sağlıklı bir şekilde çözüyoruz.
                                    Hızlı Yardım İçin Bizimle İletişime Geçin!
                                    Bursa Kestel Çilingir Anahtarcı olarak, kapı açma, oto çilingir ve anahtar çoğaltma gibi hizmetler için 24 saat size hizmet vermek üzere hazırız. Herhangi bir kilit problemiyle karşılaştığınızda, Bursa Kestel’deki en yakın çilingir ekibimize hemen ulaşabilirsiniz. Hem hızlı hem de ekonomik çözüm arıyorsanız, 0542 691 01 57 numarasını arayarak güvenli ve profesyonel hizmet alabilirsiniz.
                                    <br /><br />
                                    Eviniz, iş yeriniz veya aracınız için ihtiyacınız olan çilingir hizmetlerini sağlamak amacıyla hızlı, güvenilir ve profesyonel çözümler sunuyoruz. Bursa Kestel Çilingir Anahtarcı, güvenliğiniz ve rahatsızlıklarınızın giderilmesi için doğru adrestir.
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