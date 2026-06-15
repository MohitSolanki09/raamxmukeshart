"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>("[data-animate]").forEach((el) => {
                gsap.fromTo(
                    el,
                    {
                        y: 70,
                        opacity: 0,
                        filter: "blur(10px)",
                    },
                    {
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        duration: 1.1,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 82%",
                            once: true,
                        },
                    }
                );
            });

            gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((section) => {
                const items = section.querySelectorAll("[data-stagger-item]");

                gsap.fromTo(
                    items,
                    {
                        y: 50,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                        stagger: 0.12,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 78%",
                            once: true,
                        },
                    }
                );
            });
        });

        return () => ctx.revert();
    }, []);

    return null;
}