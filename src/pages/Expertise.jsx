import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EXPERTISE = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    tagline: "React, Next.js, Modern UI",
    description:
      "Building reusable component architectures, responsive interfaces, and maintainable frontend applications. I focus on clean code, smooth interactions, accessibility, and creating user experiences that work across devices.",
    tags: ["React", "Next.js", "JavaScript"],
    icon: "</>",
  },
  {
    id: "ui-engineering",
    title: "UI Engineering & Animation",
    tagline: "Design Systems, Motion, UI",
    description:
      "Turning design ideas into polished, responsive interfaces with thoughtful motion. I use reusable components, consistent design systems, and purposeful animations to create interfaces that feel modern and intuitive.",
    tags: ["Tailwind CSS", "Framer Motion", "Figma"],
    icon: "✳",
  },
  {
    id: "backend",
    title: "Backend Development",
    tagline: "APIs, Server Logic, Security",
    description:
      "Developing server-side functionality and REST APIs with clear structure. My focus includes authentication flows, request validation, error handling, and maintainable backend architecture.",
    tags: ["Node.js", "Express", "REST APIs"],
    icon: "{ }",
  },
  {
    id: "database",
    title: "Database Architecture",
    tagline: "Data Modeling, Queries, Storage",
    description:
      "Organizing application data with suitable database structures, efficient queries, and clear relationships. I consider data consistency, query patterns, and maintainability when designing data models.",
    tags: ["MongoDB", "MySQL", "Schema Design"],
    icon: "▤",
  },
  {
    id: "performance",
    title: "Performance Optimization",
    tagline: "Speed, Rendering, Web Vitals",
    description:
      "Improving application responsiveness by reducing unnecessary rendering, optimizing assets, and using code splitting and lazy loading where appropriate. Performance is an important part of the user experience.",
    tags: ["Lazy Loading", "Code Splitting", "Lighthouse"],
    icon: "↗",
  },
  {
    id: "devops",
    title: "DevOps & Deployment",
    tagline: "Version Control, CI/CD, Hosting",
    description:
      "Preparing applications for deployment, managing source code, and learning reliable release workflows. I focus on keeping development organized and making deployment easier to maintain.",
    tags: ["Git", "GitHub Actions", "Docker"],
    icon: "⌘",
  },
  {
    id: "testing",
    title: "Testing & Quality",
    tagline: "Testing, Reliability, Debugging",
    description:
      "Checking application behavior, identifying bugs, and validating important user flows. Testing helps make code more reliable and reduces the risk of breaking existing features during updates.",
    tags: ["Unit Testing", "Integration Testing", "Debugging"],
    icon: "✓",
  },
  {
    id: "collaboration",
    title: "Collaboration & Workflow",
    tagline: "Planning, Reviews, Documentation",
    description:
      "Breaking requirements into manageable tasks, organizing code, and communicating technical decisions clearly. A consistent workflow makes projects easier to build, review, and maintain.",
    tags: ["GitHub", "Code Review", "Documentation"],
    icon: "↔",
  },
];

function ExpertiseCard({ item, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.06,
      }}
      className={`group relative w-full overflow-hidden rounded-xl border transition-all duration-300 sm:rounded-2xl ${
        isOpen
          ? "border-[#D4AF37]/45 bg-[#0D0C08] shadow-[0_0_28px_rgba(212,175,55,0.06)]"
          : "border-white/[0.10] bg-[#0A0A0A]/95 hover:border-[#D4AF37]/35 hover:bg-[#0C0B08]"
      }`}
    >
      {/* Gold accent */}
      <div
        className={`absolute bottom-5 left-0 top-5 w-[2px] rounded-full bg-gradient-to-b from-[#FFE8A3] via-[#D4AF37] to-transparent transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-40 group-hover:opacity-100"
        }`}
      />

      {/* Card heading */}
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls={`expertise-content-${item.id}`}
        className="flex w-full items-center gap-3 p-4 text-left sm:gap-4 sm:p-5"
      >
        <span
          className={`shrink-0 font-mono text-xs tracking-widest ${
            isOpen ? "text-[#D4AF37]" : "text-white/30"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border font-mono text-sm font-semibold transition-all duration-300 sm:h-11 sm:w-11 ${
            isOpen
              ? "border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#FFE8A3]"
              : "border-white/10 bg-white/[0.035] text-white/60 group-hover:border-[#D4AF37]/30 group-hover:text-[#D4AF37]"
          }`}
        >
          {item.icon}
        </span>

        <span className="min-w-0 flex-1">
          <span
            className={`block text-sm font-semibold leading-6 transition-colors duration-300 sm:text-base ${
              isOpen ? "text-[#FFE8A3]" : "text-white/90"
            }`}
          >
            {item.title}
          </span>

          <span className="mt-1 block text-xs leading-5 text-white/45 sm:text-sm">
            {item.tagline}
          </span>
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xl ${
            isOpen
              ? "border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#FFE8A3]"
              : "border-white/10 text-white/50"
          }`}
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`expertise-content-${item.id}`}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: {
                duration: 0.32,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: { duration: 0.2 },
            }}
            className="overflow-hidden"
          >
            <div className="ml-4 border-t border-white/[0.08] pb-5 pl-3 pr-4 pt-4 sm:ml-5 sm:pl-4 sm:pr-5">
              <p className="text-sm leading-7 text-white/55">
                {item.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05] px-3 py-1.5 text-[11px] font-medium text-white/65 transition-colors hover:border-[#D4AF37]/40 hover:text-[#FFE8A3]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#D4AF37]/75">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                Area of focus
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative isolate mx-3 overflow-hidden bg-[#050505] py-20 text-white sm:mx-4 sm:py-24 lg:mx-6 lg:py-28"
    >
      {/* Background lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-[#D4AF37]/[0.06] blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#80651D]/[0.06] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          }}
        />
      </div>

      <div className="relative w-full">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-14 max-w-3xl px-4 text-center sm:mb-20 sm:px-6"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/[0.05] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#E6C65C] sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.7)]" />
            What I Do
          </span>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Areas of{" "}
            <span className="bg-gradient-to-r from-[#9F7B21] via-[#FFF0B3] to-[#D4AF37] bg-clip-text text-transparent">
              Expertise.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
            A practical overview of the areas I work with, from interactive
            frontend experiences to APIs, data, and deployment workflows.
          </p>

          <div className="mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/70" />
            <span className="h-2 w-2 rotate-45 border border-[#D4AF37] bg-[#D4AF37]/20" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/70" />
          </div>
        </motion.div>

        {/* Alternating timeline */}
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          {/* Continuous center line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 top-0 z-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent lg:block"
          />

          {/* Center line glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-10 left-1/2 top-10 z-0 hidden w-3 -translate-x-1/2 bg-[#D4AF37]/[0.08] blur-md lg:block"
          />

          <div className="relative z-10 flex flex-col gap-7 sm:gap-9 lg:gap-12">
            {EXPERTISE.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex w-full ${
                    isLeft ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {/* Alternating card */}
                  <div className="relative w-full lg:w-[calc(50%-34px)]">
                    <ExpertiseCard item={item} index={index} />

                    {/* Horizontal connector touching the center line */}
                    <div
                      aria-hidden="true"
                      className={`pointer-events-none absolute top-1/2 z-20 hidden h-px -translate-y-1/2 lg:block ${
                        isLeft
                          ? "right-[-34px] w-[34px] bg-gradient-to-r from-[#D4AF37]/50 to-[#FFE8A3]"
                          : "left-[-34px] w-[34px] bg-gradient-to-l from-[#D4AF37]/50 to-[#FFE8A3]"
                      }`}
                    />
                  </div>

                  {/* Center node */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 lg:flex"
                  >
                    <div className="absolute inset-0 scale-150 rounded-full bg-[#D4AF37]/30 blur-md" />

                    <div className="relative flex h-5 w-5 items-center justify-center rounded-full border border-[#D4AF37] bg-[#080808] shadow-[0_0_14px_rgba(212,175,55,0.3)]">
                      <div className="h-2 w-2 rotate-45 border border-[#FFE8A3] bg-[#D4AF37]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex flex-col items-center gap-3 px-4 text-center sm:mt-16"
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35 sm:text-xs">
            Thoughtful Engineering
            <span className="mx-3 text-[#D4AF37]">/</span>
            Meaningful Experiences
          </p>
        </motion.div>
      </div>
    </section>
  );
}
