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
  title: "Bursa Batı Çilingir | 7/24",
  description:
    "Bursa Batı Çilingir olarak 7/24 acil çilingir hizmeti sunuyoruz. 0542 691 01 57 numaralı telefondan bize ulaşarak, Bursa&apos;nın her noktasına sadece 15 dakikada kapınızda olacağız.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KZ9GRDE8L6"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-KZ9GRDE8L6');
        </script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
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
