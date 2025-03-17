import React, { useState } from "react";

export const JanAhaarAvailability: React.FC = () => {
  const [pnr, setPnr] = useState<string>("");

  const cityList = [
    "NEW DELHI", "KANPUR", "ASANSOL", "KOLKATA", "MUMBAI", "CHAPRA",
    "GWALIOR", "CHENNAI", "INDORE", "KATRA", "NAGPUR", "JAIPUR",
    "PHAGWARA", "PATNA", "MATHURA"
  ];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 10) {
      setPnr(event.target.value);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center">
      <div className="bg-white w-full max-w-3xl p-6 rounded-md shadow-md">
        
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Track Ahaar Logo" className="h-10" />
          <p className="text-gray-500">Home &gt; <span className="font-semibold">Jan Ahaar Availability</span></p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold">
            <span className="text-orange-500">Enter your PNR</span> and know Jan Ahaar availability on your journey
          </h2>

          <div className="border rounded-md p-4 mt-4 shadow-sm">
            <label className="block text-gray-700 font-semibold">Enter Your PNR</label>
            
            <div className="flex space-x-2 mt-2">
              {Array(10).fill(0).map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  value={pnr[i] || ""}
                  onChange={handleInputChange}
                  className="w-10 h-10 text-center border rounded-full text-lg font-semibold"
                />
              ))}
            </div>

            <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
              Submit
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold">
            <span className="text-orange-500">Explore</span> Jan Ahaar outlets in India
          </h2>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {cityList.map((city, index) => (
              <div key={index} className="border rounded-md p-3 text-center font-semibold text-gray-700">
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
