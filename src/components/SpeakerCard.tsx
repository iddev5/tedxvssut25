"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

type SpeakerCardProps = {
    id?: string;
    name: string;
    bio: string;
    title: string;
    link?: string;
    children?: React.ReactNode;
};

export const SpeakerCard = (props: SpeakerCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (cardRef.current) {
            gsap.fromTo(
                ".card",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, stagger: 0.1, ease: "power3.out" }
            );
            cardRef.current.classList.remove("opacity-0");
        }
    }, []); 

    useEffect(() => {
        if (open) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [open]);

    return (
        <>
            <AnimatePresence>
                <motion.div
                    ref={cardRef}
                    layoutId={`card-${props.id}`}
                    transition={{ type: "spring", stiffness: 250, damping: 30, velocity: 80 }}
                    className="z-20 card opacity-0 relative basis-[450px] shrink-1 grow-1 h-[500px] rounded-[10px] border-2 border-gray-300 max-md:h-[270px] drop-shadow-md drop-shadow-gray-600 cursor-pointer"
                    onClick={() => setOpen(true)}
                >
                    <motion.div className="relative w-full h-full overflow-hidden border-2 border-gray-300 rounded-[10px] outline-2 outline-gray-300">
                        {props.children}
                    </motion.div>

                    <motion.div className="absolute inset-0 flex flex-col justify-end pointer-events-none">
                        <motion.div className="h-auto w-auto bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-bl-[10px] rounded-br-[10px] p-2">
                            <motion.p className="ml-3 max-md:ml-[5px] text-white text-[25px] max-md:text-[22px] font-normal">
                                {props.name}
                            </motion.p>
                            <motion.p className="w-[150px] max-md:w-[200px] wrap-break-word ml-3 max-md:ml-[5px] text-white/80 text-[16px] max-md:text-[15px]">
                                {props.title}
                            </motion.p>
                        </motion.div>

                        <div className="absolute inset-0 flex flex-col justify-end items-end p-2 pointer-events-none">
                            <div className="pointer-events-auto">
                                <button
                                    type="button"
                                    className="bg-red-800 border-2 border-white rounded-full p-[6px] max-md:p-[3px] cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setOpen(true);
                                    }}
                                >
                                    <ChevronRight className="text-white" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed inset-0 flex justify-center items-center z-40 bg-black/40 backdrop-blur-[5px]"
                        onClick={() => setOpen(false)}
                    >
                        <motion.div
                            layoutId={`card-${props.id}`}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ type: "spring", stiffness: 250, damping: 30 }}
                            className="z-50 w-[800px] h-[90%] max-[900px]:w-[90%] min-[1500px]:w-[70%] rounded-[10px] border-2 border-gray-300 drop-shadow-md drop-shadow-gray-600 cursor-pointer bg-white overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.div className="relative w-full h-full overflow-hidden border-2 border-gray-300 outline-2 outline-gray-300 rounded-[10px]">
                                {props.children}
                            </motion.div>

                            <motion.div className="absolute inset-0 flex flex-col justify-end pointer-events-none">
                                <motion.div className="h-auto w-auto bg-gradient-to-t from-black/85 via-black/75 to-transparent rounded-bl-[10px] rounded-br-[10px] p-4">
                                    <motion.p className="ml-3 text-left text-white text-[30px] font-semibold">
                                        {props.name}
                                    </motion.p>
                                    <motion.p className="w-[200px] ml-3 text-left text-white/80 text-[20px]">
                                        {props.title}
                                    </motion.p>
                                    <motion.p className="ml-3 mt-3 h-fit w-fit overflow-y-auto scrollbar-hide text-[18px] text-white/80 mb-[7px]">
                                        {props.bio}
                                    </motion.p>
                                </motion.div>
                            </motion.div>

                            <motion.div className="absolute inset-0 flex flex-row justify-end-safe items-start pointer-events-auto mr-2 mt-2">
                                <motion.button
                                    className="rounded-full p-[6px] bg-black/40 backdrop-blur-[14px] cursor-pointer"
                                    onClick={() => setOpen(false)}
                                >
                                    <X className="text-white" />
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
