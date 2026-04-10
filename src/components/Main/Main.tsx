import type { FunctionComponent } from "react";

// interface MainProps {}

// const Main: FunctionComponent<MainProps> = () => {
const Main: FunctionComponent = () => {
  return (
    <div className="bg-black min-h-screen w-full py-10">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="bg-black min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 auto-rows-[180px]">
          {/* 1. THE YELLOW CARD (Left - Tall) */}
          <div className="lg:col-span-1 lg:row-span-2 bg-[#FFD700] p-6 rounded-3xl text-black flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold">$2.6M</h1>
              <p className="text-sm font-semibold">Total Assets</p>
            </div>
            <p className="text-xs opacity-60">Checkup Occupancy Rate 60.4%</p>
          </div>

          {/* 2. THE TOP BLACK CARDS (Middle) */}
          <div className="bg-[#5e5557] p-6 rounded-3xl text-white flex justify-between">
            <div>
              <h2 className="text-4xl font-bold">8</h2>
              <p className="text-[10px] opacity-50 mt-1 uppercase tracking-wider">
                Global Hospitals
              </p>
            </div>
            <span className="opacity-30">🌐</span>
          </div>

          <div className="bg-[#5e5557] p-6 rounded-3xl text-white flex justify-between">
            <div>
              <h2 className="text-4xl font-bold">38</h2>
              <p className="text-[10px] opacity-50 mt-1 uppercase tracking-wider">
                Doctors
              </p>
            </div>
            <span className="opacity-30">👨‍⚕️</span>
          </div>

          {/* 3. THE LIGHT BLUE CARD (Far Right - Tall) */}
          <div className="lg:col-span-1 lg:row-span-2 bg-[#57C5F7] p-6 rounded-3xl text-black flex flex-col justify-between">
            <div className="flex justify-between">
              <h2 className="text-5xl font-bold">57/80</h2>
              <span className="opacity-40">💠</span>
            </div>
            <p className="text-sm font-bold">Available Occupancy Bed</p>
          </div>

          {/* 4. THE WIDE LIGHT BLUE CARD (Middle Row) */}
          <div className="lg:col-span-2 bg-[#57C5F7] p-6 rounded-3xl text-black flex items-center justify-between">
            <h2 className="text-4xl font-bold">57/80</h2>
            <p className="font-semibold">Available Occupancy</p>
          </div>

          {/* 5. LIME GREEN (Bottom Wide) */}
          <div className="lg:col-span-2 bg-[#C1D264] p-6 rounded-3xl text-black flex justify-between items-end">
            <h2 className="text-5xl font-bold">1,40,570</h2>
            <span className="text-4xl">🇸🇬</span>
          </div>

          {/* 6. ORANGE (Bottom Small) */}
          <div className="lg:col-span-1 bg-[#F16A4B] p-6 rounded-3xl text-black flex flex-col justify-between">
            <h2 className="text-4xl font-bold">^22%</h2>
            <p className="text-[10px] font-bold border-t border-black/10 pt-2">
              Visited Patients
            </p>
          </div>

          {/* 7. GRAY (Bottom Small) */}
          <div className="lg:col-span-1 bg-[#9DA2A1] p-6 rounded-3xl text-black">
            <p className="text-xs font-bold leading-tight">
              The Premium Healthcare Center
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
