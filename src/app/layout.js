import "./globals.css";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "Bursa Çilingir ve Anahtarcı | Ekonomik Çilingir Hizmetleri| Bursa",
  description:
    "Bursa Batı Çilingir, ekonomik fiyatlarla kapı açma, anahtar değişimi, kasa açma ve oto çilingir hizmetleri sunuyoruz. 7/24 acil çilingir hizmeti. 0542 691 01 57 numaralı telefondan bize ulaşabilirsiniz. Bursa ekonomik çilingir.",
  image: "/image/blogs/cilingir.png",
  icon: "/favicon.ico",
  locale: "tr_TR",
  logo: "/cilingir2.png",
  url: "https://www.bursabaticilingir.com",
  type: "website",
  siteName: "Bursa Çilingir ve Anahtarcı | Ekonomik Çilingir Hizmetleri| Bursa",
  keywords: "Bursa çilingir, Bursa ekonomik çilingir, Bursa acil çilingir, Bursa anahtarcı, Bursa çilingir hizmetleri,Bursa kapı açma, Bursa oto çilingir, Bursa çelik kasa açma, Bursa uygun fiyat çilingir",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3PKMW7FKLT"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16776080034"></script>
        <script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16776080034');
            gtag('config', 'G-3PKMW7FKLT', {
              page_path: window.location.pathname,
            });
          `,
          }}
        ></script>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}
