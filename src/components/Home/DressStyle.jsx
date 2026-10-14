import React from "react";

const DressStyle = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="rounded-2xl p-5 lg:p-10 bg-gray-200">
        <h2 className="text-center text-5xl font-anton uppercase">
          BROWSE BY DRESS STYLE
        </h2>

        <div className="mt-10 grid gap-5 grid-cols-1 lg:grid-cols-[3fr_2fr_3fr]">
          {/* Casual */}
          <div
            className="bg-white h-55 lg:h-70 bg-right bg-no-repeat rounded-2xl p-4 md:p-6"
            style={{
              backgroundImage: "url('/dress-style/Casual.png')",
            }}
          >
            <h2 className="text-2xl font-semibold">Casual</h2>
          </div>

          {/* Formal */}
          <div
            className="bg-white h-55 lg:h-70 bg-right bg-no-repeat rounded-2xl p-4 md:p-6 col-span-2"
            style={{
              backgroundImage: "url('/dress-style/Formal.png')",
            }}
          >
            <h2 className="text-2xl font-semibold">Formal</h2>
          </div>

          {/* Party */}
          <div
            className="bg-white h-55 lg:h-70 bg-right bg-no-repeat bg-cover rounded-2xl p-4 md:p-6 col-span-2"
            style={{
              backgroundImage: "url('/dress-style/Party.png')",
            }}
          >
            <h2 className="text-2xl font-semibold">Party</h2>
          </div>

          {/* Gym */}
          <div
            className="bg-white h-55 lg:h-70 bg-right bg-no-repeat bg-cover rounded-2xl p-4 md:p-6"
            style={{
              backgroundImage: "url('/dress-style/Gym.png')",
            }}
          >
            <h2 className="text-2xl font-semibold">Gym</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
