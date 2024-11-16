"use client";

import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


function TESTIMONIAL() {
  return (
    <section className="px-8 py-40" id="bolgelerimiz">
      <div className="container mx-auto">
        <Card color="transparent" shadow={false} className="">
          <CardBody className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4">
            <div className="w-full xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full">
              <Image
                width={768}
                height={768}
                src="/image/bursa.png"
                alt="Bursa çilingir harita"
                className="w-full h-full scale-110 object-cover"
              />
            </div>
            <div className="col-span-2 w-full">
              <Typography variant="h6" color="blue" className="mb-4">
                BÖLGELERİMİZ
              </Typography>
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold"
              >
                Bursa’nın Tüm İlçe ve Mahallelerine Hizmetinizdeyiz
              </Typography>
              <Typography className="mb-1 w-full font-normal !text-gray-700">
                Bursa Batı Çilingir olarak yıllardır Bursa’nın tüm ilçe ve mahallelerine hizmet vermekteyiz.
              </Typography>
              <div className="grid mb-4">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Bursa Osmangazi Çilingir Anahtarcı</AccordionTrigger>
                    <AccordionContent>
                      <Link href={"/bursa-osmangazi-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Osmangazi Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-heykel-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Heykel Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-soganli-mahallesi-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Soğanlı Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-altiparmak-mahallesi-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Altiparmak Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-kukurtlu-mahallesi-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Kükürtlü Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-dikkaldirim-mahallesi-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Dikkaldırım Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-panayir-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Panayır Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-cekirge-mahallesi-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Çekirge Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-hamitler-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Hamitler Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-demirtas-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Demirtaş Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-ihsaniye-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa İhsaniye Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Bursa Nilüfer Çilingir Anahtarcı</AccordionTrigger>
                    <AccordionContent>
                      <Link href={"/bursa-nilufer-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Nilüfer Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-kayapa-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Kayapa Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-ozluce-mahallesi-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Özlüce Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-balat-mahallesi-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Balat Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-gorukle-mahallesi-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Görükle Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-akcalar-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Akçalar Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-besevler-mahallesi-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Beşevler Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-fethiye-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Fethiye Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-kizilcikli-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Kızılcıklı Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Bursa Yıldırım Çilingir Anahtarcı</AccordionTrigger>
                    <AccordionContent>
                      <Link href={"/bursa-yildirim-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Yıldırım Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-mesken-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Mesken Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-yesilyayla-mahallesi-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Yeşilyayla Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-zumrutevler-mahallesi-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Zumrutevler Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-degirmenlikizik-mahallesi-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Değirmenlikızık Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-millet-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Millet Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-baglarbasi-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Bağlarbaşı Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-hamitler-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Hamitler Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-yunuseli-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Yunuseli Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                      <Link href={"/bursa-erikli-mahallesi-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Erikli Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Bursa Gürsu Çilingir Anahtarcı</AccordionTrigger>
                    <AccordionContent>
                      <Link href={"/bursa-gursu-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Gürsu Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Bursa Kestel Çilingir Anahtarcı</AccordionTrigger>
                    <AccordionContent>
                      <Link href={"/bursa-kestel-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Kestel Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>Bursa Emek Çilingir Anahtarcı</AccordionTrigger>
                    <AccordionContent>
                      <Link href={"/bursa-emek-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Emek Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                    <AccordionTrigger>Bursa Mudanya Çilingir Anahtarcı</AccordionTrigger>
                    <AccordionContent>
                      <Link href={"/bursa-mudanya-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Mudanya Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-8">
                    <AccordionTrigger>Bursa Gemlik Çilingir Anahtarcı</AccordionTrigger>
                    <AccordionContent>
                      <Link href={"/bursa-gemlik-cilingir-anahtarci"}>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-gray-500 rounded-full" />
                          <Typography className="w-full font-normal !text-gray-500">
                            Bursa Gemlik Çilingir Anahtarcı
                          </Typography>
                        </div>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default TESTIMONIAL;
