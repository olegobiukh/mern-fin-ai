import { motion, type Variants } from "framer-motion";
import { Globe, UserCheck } from "lucide-react";
import type { FunctionComponent } from "react";

// interface MainProps {}

// 1. Define a simple variant to keep your code clean
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// const Main: FunctionComponent<MainProps> = () => {
const Main: FunctionComponent = () => {
  return (
    <div className="bg-black min-h-screen w-full py-10">
      <div className="max-w-[1200px] w-full mx-auto px-4">
        {/* THIS IS YOUR ONLY GRID PARENT */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          {/* 1. THE YELLOW CARD (Left - Tall) */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-1 lg:row-span-2 bg-[#FFD700] p-6 rounded-3xl text-black flex flex-col justify-between"
          >
            <div>
              <h1 className="text-4xl font-bold">$2.6M</h1>
              <p className="text-sm font-semibold">Total Assets</p>
            </div>
            <p className="text-xs opacity-60">Checkup Occupancy Rate 60.4%</p>
          </motion.div>

          {/* 2. THE TOP BLACK CARDS (Middle) */}
          <motion.div
            variants={cardVariants}
            className="bg-[#5e5557] p-6 rounded-3xl text-white flex justify-between"
          >
            <div>
              <h2 className="text-4xl font-bold">8</h2>
              <p className="text-[10px] opacity-50 mt-1 uppercase tracking-wider">
                Global Hospitals
              </p>
            </div>
            <span className="opacity-30">
              <Globe />
            </span>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-[#5e5557] p-6 rounded-3xl text-white flex justify-between"
          >
            <div>
              <h2 className="text-4xl font-bold">38</h2>
              <p className="text-[10px] opacity-50 mt-1 uppercase tracking-wider">
                Doctors
              </p>
            </div>
            <span className="opacity-30">
              <UserCheck />
            </span>
          </motion.div>

          {/* 3. THE LIGHT BLUE CARD (Far Right - Tall) */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-1 lg:row-span-2 bg-[#57C5F7] p-6 rounded-3xl text-black flex flex-col justify-between"
          >
            <div className="flex justify-between">
              <h2 className="text-5xl font-bold">57/80</h2>
              <span className="opacity-40">💠</span>
            </div>
            <p className="text-sm font-bold">Available Occupancy Bed</p>
          </motion.div>

          {/* 4. THE WIDE LIGHT BLUE CARD (Middle Row) */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-2 bg-[#57C5F7] p-6 rounded-3xl text-black flex items-center justify-between"
          >
            <h2 className="text-4xl font-bold">57/80</h2>
            <p className="font-semibold">Available Occupancy</p>
          </motion.div>

          {/* 5. LIME GREEN (Bottom Wide) */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-2 bg-[#C1D264] p-6 rounded-3xl text-black flex justify-between items-end"
          >
            <h2 className="text-5xl font-bold">1,40,570</h2>
            <span className="text-4xl">🇸🇬</span>
          </motion.div>

          {/* 6. ORANGE (Bottom Small) */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-1 bg-[#F16A4B] p-6 rounded-3xl text-black flex flex-col justify-between"
          >
            <h2 className="text-4xl font-bold">^22%</h2>
            <p className="text-[10px] font-bold border-t border-black/10 pt-2">
              Visited Patients
            </p>
          </motion.div>

          {/* 7. GRAY (Bottom Small) */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-1 bg-[#9DA2A1] p-6 rounded-3xl text-black"
          >
            <p className="text-xs font-bold leading-tight">
              The Premium Healthcare Center
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
