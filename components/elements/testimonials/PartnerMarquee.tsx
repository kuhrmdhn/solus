import FadeIn from "@/components/motion/FadeIn";
import Image from "next/image";
import React from "react";

export default function PartnerMarquee() {
  const partnerCompanyName = ["wealthsimple", "notion", "medium", "braze", "sonos"];

  return (
    <FadeIn className="h-full flex flex-col sm:flex-row items-center justify-between bg-white rounded-2xl">
      <section className="w-full sm:w-1/6 h-12 sm:h-full hidden sm:flex justify-center items-center text-base xl:text-2xl">Our Partners</section>
      <div className="w-5/6 flex overflow-x-hidden marquee-mask items-center relative h-14 lg:h-20">
        {[...partnerCompanyName,...partnerCompanyName].map((company, i) => (
          <div
            className="w-[50px] lg:w-[150px] absolute left-full animate-marquee"
            style={{ animationDelay: `${(i + 1) * 2}s` }}
            key={i}
          >
            <Image
              className="w-full shrink-0"
              src={`/images/company/${company}.svg`}
              alt={`${company} logo`}
              height={80}
              width={150}
            />
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
