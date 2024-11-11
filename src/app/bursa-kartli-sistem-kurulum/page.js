// components
import { Navbar, Footer } from "@/components";

// sections
import BlogBody from "../../components/blog-body";

export default function Blog() {
    const data = {
        title: "Bursa Kartlı Sistem Kurulumu | Güvenli Geçiş Çözümleri",
        desc: `
        Kartlı geçiş sistemleri, güvenliği artırmak ve giriş-çıkışları kolaylaştırmak isteyenler için hem evlerde hem de iş yerlerinde ideal bir çözümdür. Bursa’da pek çok işletme, çalışanların yetkili alanlara güvenle erişimini sağlamak için bu sistemleri tercih ediyor. Özellikle Osmangazi ve Nilüfer gibi iş yoğunluğunun yüksek olduğu bölgelerde, kartlı geçiş sistemleri, hem güvenliği sağlıyor hem de giriş-çıkış trafiğini düzenliyor.
        Evlerde de tercih edilen kartlı geçiş sistemleri, kapı anahtarını taşıma zorunluluğunu ortadan kaldırarak hem pratiklik hem de ekstra güvenlik sağlıyor. Bursa’da güvenlik sistemleri kurulum hizmetlerimizle, ihtiyaçlarınıza uygun kartlı geçiş sistemlerini sunarak güvenliğinizi en üst seviyeye çıkarmanıza yardımcı oluyoruz.
        `,
        img: "/image/blogs/2.png"
    }
    return (
        <div>
            <Navbar />
            <BlogBody title={data.title} desc={data.desc} img={data.img} />
            <Footer />
        </div>
    );
}