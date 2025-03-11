

"use client";
import React from 'react';
import Image from "next/image";

const Collage = () => {
    const images = [
        { src: "/image1.jpeg", span: "row-span-2", mobileColSpan: "col-span-1", mobileRowSpan: "row-span-2" },
        { src: "/image2.jpeg", span: "row-span-1", colSpan: "col-span-2", mobileColSpan: "col-span-2", mobileRowSpan: "row-span-1" },
        { src: "/image3.jpeg", span: "row-span-1", colSpan: "col-span-2", mobileColSpan: "col-span-1", mobileRowSpan: "row-span-1" },
        { src: "/image4.jpeg", span: "row-span-1", mobileColSpan: "col-span-2", mobileRowSpan: "row-span-1" },
        { src: "/image5.jpeg", span: "row-span-2", colSpan: "col-span-1", mobileColSpan: "col-span-1", mobileRowSpan: "row-span-2" },
        { src: "/image6.jpeg", span: "row-span-1", colSpan: "col-span-2", mobileColSpan: "col-span-2", mobileRowSpan: "row-span-1" },
        { src: "/image7.jpeg", span: "row-span-1", colSpan: "col-span-1", mobileColSpan: "col-span-1", mobileRowSpan: "row-span-1" },
    ];

    return (
        <div className="bg-black  text-white px-4 sm:px-6 lg:px-10 py-10 sm:py-20">
            <section className="mt-0    sm:mt-0 px-2 sm:px-4">
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 p-3 sm:p-5 md:p-10 grid-flow-dense auto-rows-[8rem] sm:auto-rows-[12rem] md:auto-rows-[15rem]">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`relative ${image.mobileColSpan || ""} ${image.mobileRowSpan || ""} md:${
                                image.colSpan || ""
                            } md:${image.span || ""}`}
                        >
                            <Image
                                src={image.src}
                                alt={`Gallery Image ${index + 1}`}
                                width={400}
                                height={600}
                                className="w-full h-full object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-103"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Collage;
