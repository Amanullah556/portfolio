
import { useId } from "react";
import { motion } from "framer-motion";

const CATEGORIES = [
  {
    name: "Frontend",
    number: "01",
    icon: "</>",
    description:
      "Modern, responsive interfaces with clean design and smooth interactions.",
    skills: [
      { label: "React", level: 95, symbol: "R" },
      { label: "JavaScript", level: 92, symbol: "JS" },
      { label: "Tailwind CSS", level: 90, symbol: "TW" },
      { label: "Next.js", level: 85, symbol: "N" },
    ],
  },
  {
    name: "Backend",
    number: "02",
    icon: "{ }",
    description:
      "Reliable server-side applications, APIs, and data management.",
    skills: [
      { label: "Node.js", level: 80, symbol: "JS" },
      { label: "Express", level: 78, symbol: "EX" },
      { label: "MongoDB", level: 75, symbol: "DB" },
      { label: "REST APIs", level: 88, symbol: "API" },
    ],
  },
  {
    name: "Tools",
    number: "03",
    icon: "⌘",
    description:
      "Development tools and workflows for building and shipping projects.",
    skills: [
      { label: "Git / GitHub", level: 90, symbol: "GH" },
      { label: "Figma", level: 82, symbol: "FG" },
      { label: "Webpack / Vite", level: 76, symbol: "VT" },
      { label: "Docker", level: 65, symbol: "DK" },
    ],
  },
];

function RingGauge({ level }) {
  const gradientId = useId().replace(/:/g, "");
  const size = 94;
  const stroke = 7;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - level / 100);

  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${level}% skill level`}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#80651D" />
            <stop offset="55%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#FFE8A3" />
          </linearGradient>
        </defs>

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.09)"
          strokeWidth={stroke}
        />

        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 1.25,
            ease: "easeOut",
            delay: 0.15,
          }}
          style={{
            filter: "drop-shadow(0 0 4px rgba(212,175,55,0.28))",
          }}
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-semibold tracking-tight text-white">
          {level}%
        </span>
      </div>
    </div>
  );
}

function SkillItem({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        delay: index * 0.07,
      }}
      whileHover={{ y: -5 }}
      className="group flex min-w-0 flex-col items-center justify-center rounded-xl border border-white/[0.07] bg-black/20 px-2 py-5 transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/[0.04] sm:px-3"
    >
      <RingGauge level={skill.level} />

      <div className="mt-4 flex h-9 w-9 items-center justify-center rounded-lg border border-[#D4AF37]/20 bg-[#D4AF37]/[0.08] font-mono text-xs font-bold text-[#D4AF37] transition-all duration-300 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/15">
        {skill.symbol}
      </div>

      <span className="mt-3 text-center text-xs font-medium leading-5 text-white/70 transition-colors duration-300 group-hover:text-[#FFE8A3] sm:text-sm">
        {skill.label}
      </span>
    </motion.div>
  );
}

export default function Skill() {
  return (
   
<section
  id="skills"
  className="relative isolate mx-3 w-auto overflow-hidden bg-[#050505] py-20 text-white sm:mx-4 sm:py-24 lg:mx-6 lg:py-28"
>

      {/* Background Details */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#D4AF37]/[0.07] blur-[120px]" />

        <div className="absolute -right-40 top-[45%] h-96 w-96 rounded-full bg-[#80651D]/[0.07] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />
      </div>

      {/* Full-Width Content */}
      <div className="relative w-full">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl px-4 text-center sm:mb-16 sm:px-6 lg:mb-20"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/[0.06] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-[#E6C65C] sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.7)]" />
            My Capabilities
          </span>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Skills &amp;
            <br className="sm:hidden" />{" "}
            <span className="bg-gradient-to-r from-[#A17D24] via-[#FFE8A3] to-[#D4AF37] bg-clip-text text-transparent">
              Expertise.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
            The technologies and tools I use to transform ideas into
            functional, responsive, and engaging digital experiences.
          </p>

          <div className="mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/70" />
            <span className="h-2 w-2 rotate-45 border border-[#D4AF37] bg-[#D4AF37]/20" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/70" />
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="flex w-full flex-col gap-7 lg:gap-8">
          {CATEGORIES.map((category, ci) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{
                duration: 0.55,
                delay: ci * 0.08,
              }}
              className="group/category relative w-full overflow-hidden border-y border-white/[0.10] bg-[#0A0A0A]/90 transition-colors duration-300 hover:border-[#D4AF37]/30 sm:rounded-2xl sm:border"
            >
              {/* Gold Accent */}
              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#FFE8A3] via-[#D4AF37]/50 to-transparent opacity-70 transition-opacity group-hover/category:opacity-100" />

              <div className="grid w-full grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[250px_minmax(0,1fr)]">
                {/* Category Information */}
                <div className="relative flex flex-col justify-center border-b border-white/[0.08] p-5 sm:p-8 lg:border-b-0 lg:border-r">
                  <span className="absolute right-5 top-5 font-mono text-xs tracking-widest text-white/25">
                    {category.number}
                  </span>

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/15 to-transparent font-mono text-lg font-bold text-[#E8C85B] shadow-[inset_0_0_20px_rgba(212,175,55,0.04)]">
                    {category.icon}
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {category.name}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/45">
                    {category.description}
                  </p>

                  <div className="mt-6 h-[2px] w-10 rounded-full bg-[#D4AF37] transition-all duration-300 group-hover/category:w-16" />
                </div>

                {/* Skill Cards */}
                <div className="grid w-full grid-cols-2 gap-3 p-3 sm:grid-cols-4 sm:gap-4 sm:p-5 lg:p-6">
                  {category.skills.map((skill, i) => (
                    <SkillItem
                      key={skill.label}
                      skill={skill}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col items-center justify-center gap-3 px-4 text-center sm:mt-16"
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35 sm:text-xs">
            Better Skills
            <span className="mx-3 text-[#D4AF37]">/</span>
            Better Solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
}
