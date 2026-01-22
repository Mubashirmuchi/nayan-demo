import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <section className="bg-[#1a1a1a] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Card 1 */}
        <div className="flex flex-col items-start text-left space-y-4">
          <div className="text-white/30 text-6xl">
            {/* Replace with icon or image */}
            {/* <Image src="/wallet.png" alt="Wallet Icon" width={48} height={48} /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shield-check-icon lucide-shield-check"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold">Modern & Safe Living</h3>
          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            ornare felis. Nam velit neque, blandit id placerat.
          </p>
          <button className="mt-4 bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition flex items-center gap-2">
            READ MORE →
          </button>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-start text-left space-y-4">
          <div className="text-white/30 text-6xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin-house-icon lucide-map-pin-house"
            >
              <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
              <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
              <path d="M18 22v-3" />
              <circle cx="10" cy="10" r="3" />
            </svg>{" "}
          </div>
          <h3 className="text-2xl font-bold">Peaceful Location</h3>
          <p className="text-gray-300 leading-relaxed">
            Mauris ac ornare felis. Nam velit neque, blandit id placerat eu,
            venenatis at purus. Nunc maximus ultrices lacus.
          </p>
          <button className="mt-4 bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition flex items-center gap-2">
            READ MORE →
          </button>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-start text-left space-y-4">
          <div className="text-white/30 text-6xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-hand-coins-icon lucide-hand-coins"
            >
              <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
              <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
              <path d="m2 16 6 6" />
              <circle cx="16" cy="9" r="2.9" />
              <circle cx="6" cy="5" r="3" />
            </svg>{" "}
          </div>
          <h3 className="text-2xl font-bold">Great Starting Prices</h3>
          <p className="text-gray-300 leading-relaxed">
            Nam velit neque, blandit id placerat eu, venenatis at purus. Nunc
            maximus ultrices lacus eu fringilla.
          </p>
          <button className="mt-4 bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition flex items-center gap-2">
            READ MORE →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section2;
