// components
import { Navbar, Footer } from "@/components";

// sections
import BlogBody from "../../components/blog-body";

export default function Blog() {
    const data = {
        title: "Bursa Otomatik Otopark Geçiş Sistemi | Hızlı ve Kolay Erişim",
        desc: `
        Otomatik otopark geçiş sistemleri, hem güvenlik hem de konfor sağlamak için ideal bir çözümdür. Özellikle site, iş merkezi ve otopark yoğunluğunun yüksek olduğu alanlarda, araçların giriş-çıkışlarını düzenli ve güvenli hale getirir. Bursa’da sunduğumuz otomatik otopark geçiş sistemi çözümleriyle, park alanlarında hız ve güvenliği bir araya getiriyoruz.

Bu sistemler, genellikle kartlı veya plaka tanıma özellikleriyle çalışır, böylece sadece yetkili araçların giriş yapmasına izin verir. Otomatik geçiş sayesinde trafik yoğunluğu azalırken, park alanlarının güvenliği de en üst seviyeye çıkar. Hızlı kurulum ve düşük bakım gereksinimiyle öne çıkan bu sistemler, hem iş yerlerinde hem de konutlarda sıkça tercih edilmektedir.
        `,
        img: "/image/blogs/4.png"
    }
    return (
        <div>
            <Navbar />
            <BlogBody title={data.title} desc={data.desc} img={data.img} />
            <Footer />
        </div>
    );
}