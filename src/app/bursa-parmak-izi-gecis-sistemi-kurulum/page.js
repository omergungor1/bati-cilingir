// components
import { Navbar, Footer } from "@/components";

// sections
import BlogBody from "../../components/blog-body";

export default function Blog() {
    const data = {
        title: "Bursa Parmak İzi ile Geçiş Sistemi Kurulumu | Yüksek Güvenlik",
        desc: `
        Parmak izi ile geçiş sistemleri, güvenlikte yüksek standartları karşılayan bir çözüm sunar. Özellikle iş yerleri ve apartman girişleri gibi yoğun kullanım alanlarında tercih edilen bu sistemler, kişiye özel erişim imkanı tanıyarak giriş-çıkışları güvenli hale getirir. Bursa’da parmak izi geçiş sistemi kurulumu hizmeti sunan bir çilingir olarak, işletme ve ev sahiplerine hızlı ve güvenilir çözümler sunuyoruz.

        Kurulum süreci, kullanıcı dostu bir yapıyla oldukça pratiktir. Uzman ekibimiz, ihtiyacınıza uygun cihazları belirleyip sistemi kısa sürede aktif hale getirir. Bursa ve çevresinde güvenlik ihtiyaçlarını en üst seviyeye çıkaran bu çözümler, hem zaman tasarrufu sağlar hem de güvenliği artırarak mekanlarınıza huzur katar.
        `,
        img: "/image/blogs/3.png"
    }
    return (
        <div>
            <Navbar />
            <BlogBody title={data.title} desc={data.desc} img={data.img} />
            <Footer />
        </div>
    );
}