"use client";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

function ImageGalery() {
    return (
        <section className="px-8 py-36">
            <div className="container mx-auto">
                <div className="!flex flex-col h-[60vh] md:h-[40vh] items-center justify-center" id="galery">
                    <Typography variant="h2" color="blue-gray" className="mb-2">
                        Örnek Çalışmalarımız
                    </Typography>
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 3500,
                            }),
                        ]}
                    >
                        <CarouselContent className="w-[290px] md:w-[400px]">
                            <CarouselItem className="flex justify-center">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/image/galery/Image1.jpeg"
                                    alt="bg-img"
                                    className="w-[300px] h-[500px] rounded-md object-cover object-center"
                                />
                            </CarouselItem>
                            <CarouselItem className="flex justify-center">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/image/galery/Image2.jpeg"
                                    alt="bg-img"
                                    className="w-[300px] h-[500px] rounded-md object-cover object-center"
                                />
                            </CarouselItem>
                            <CarouselItem className="flex justify-center">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/image/galery/Image3.jpeg"
                                    alt="bg-img"
                                    className="w-[300px] h-[500px] rounded-md object-cover object-center"
                                />
                            </CarouselItem>
                            <CarouselItem className="flex justify-center">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/image/galery/Image4.jpeg"
                                    alt="bg-img"
                                    className="w-[300px] h-[500px] rounded-md object-cover object-center"
                                />
                            </CarouselItem>
                            <CarouselItem className="flex justify-center">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/image/galery/Image5.jpeg"
                                    alt="bg-img"
                                    className="w-[300px] h-[500px] rounded-md object-cover object-center"
                                />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
export default ImageGalery;
