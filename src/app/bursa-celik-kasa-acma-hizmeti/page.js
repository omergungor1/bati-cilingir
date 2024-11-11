// components
import { Navbar, Footer } from "@/components";

// sections
import BlogBody from "../../components/blog-body";

export default function Blog() {
    const data = {
        title: "Bursa Çelik Kasa Açma Hizmeti | Profesyonel Kasa Açma Çözümleri",
        desc: `
        Çelik kasalar, değerli eşyalar ve belgeler için en yüksek güvenliği sağlar, ancak doğru güvenlik önlemleri alındığında bu koruma daha da etkili hale gelir. İlk adım, kasayı sabit ve gözden uzak bir yere yerleştirmektir; mümkünse, duvara veya zemine sabitlemek ek güvenlik sağlar. Ayrıca, düzenli olarak kasa kilitlerini kontrol etmek ve gerektiğinde güncellemeler yapmak önemlidir.

Bursa’da çelik kasa açma ve kilit yenileme gibi çilingir hizmetleri sunarak, güvenliğinizi en üst seviyede tutmanıza destek oluyoruz. Kasanızla ilgili acil bir durum yaşarsanız ya da kilit sistemi ile ilgili yardıma ihtiyaç duyarsanız, 7/24 hizmetimizle hızlı ve güvenilir bir destek sağlıyoruz. Çelik kasalarınızın güvenliği için uzman desteğine ihtiyaç duyduğunuz her an yanınızdayız.
        `,
        img: "/image/blogs/6.png"
    }
    return (
        <div>
            <Navbar />
            <BlogBody title={data.title} desc={data.desc} img={data.img} />
            <Footer />
        </div>
    );
}