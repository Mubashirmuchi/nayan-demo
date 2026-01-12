import React from "react";

const Section3 = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-gray-800 text-4xl font-extrabold mb-12">
          About the project.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT COLUMN */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Place where you find yourself
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              Nam in sodales massa. Donec at ullamcorper diam. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Vivamus et ornare leo, a commodo tellus.
              Suspendisse potenti. Ut posuere viverra lectus non scelerisque.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start gap-3">
                <span className="text-xl">✔</span>
                Quite and peaceful location near the nature
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">✔</span>
                Shopping and fitness center right inside the complex
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">✔</span>
                Lot of parking places, even for your visitors
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">✔</span>
                Many play areas for your kids
              </li>
            </ul>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col">
            {/* about.mp4 */}

            <video
              autoPlay
              muted
              className=" rounded-md h-64 md:h-80 flex items-center justify-center relative"
              controls
            >
              <source
                src="https://dms.licdn.com/playlist/vid/v2/D5605AQGSCqe3dW0sZg/mp4-720p-30fp-crf28/B56ZUfNiCnHoBg-/0/1739985405063?e=1768827600&v=beta&t=9KXYuJU7Fb_b430EMXAqjfwi5z3bXgAayqWekgwlbiE"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            {/* Video placeholder */}
            {/* <div className="bg-gray-700 rounded-md h-64 md:h-80 flex items-center justify-center relative">
              <button className="h-16 w-16 rounded-full border-4 border-white flex items-center justify-center">
                ▶
              </button>
            </div> */}

            <p className="text-sm text-gray-500 mt-3">
              Let’s check the benefits of this project from the architect
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
