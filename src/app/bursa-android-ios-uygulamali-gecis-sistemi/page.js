// components
import { Navbar, Footer } from "@/components";

// sections
import BlogBody from "../../components/blog-body";

export default function Blog() {
    const data = {
        title: "Bursa Android ve iOS Uygulamalı Geçiş Sistemi | Akıllı Kontrol",
        desc: `
        Mobil uygulamalarla entegre çalışan geçiş sistemleri, güvenliği ve kolaylığı bir araya getirerek geçiş kontrollerini daha akıllı hale getiriyor. Android ve iOS destekli geçiş sistemleri sayesinde kullanıcılar, telefonlarını kullanarak kapı, otopark ya da bina girişlerini uzaktan kontrol edebiliyor. Bursa’da sunduğumuz bu akıllı geçiş çözümleri, özellikle apartman, site ve iş yerleri gibi yoğun trafiğe sahip mekanlarda hem zamandan tasarruf sağlıyor hem de güvenlik seviyesini yükseltiyor.

Uygulama destekli bu geçiş sistemleri, anahtar taşıma zorunluluğunu ortadan kaldırdığı gibi, yetkili kişilere uzaktan erişim izni vererek geçişleri pratik hale getirir. Kurulumu kolay ve kullanımı son derece basit olan bu sistemler, mobil cihazlarla uyumlu yapısı sayesinde kullanıcı dostu bir çözüm sunar. Bursa'da güvenlik ihtiyaçlarınıza modern bir çözüm arıyorsanız, Android ve iOS uygulamalarıyla entegre geçiş sistemleri mükemmel bir seçenek olacaktır.
        `,
        img: "/image/blogs/5.png"
    }
    return (
        <div>
            <Navbar />
            <BlogBody title={data.title} desc={data.desc} img={data.img} />
            <Footer />
        </div>
    );
}