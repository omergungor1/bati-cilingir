import { Typography, Button, Input } from "@material-tailwind/react";
import { KeyRound, Instagram, Facebook } from "lucide-react"
import Link from 'next/link';


const LINKS = [
  {
    title: "Company",
    items: ["About Us", "Careers", "Premium Tools", "Blog"],
  },
  {
    title: "Pages",
    items: ["Login", "Register", "Add List", "Contact"],
  },
  {
    title: "Legal",
    items: ["Terms", "Privacy", "Team", "About Us"],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-24 pb-8" id="iletisim">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 !w-full ">
          <div className="flex col-span-1 items-center gap-10 mb-10 lg:mb-0 md:gap-36">
            <ul>
              <Typography variant="h6" color="blue-gray" className="mb-4">
                İLETİŞİM
              </Typography>
              <li>
                <a href="tel:05426910157">
                  <Typography
                    className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900">
                    Telefon: 0542 691 01 57
                  </Typography>
                </a>
              </li>
              <li>
                <Typography
                  as="a"
                  href="#"
                  className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900"
                >
                  bursabaticilingir@gmail.com
                </Typography>
              </li>
              <li>
                <Typography
                  as="a"
                  href="#"
                  className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900"
                >
                  <div className="flex gap-1 items-center">
                    <Instagram size={24} />
                    <Facebook size={24} />
                  </div>
                </Typography>
              </li>
            </ul>
          </div>
          <div className="flex col-span-1 items-center gap-10 mb-10 lg:mb-0 md:gap-36">
            <ul>
              <Typography variant="h6" color="blue-gray" className="mb-4">
                BÖLGELER
              </Typography>
              <li>
                <Link href={"/bursa-osmangazi-cilingir-anahtarci"}>
                  <div className="flex items-center gap-2">

                    <Typography className="w-full font-normal !text-gray-700">
                      Osmangazi Çilingir Anahtarcı
                    </Typography>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={"/bursa-nilufer-cilingir-anahtarci"}>
                  <div className="flex items-center gap-2">

                    <Typography className="w-full font-normal !text-gray-700">
                      Nilüfer Çilingir Anahtarcı
                    </Typography>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={"/bursa-yildirim-cilingir-anahtarci"}>
                  <div className="flex items-center gap-2">

                    <Typography className="w-full font-normal !text-gray-700">
                      Yıldırım Çilingir Anahtarcı
                    </Typography>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={"/bursa-gursu-cilingir-anahtarci"}>
                  <div className="flex items-center gap-2">

                    <Typography className="w-full font-normal !text-gray-700">
                      Gürsu Çilingir Anahtarcı
                    </Typography>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={"/bursa-kestel-cilingir-anahtarci"}>
                  <div className="flex items-center gap-2">

                    <Typography className="w-full font-normal !text-gray-700">
                      Kestel Çilingir Anahtarcı
                    </Typography>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={"/bursa-emek-cilingir-anahtarci"}>
                  <div className="flex items-center gap-2">

                    <Typography className="w-full font-normal !text-gray-700">
                      Emek Çilingir Anahtarcı
                    </Typography>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={"/bursa-mudanya-cilingir-anahtarci"}>
                  <div className="flex items-center gap-2">

                    <Typography className="w-full font-normal !text-gray-700">
                      Mudanya Çilingir Anahtarcı
                    </Typography>
                  </div>
                </Link>
              </li>
            </ul>

          </div>
          <div className="">
            <Typography variant="h6" className="mb-3 text-left flex gap-1 items-center">
              <KeyRound size={20} />
              Bursa Batı Çilingir Anahtarcı
            </Typography>
            <Typography className="!text-gray-800 font-normal mb-4 text-base">
              <span className="font-bold">Bursa Batı Çilingir Anahtarcı</span> olarak 7/24 ulaşabileceğiniz <span className="font-bold">0542 691 01 57</span> numaramızdan bize dilediğiniz an ulaşabilirsiniz. Bursa’nın her bölgesine 15 dakikada kapınızdayız. Araç anahtarcılığı, kapı açma, anahtar değişimi ve kasa açma hizmetlerimizi güvenilir ve garantili şekilde sunuyoruz.
            </Typography>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="md:text-center mt-16 font-normal !text-gray-700"
        >

          Garantili <span className="font-bold">Bursa Çilingir</span> Hizmeti! 7/24 Acil Çilingir Hizmeti! Bursa Çilingir Ustası!
          &copy; {CURRENT_YEAR} Tüm hakları Batı Çilingire aittir.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
