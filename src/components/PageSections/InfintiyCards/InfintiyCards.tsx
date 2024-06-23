"use client"

import Image from "next/image";
import { useEffect } from "react";
import card1 from "../../../../public/images/profilecards/1.jpeg"
import card2 from "../../../../public/images/profilecards/2.jpeg"
import card3 from "../../../../public/images/profilecards/3.jpeg"
import card4 from "../../../../public/images/profilecards/4.jpeg"
import card5 from "../../../../public/images/profilecards/5.jpeg"
import ellispse from "../../../../public/images/profilecards/Ellipse 47.png"


const InfinityCards: React.FC = () => {
    useEffect(() => {
        const scrollers = document.querySelectorAll<HTMLElement>(".scroller");

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", "true");

                const scrollerInner = scroller.querySelector<HTMLElement>(".scroller__inner");
                if (!scrollerInner) return;

                const scrollerContent = Array.from(scrollerInner.children);

                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true) as HTMLElement;
                    duplicatedItem.setAttribute("aria-hidden", "true");
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }, []);

    return (
        <div className="scroller my-28" data-speed="fast">
            <div className="scroller__inner flex gap-4">


              


                <div className="max-w-[270px] text-white bg-[#1F54644D] bg-opacity-30 rounded-3xl shadow-md ">
                    <div className="relative rounded-lg py-3">
                        <div className="photo-wrapper">
                            <Image
                                className="w-32  h-32 rounded-full mx-auto"
                                src={card2} alt=""
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="p-5">
                            <h3 className="text-center text-md  leading-8">Lorem ipsum dolor</h3>
                            <h3 className="text-center text-base leading-8">Lorem ipsum dolor</h3>
                            <div className="text-xs font-light my-3">
                                <div className="px-2 py-2">Lorem ipsum dolor sit amet consectetur.</div>
                                <div className="px-2 py-2">Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum. </div>
                            </div>
                        </div>
                        <Image
                            className="absolute bottom-0 left-0 w-10 h-10 "
                            src={ellispse} alt=""
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>

                <div className="max-w-[270px] text-white bg-[#1F54644D] bg-opacity-30 rounded-3xl shadow-md ">
                    <div className="relative rounded-lg py-3">
                        <div className="photo-wrapper">
                            <Image
                                className="w-32  h-32 rounded-full mx-auto"
                                src={card3} alt=""
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="p-5">
                            <h3 className="text-center text-md  leading-8">Lorem ipsum dolor</h3>
                            <h3 className="text-center text-base leading-8">Lorem ipsum dolor</h3>
                            <div className="text-xs font-light my-3">
                                <div className="px-2 py-2">Lorem ipsum dolor sit amet consectetur.</div>
                                <div className="px-2 py-2">Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum. </div>
                            </div>
                        </div>
                        <Image
                            className="absolute bottom-0 left-0 w-10 h-10 "
                            src={ellispse} alt=""
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>


                <div className="max-w-[270px] text-white bg-[#1F54644D] bg-opacity-30 rounded-3xl shadow-md ">
                    <div className="relative rounded-lg py-3">
                        <div className="photo-wrapper">
                            <Image
                                className="w-32  h-32 rounded-full mx-auto"
                                src={card4} alt=""
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="p-5">
                            <h3 className="text-center text-md  leading-8">Lorem ipsum dolor</h3>
                            <h3 className="text-center text-base leading-8">Lorem ipsum dolor</h3>
                            <div className="text-xs font-light my-3">
                                <div className="px-2 py-2">Lorem ipsum dolor sit amet consectetur.</div>
                                <div className="px-2 py-2">Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum. </div>
                            </div>
                        </div>
                        <Image
                            className="absolute bottom-0 left-0 w-10 h-10 "
                            src={ellispse} alt=""
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
                <div className="max-w-[270px] text-white bg-[#1F54644D] bg-opacity-30 rounded-3xl shadow-md ">
                    <div className="relative rounded-lg py-3">
                        <div className="photo-wrapper">
                            <Image
                                className="w-32  h-32 rounded-full mx-auto"
                                src={card5} alt=""
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="p-5">
                            <h3 className="text-center text-md  leading-8">Lorem ipsum dolor</h3>
                            <h3 className="text-center text-base leading-8">Lorem ipsum dolor</h3>
                            <div className="text-xs font-light my-3">
                                <div className="px-2 py-2">Lorem ipsum dolor sit amet consectetur.</div>
                                <div className="px-2 py-2">Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum. </div>
                            </div>
                        </div>
                        <Image
                            className="absolute bottom-0 left-0 w-10 h-10 "
                            src={ellispse} alt=""
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
                <div className="max-w-[270px] text-white bg-[#1F54644D] bg-opacity-30 rounded-3xl shadow-md ">
                    <div className="relative rounded-lg py-3">
                        <div className="photo-wrapper">
                            <Image
                                className="w-32  h-32 rounded-full mx-auto"
                                src={card1} alt=""
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="p-5">
                            <h3 className="text-center text-md  leading-8">Lorem ipsum dolor</h3>
                            <h3 className="text-center text-base leading-8">Lorem ipsum dolor</h3>
                            <div className="text-xs font-light my-3">
                                <div className="px-2 py-2">Lorem ipsum dolor sit amet consectetur.</div>
                                <div className="px-2 py-2">Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum. </div>
                            </div>
                        </div>
                        <Image
                            className="absolute bottom-0 left-0 w-10 h-10 "
                            src={ellispse} alt=""
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfinityCards;