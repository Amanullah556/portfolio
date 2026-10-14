
import { motion } from "framer-motion";
import {
  MapPin,
  BriefcaseBusiness,
  Code2,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Readable, organized, and maintainable code.",
  },
  {
    icon: Sparkles,
    title: "Modern UI",
    description: "Beautiful and responsive user interfaces.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Real Projects",
    description: "Practical solutions focused on real needs.",
  },
  {
    icon: CheckCircle2,
    title: "Continuous Learning",
    description: "Always improving skills and exploring technology.",
  },
];

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "PHP",
  "MySQL",
];

export default function About() {
  return (

<section
  id="about"
  className="relative overflow-hidden bg-[#080808] mx-3 sm:mx-4 lg:mx-6 py-16 text-white sm:py-20 lg:py-24"
>

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#D4AF37]/5 blur-[120px]" />

      {/* Full-width section container */}
      <div className="relative w-full">
        <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-2 md:gap-10 lg:gap-14">

          {/* LEFT: IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="group relative h-[480px] w-full sm:h-[560px] md:h-[620px] lg:h-[660px]"
          >
            {/* Gold Frame */}
            <div className="absolute -bottom-2 -right-2 h-full w-full rounded-2xl border border-[#D4AF37]/30 transition-colors duration-500 group-hover:border-[#D4AF37]/60" />

            {/* Image Container */}
            <div className="relative h-full w-full overflow-hidden rounded-r-2xl border-y border-r border-white/10 bg-[#111] md:rounded-l-none">
              <img
                src="/about.jpeg"
                alt="About me"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 transition-all duration-500 group-hover:from-black/70" />

              {/* Gold Hover Glow */}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-[#D4AF37]/40" />

              {/* Image Caption */}
              <div className="absolute bottom-6 left-6 right-6 transition-transform duration-500 group-hover:-translate-y-1">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#D4AF37]">
                  Passion Meets Technology
                </p>

                <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                  Turning Ideas Into Reality
                </h3>
              </div>

              {/* Status Badge */}
              <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#D4AF37]" />
                <span className="text-xs font-medium text-white sm:text-sm">
                  Always Learning
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex min-w-0 flex-col justify-center px-5 sm:px-8 md:min-h-[620px] md:pl-0 md:pr-0 lg:min-h-[660px] lg:pr-0"
          >
            {/* Heading */}
            <div className="mb-5">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#D4AF37]" />

                <h2 className="text-3xl font-bold leading-tight text-[#D4AF37] sm:text-4xl lg:text-5xl">
                  About Me
                </h2>
              </div>

              <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
                Developer • Designer • Problem Solver
              </p>
            </div>

            {/* Description */}
            <p className="text-sm leading-7 text-gray-400 sm:text-base">
              I'm a passionate developer who enjoys creating modern,
              responsive, and user-friendly web applications. I focus on
              writing clean code and building digital experiences that
              combine attractive design with practical functionality.
            </p>

            <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">
              I work with modern web technologies and continuously improve
              my skills by exploring new tools, solving problems, and
              building real-world projects.
            </p>

            {/* Technologies */}
            <div className="mt-6">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
                Technologies I Work With
              </h3>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-gray-300 transition-all duration-300 hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/[0.06] hover:shadow-lg hover:shadow-[#D4AF37]/5"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-[#D4AF37]/20 bg-[#D4AF37]/10 transition-colors duration-300 group-hover:bg-[#D4AF37]/20">
                      <Icon size={20} className="text-[#D4AF37]" />
                    </div>

                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-400">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Row */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={17} className="text-[#D4AF37]" />
                <span>Pakistan</span>
              </div>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#e7c653] hover:shadow-lg hover:shadow-[#D4AF37]/20"
              >
                Let's Connect

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
