import Image from "next/image";

type ValueItem = {
  title: string;
  img: string;
  icon: string;
  text: string;
};
export default function Clients() {
  const logos = [
    "/logo1.png",
    "/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
    "/logo6.png",
  ];

  return (
    <section className="py-20 px-6 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-6">
          Our Clients & Partners.
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-12">
          We serve a wide range of clients including individual investors,
          corporations, and government entities, building relationships based on
          trust and transparency. We take pride in the diversity of our
          clientele, which includes high-ranking executives, entrepreneurs, and
          professionals from various fields, as well as a multicultural
          community of international residents—reflecting our position as a
          trusted choice for a diverse and progressive society.
        </p>

        {/* Logos */}
        <div className="bg-white shadow-lg rounded-xl p-10 border border-gray-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 place-items-center">
            {logos.map((logo: string, i) => (
              <div
                key={i}
                className="w-full h-16 bg-gray-200 rounded-md relative overflow-hidden"
              >
                <Image
                fill

                  src={logo}
                  alt={`partner-${i}`}
                  className="object-contain w-full h-full p-2"
                />
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
