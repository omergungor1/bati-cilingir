// components
import { Navbar, Footer } from "@/components";

// sections
import BlogBody from "../../components/blog-body";

export default function Blog() {
    const data = {
        title: "Bursa Araç Kapısı Açma Hizmeti | Oto Çilingir Çözümleri",
        desc: `
        Anahtarınızı aracın içinde unuttuğunuzda ya da anahtarınız kaybolduğunda, araç kapısı açma hizmetleri hızlı bir çözüm sunar. Bursa’da sunduğumuz bu hizmetle, aracınızın kapısını güvenli bir şekilde açarak hasar riskini minimuma indiriyoruz. Profesyonel ekipman ve deneyimle, araç kapısı açma işlemlerini marka ve model gözetmeksizin kısa sürede tamamlıyoruz.

Acil durumlar için 7/24 Bursa araç kapısı açma hizmeti sağlayarak, yolda kaldığınızda ya da acil bir durumda size en hızlı şekilde ulaşıyoruz. Kilide veya kapıya zarar vermeden gerçekleştirdiğimiz işlemler, hem güvenlik hem de konfor sunar. Aracınızın güvenliği için uzman bir çözüme ihtiyaç duyduğunuzda, profesyonel çilingir desteğimizle yanınızdayız.
        `,
        img: "/image/blogs/7.png"
    }
    return (
        <div>
            <Navbar />
            <BlogBody title={data.title} desc={data.desc} img={data.img} />
            <Footer />
        </div>
    );
}