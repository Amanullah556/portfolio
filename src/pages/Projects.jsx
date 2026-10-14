
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    index: "01",
    title: "Smart Khyber Pakhtunkhwa",
    category: "Digital Governance",
    description:
      "A unified digital platform concept connecting Health, Education, Agriculture, Transport, and Tourism information across Khyber Pakhtunkhwa.",
    tags: ["React", "Tailwind CSS", "Governance"],
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1400&auto=format&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    index: "02",
    title: "Personal Portfolio",
    category: "Web Development",
    description:
      "A modern developer portfolio featuring interactive animations, a premium dark theme, responsive layouts, and project showcases.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    image: "/portfolio.png",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    index: "03",
    title: "SkillBridge",
    category: "Learning Platform",
    description:
      "A learning platform concept designed to help students explore courses, develop practical skills, build projects, and discover career opportunities.",
    tags: ["React", "JavaScript", "LMS"],
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1400&auto=format&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    index: "04",
    title: "ShopFlow",
    category: "POS & Inventory",
    description:
      "A business dashboard concept for managing products, point-of-sale operations, inventory levels, and business reports.",
    tags: ["React", "Recharts", "Dashboard"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1400&auto=format&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    index: "05",
    title: "Pulse Commerce",
    category: "E-Commerce",
    description:
      "A modern shopping experience concept with attractive product presentation, intuitive browsing, and a responsive user interface.",
    tags: ["React", "E-Commerce", "UI Design"],
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1400&auto=format&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    index: "06",
    title: "Orbit Workspace",
    category: "Project Management",
    description:
      "A productivity dashboard concept for organizing projects, tracking tasks, coordinating teams, and viewing progress in one place.",
    tags: ["React", "JavaScript", "Productivity"],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
];

function ProjectCard({ project, i }) {
  const cardRef = useRef(null);

  const [spot, setSpot] = useState({
    x: 50,
    y: 50,
    active: false,
  });

  function handleMouseMove(e) {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  }

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.5,
        delay: (i % 3) * 0.08,
        ease: "easeOut",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() =>
        setSpot((prev) => ({ ...prev, active: false }))
      }
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0b0b0b] transition-colors duration-300 hover:border-[#D4AF37]/40"
    >
      {/* Subtle cursor highlight */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: spot.active ? 1 : 0,
          background: `radial-gradient(250px circle at ${spot.x}% ${spot.y}%, rgba(212,175,55,0.045), transparent 75%)`,
        }}
      />

      {/* Project Image */}
      <div className="relative h-52 overflow-hidden bg-[#111] sm:h-56 lg:h-60">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-black/10 to-black/25" />

        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/65 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-white/85 backdrop-blur-sm">
          {project.category}
        </span>

        <span className="absolute right-4 top-3 font-mono text-4xl font-bold text-white/40 transition-colors duration-300 group-hover:text-[#D4AF37]">
          {project.index}
        </span>

        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
      </div>

      {/* Project Details */}
      <div className="relative z-20 flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
            {project.title}
          </h3>

          <span className="shrink-0 text-xl text-[#D4AF37] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
            ↗
          </span>
        </div>

        <p className="mb-5 text-sm leading-7 text-white/55">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 bg-white/[0.035] px-2.5 py-1.5 text-[11px] text-white/65 transition-colors duration-300 group-hover:border-[#D4AF37]/25"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Buttons */}
        <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-white/[0.09] pt-5">
          <motion.a
            href={project.liveUrl}
            whileHover={{ x: 3 }}
            className="inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-3 py-2.5 text-xs font-semibold text-black transition-colors hover:bg-[#f0d477]"
          >
            Live Preview
            <span aria-hidden="true">↗</span>
          </motion.a>

          <motion.a
            href={project.codeUrl}
            whileHover={{ x: 3 }}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2.5 text-xs font-medium text-white/70 transition-colors hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
          >
            Source Code
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Project() {
  return (
    <section
      id="projects"
      className="relative mx-3 overflow-hidden bg-[#050505] py-16 text-white sm:mx-4 sm:py-20 lg:mx-6 lg:py-24"
    >
      {/* Full-width content */}
      <div className="relative w-full">
        {/* Centered Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex justify-center text-center sm:mb-14"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            My 
            
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFE8A3] to-[#B58A20] bg-clip-text text-transparent">
              Projects.
            </span>
          </h2>
        </motion.div>

        {/* Project Cards: use full available width */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.index} project={project} i={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.09] pt-6 text-center sm:mt-14 sm:flex-row sm:text-left"
        >
          <p className="text-sm text-white/45">
            Turning ideas into meaningful digital experiences.
          </p>

          <a
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#D4AF37] transition-colors hover:text-[#FFE8A3]"
          >
            Let's work together
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
