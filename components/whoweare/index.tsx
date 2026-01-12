import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <section className="py-20 px-6 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <div className="relative w-full h-80 md:h-[28rem] bg-gray-300 overflow-hidden rounded-md">
          <Image
            fill
            src="/hero.png"
            alt="About Nayan"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6">Who We Are.</h2>

          <p className="leading-relaxed text-gray-700 text-lg">
            Nayan was established as a distinguished brand in the real estate
            sector, backed by over 20 years of expertise and innovation. The
            company stands out for delivering premium projects that contribute
            to shaping a modern urban future aligned with Saudi Arabia’s Vision
            2030. Combining contemporary design and exceptional quality, Nayan
            is committed to meeting the needs of individuals and investors with
            full transparency and professionalism.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
