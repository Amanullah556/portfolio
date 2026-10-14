import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";

const STATS = [
  { label: "Projects Completed", value: "2+" },
  { label: "Client Rating", value: "4.9" },
  { label: "Years Experience", value: "1+" },
];

export default function Stats() {
  return (
    <section id="stats" className="mx-auto max-w-5xl scroll-mt-8 px-6 pb-24">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <GlassCard className="flex flex-col items-center gap-2 px-6 py-8 text-center transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]">
              <span className="bg-gradient-to-r from-[#9F7B21] via-[#FFF0B3] to-[#D4AF37] bg-clip-text text-4xl font-bold text-transparent">
                {stat.value}
              </span>

              <span className="text-sm uppercase text-white/50">
                {stat.label}
              </span>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
