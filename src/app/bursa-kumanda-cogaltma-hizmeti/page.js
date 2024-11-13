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
                                    src={"/image/blogs/9.png"}
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
                                    Bursa Kumanda Çoğaltma Hizmeti | Kartlı Sistemlerde Yedek Kumanda
                                </Typography>
                                <Typography className="mb-1 w-full font-normal !text-gray-500">
                                    Bursa’da güvenlik ihtiyaçlarının arttığı günümüzde, kartlı geçiş sistemleri yaygınlaşmış durumda. Bu sistemler, özellikle iş yerleri, apartmanlar ve özel mülklerde güvenliği sağlamak için oldukça etkili bir çözüm sunar. Ancak, sistemin verimli bir şekilde çalışabilmesi ve güvenliğin artırılması için kumanda ve kartların çoğaltılması gerekebilir. İşte burada devreye giren kumanda çoğaltma hizmeti, güvenliğinizi bir adım daha öteye taşımanıza yardımcı olur.
                                    <br /><br />
                                    Bursa’da kartlı geçiş sistemi kullanan birçok işletme ve konut sahibi, sistemlerinin güvenliğini artırmak için kumanda çoğaltma hizmetinden yararlanır. Bu hizmet sayesinde, kartlı sisteminize ekstra kumandalar ekleyerek, geçişleri daha pratik bir şekilde yönetebilirsiniz. Ayrıca, bu çoğaltma işlemi, bir kumandanın kaybolması veya bozulması durumunda yedek bir seçenek sunarak, sistemin kesintisiz çalışmasını sağlar.
                                    <br /><br />
                                    Bursa’nın çeşitli ilçelerinde, örneğin Nilüfer, Gürsu, Kestel gibi pek çok bölgelerde de kumanda çoğaltma hizmetimiz mevcuttur. Bu hizmet, sadece mevcut güvenlik sisteminizi güçlendirmekle kalmaz, aynı zamanda kartlı geçiş sistemlerinin sorunsuz çalışmasına olanak tanır. Kumanda çoğaltma işlemleri uzman kişiler tarafından titizlikle yapılır, böylece sisteminizin güvenliği riske girmeden işlemler tamamlanır. Eğer siz de kartlı geçiş sisteminiz için ekstra güvenlik önlemleri almak isterseniz, çilingir hizmetlerimizden faydalanabilirsiniz.
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