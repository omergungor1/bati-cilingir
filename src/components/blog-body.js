"use client";
import Image from "next/image";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Phone } from "lucide-react";


function blogBody({ title, desc, img, alt }) {
    return (
        <section className="px-8 py-40">
            <div className="container mx-auto">
                <Card color="transparent" shadow={false} className="">
                    <CardBody className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4">
                        <div className="w-full xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full">
                            <Image
                                width={768}
                                height={768}
                                src={img}
                                alt={alt}
                                className="w-full h-full scale-110 object-cover"
                            />
                        </div>
                        <div className="col-span-2 w-full">
                            <Typography
                                variant="h3"
                                color="blue-gray"
                                className="mb-4 font-bold"
                            >
                                {title}
                            </Typography>
                            <Typography className="mb-1 w-full font-normal !text-gray-500">
                                {desc}
                            </Typography>
                            <div className="pt-4">
                                <a href="tel:05426910157">
                                    <Button className="flex gap-2 items-center !bg-[#f26419]  px-10"><Phone size={18} />HEMEN ARA</Button>
                                </a>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </section>
    );
}

export default blogBody;
