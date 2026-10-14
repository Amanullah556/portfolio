
import { motion } from "framer-motion";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen w-full overflow-hidden bg-[#050505] text-white selection:bg-[#D4AF37]/30 selection:text-[#FFE8A3]">

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Top Gold Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[min(90vw,900px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.08] blur-[140px]" />

        {/* Side Ambient Glow */}
        <div className="absolute -left-40 top-[35%] h-80 w-80 rounded-full bg-[#80651D]/[0.06] blur-[120px]" />

        <div className="absolute -right-40 top-[65%] h-80 w-80 rounded-full bg-[#D4AF37]/[0.045] blur-[120px]" />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        <Hero />
        <Stats />
      </motion.div>

    </main>
  );
}

