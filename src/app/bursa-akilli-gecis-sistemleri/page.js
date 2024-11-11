// components
import { Navbar, Footer } from "@/components";

// sections
import BlogBody from "../../components/blog-body";

export default function Blog() {
    const data = {
        title: "Akıllı Geçiş Sistemleri ve İşletmelere Faydaları",
        desc: `
        Günümüzde işletmeler, hem çalışanlarının hem de mülklerinin güvenliğini sağlamak için akıllı geçiş sistemlerini tercih ediyor. Akıllı geçiş sistemleri, kartlı ve parmak izi gibi yüksek güvenlikli teknolojilerle, klasik anahtar-kilit sistemlerinin ötesinde bir güvenlik sağlıyor. Bursa'da akıllı geçiş sistemi kurulumu yapan bir çilingir olarak, işletmelere güvenlik ihtiyaçlarını en iyi şekilde karşılayacak çözümler sunuyoruz.

        Kartlı geçiş sistemleri Bursa’daki pek çok iş yeri tarafından tercih edilirken, parmak izi geçiş sistemi de sıklıkla tercih edilen bir diğer teknolojik çözüm. Bu sistemler, güvenliğin yanı sıra personel takibini kolaylaştırarak giriş çıkış kontrollerini daha düzenli hale getirir. Özellikle Osmangazi, Nilüfer ve Mudanya gibi iş merkezlerinin yoğun olduğu bölgelerde tercih edilen bu akıllı sistemler, işletmelere güvenlik, hız ve verimlilik kazandırır.

        Akıllı geçiş sistemleri, sadece işletmeler için değil, aynı zamanda evlerde de güvenliği artırmak isteyenler için büyük bir avantaj sağlar. Bursa güvenli geçiş sistemleri hizmetlerimiz, hızlı kurulum ve kesintisiz destekle, güvenlik ve kolaylığı bir araya getiriyor.
        `,
        img: "/image/blogs/8.png"
    }
    return (
        <div>
            <Navbar />
            <BlogBody title={data.title} desc={data.desc} img={data.img} />
            <Footer />
        </div>
    );
}