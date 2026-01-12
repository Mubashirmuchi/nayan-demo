"use client";

export default function Goals() {
  return (
    <section className="py-20 px-6 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12">Our Values.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Our Goal */}
          <div className="bg-white shadow-md rounded-lg p-8 flex flex-col gap-4 border border-gray-200">
            <h3 className="text-2xl font-bold">Our Goal</h3>
            <p className="text-right text-gray-700 leading-relaxed">
              ﺑﻨـــﺎء ﻣﺠﺘﻤﻌـــﺎت ﻋﻤﺮاﻧﻴـــﺔ ﻣﺘﻜﺎﻣﻠﺔ ﺗﻌﺰز
              ﺟﻮدة اﻟﺤﻴﺎة ﻓﻲ ﻣﺪﻳﻨﺔ اﻟﺮﻳﺎض واﻟﻤﻤﻠﻜﺔ،
              ﻋﱪ ﻣﺸﺎرﻳﻊ ﻋﺎﻟﻴﺔ اﻟﺠﻮدة ﺗﺪﻋﻢ رؤﻳﺔ 2030.
            </p>
            <p className="text-gray-600 leading-relaxed">
              To build integrated urban communities that enhance quality
              of life in Riyadh and across Saudi Arabia through
              high-quality projects supporting Vision 2030.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-white shadow-md rounded-lg p-8 flex flex-col gap-4 border border-gray-200">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-right text-gray-700 leading-relaxed">
              ﺑﻨﺎء ﻣﺸﺎرﻳــــــﻊ ﻋﻘﺎرﻳـــﺔ ﻣﺘﻜﺎﻣﻠﺔ ﺗﺤﻘﻖ
              ﻃﻤﻮﺣﺎت اﻷﻓﺮاد واﻟﻤﺴـــﺘﺜﻤﺮﻳﻦ وﺗﻀﻴﻒ
              ﻗﻴﻤﺔ ﺣﻘﻴﻘﻴﺔ ﻟﻠﻤﺪن واﻟﻤﺠﺘﻤﻌﺎت.
            </p>
            <p className="text-gray-600 leading-relaxed">
              To develop integrated real estate projects that fulfill
              the ambitions of individuals and investors while adding
              genuine value to cities and communities.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white shadow-md rounded-lg p-8 flex flex-col gap-4 border border-gray-200">
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="text-right text-gray-700 leading-relaxed">
              أن ﻧﻜـﻮن اﻟﺨﻴــــﺎر اﻷول ﻓـﻲ اﻟﺘﻄــــﻮﻳــــﺮ
              واﻻﺳﺘﺜــــﻤﺎر اﻟﻌـــﻘـــــﺎري، ﻋﱪ ﺗﻘـــﺪﻳــــﻢ
              ﻣﺠﺘﻤﻌﺎت ﺳـﻜﻨﻴﺔ وﺗﺠﺎرﻳﺔ ﻋﺎﻟﻴــــﺔ اﻟﺠﻮدة
              ﺗﺘﻤﲒ ﺑﺎﻟﻜﻔﺎءة واﻟﻤﻮﻗﻊ واﻟﺘﺼﻤﻴﻢ.
            </p>
            <p className="text-gray-600 leading-relaxed">
              To be the first choice in real estate development and
              investment by delivering high-quality residential and
              commercial communities that excel in efficiency,
              location, and design.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
