import Image from "next/image";

type ValueItem = {
  title: string;
  img: string;
  icon: string;
  text: string;
};

export default function OurValue() {
  const values = [
    {
      title: "Quality",
      img: "/value1.jpg",
      icon: "🏗️",
      text: "Delivering projects with premium finishing, materials and details.",
    },
    {
      title: "Trust",
      img: "/value2.jpg",
      icon: "🤝",
      text: "Building long-term partnerships based on transparency and honesty.",
    },
    {
      title: "Innovation",
      img: "/value3.jpg",
      icon: "💡",
      text: "Adopting creative solutions to shape smarter future living.",
    },
    {
      title: "Sustainability",
      img: "/value4.jpg",
      icon: "🌱",
      text: "Developing environmentally responsible and energy-efficient communities.",
    },
    {
      title: "Community",
      img: "/value5.jpg",
      icon: "🏘️",
      text: "Creating spaces that bring people together and enrich everyday living.",
    },
    {
      title: "Commitment",
      img: "/value6.jpg",
      icon: "🎯",
      text: "Delivering on expectations — on time, with excellence and accuracy.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12">Our Value.</h2>

        {/* BIG CARD */}
        <div className="bg-gray-50 shadow-lg rounded-2xl p-10 border border-gray-200">
          {/* 6 GRID CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {values.map((item: ValueItem, i: number) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 flex flex-col gap-4 border border-gray-200"
              >
                {/* IMAGE */}
                <div className="relative w-full h-32 bg-gray-300 rounded-md overflow-hidden">
                  <Image
                    fill
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* ICON */}
                <div className="text-4xl">{item.icon}</div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold">{item.title}</h3>

                {/* TEXT */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
