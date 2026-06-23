import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EXPERTISE = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    tagline: "React, Next.js",
    description:
      "Building scalable component architectures, state management patterns, and performant UIs that hold up under real production traffic.",
    tags: ["React", "Next.js",],
  },
  {
    id: "ui-engineering",
    title: "UI Engineering & Animation",
    tagline: "Tailwind CSS, Framer Motion, design systems",
    description:
      "Translating design intent into pixel-accurate, responsive interfaces with deliberate motion design. I build reusable design systems and component libraries that keep teams shipping consistently.",
    tags: ["Tailwind CSS", "Framer Motion", "Design Systems", "Figma"],
  },
  {
    id: "backend",
    title: "Backend Development",
    tagline: "Node.js, Express, REST APIs",
    description:
      "Designing clean, well-documented APIs and service layers. Experienced with authentication flows, rate limiting, caching strategies, and structuring backends that frontend teams actually enjoy working with.",
    tags: ["Node.js", "Express",  "REST APIs"],
  },
  {
    id: "database",
    title: "Database Architecture",
    tagline: "MongoDB, MYSQL",
    description:
      "Modeling data for both relational and document stores, writing efficient queries, and designing indexes that scale. I think about data integrity and access patterns before writing a single schema.",
    tags: ["MongoDB", "MySQL", "Schema Design"],
  },
  {
    id: "performance",
    title: "Performance Optimization",
    tagline: "Core Web Vitals, bundle size, caching",
    description:
      "Auditing and fixing what actually slows products down — render-blocking assets, unnecessary re-renders, oversized bundles. I treat performance as a feature, not an afterthought.",
    tags: ["Lighthouse", "Code Splitting", "Lazy Loading", "CDN Caching"],
  },
  {
    id: "devops",
    title: "DevOps & Deployment",
    tagline: "Docker,  cloud hosting",
    description:
      "Setting up reliable deployment pipelines, containerizing applications, and configuring cloud infrastructure so releases are boring — in the best way possible.",
    tags: ["Docker", "GitHub Actions"],
  },
  {
    id: "testing",
    title: "Testing & Quality",
    tagline: " React Testing Library",
    description:
      "Writing tests that catch real regressions rather than chasing coverage numbers. Unit, integration, and end-to-end testing strategies tailored to what actually breaks in production.",
    tags: [ "React Testing Library"],
  },
  {
    id: "collaboration",
    title: "Collaboration & Process",
    tagline: " code review, mentoring",
    description:
      "Working closely with designers and product managers to turn ambiguous requirements into shipped features. I write clear PRs, give constructive code reviews, and mentor junior developers.",
    tags: [ "Code Review", "Mentoring", "Technical Docs"],
  },
];

function ExpertiseItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className={`overflow-hidden rounded-2xl border backdrop-blur-xl transition-colors duration-300 ${isOpen
        ? "border-cyan-400/40 bg-white/[0.05]"
        : "border-white/10 bg-white/[0.03] hover:border-white/20"
        }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-5 px-5 py-5 text-left sm:px-7"
      >
        <span
          className={`font-mono text-xs flex-shrink-0 transition-colors duration-300 ${isOpen ? "text-cyan-400" : "text-white/30"
            }`}
        >
          0{index + 1}
        </span>

        <div className="flex-1">
          <h3
            className={`text-base font-semibold transition-colors duration-300 sm:text-lg ${isOpen ? "text-cyan-300" : "text-white"
              }`}
          >
            {item.title}
          </h3>
          <p className="mt-0.5 text-xs text-white/40 sm:text-sm">
            {item.tagline}
          </p>
        </div>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-lg transition-colors duration-300 ${isOpen
            ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-300"
            : "border-white/15 text-white/50"
            }`}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-5 pb-6 pl-[3.1rem] pr-5 sm:px-7 sm:pl-[3.6rem]">
              <p className="text-sm leading-relaxed text-white/55">
                {item.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Expertise() {
  const [openId, setOpenId] = useState(EXPERTISE[0].id);

  function handleToggle(id) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section
      id="expertise"
      className="relative w-full bg-[#05050a] px-6 py-24 text-white md:py-32"
    >
      {/* Ambient backdrop glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 bottom-1/4 h-[26rem] w-[26rem] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
            What I Do
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Areas of{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/50 md:text-base">
            A full-stack toolkit built across real production work — from
            pixel-level UI craft to backend systems and deployment.
          </p>
        </motion.div>

        {/* Accordion — two independent columns on desktop, single column on mobile */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <div className="flex flex-1 flex-col gap-4">
            {EXPERTISE.filter((_, i) => i % 2 === 0).map((item) => {
              const originalIndex = EXPERTISE.findIndex((e) => e.id === item.id);
              return (
                <ExpertiseItem
                  key={item.id}
                  item={item}
                  index={originalIndex}
                  isOpen={openId === item.id}
                  onToggle={() => handleToggle(item.id)}
                />
              );
            })}
          </div>

          <div className="flex flex-1 flex-col gap-4">
            {EXPERTISE.filter((_, i) => i % 2 === 1).map((item) => {
              const originalIndex = EXPERTISE.findIndex((e) => e.id === item.id);
              return (
                <ExpertiseItem
                  key={item.id}
                  item={item}
                  index={originalIndex}
                  isOpen={openId === item.id}
                  onToggle={() => handleToggle(item.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}