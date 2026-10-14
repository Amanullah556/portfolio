
import { motion } from "framer-motion";

const CONTACTS = [
  {
    name: "Email",
    handle: "amankhanbangash39@gmail.com",
    href: "mailto:amankhanbangash39@gmail.com",
    type: "Direct Message",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M3 6.5L11.45 12.6c.33.24.77.24 1.1 0L21 6.5M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    handle: "+92 336 9188433",
    href: "https://wa.me/923369188433",
    type: "Quick Conversation",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.94.56 3.76 1.53 5.3L2 22l4.93-1.6a9.86 9.86 0 0 0 5.11 1.4c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.78 14.07c-.24.68-1.4 1.3-1.93 1.38-.49.08-1.11.11-1.79-.11-.41-.13-.94-.31-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.08.99-2.36.26-.28.57-.35.76-.35.19 0 .38 0 .54.01.17.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.17.28.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.14.46.12.63-.05.17-.17.71-.83.9-1.11.19-.29.38-.24.64-.14.26.1 1.64.77 1.92.91.29.14.48.21.55.33.07.12.07.69-.17 1.37Z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    handle: "github.com/amanullah556",
    href: "https://github.com/amanullah556",
    type: "Projects & Code",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.49 2.87 8.3 6.84 9.65.5.1.68-.22.68-.49 0-.24-.01-1.06-.01-1.92-2.78.51-3.5-.69-3.72-1.32-.13-.33-.68-1.35-1.16-1.62-.4-.22-.97-.76-.01-.77.9-.01 1.55.85 1.76 1.2 1.03 1.76 2.68 1.26 3.33.96.1-.76.4-1.27.73-1.56-2.55-.29-5.21-1.31-5.21-5.81 0-1.28.45-2.34 1.18-3.16-.12-.3-.52-1.51.11-3.14 0 0 .96-.31 3.15 1.2a10.7 10.7 0 0 1 5.74 0c2.19-1.51 3.15-1.2 3.15-1.2.63 1.63.23 2.84.11 3.14.74.82 1.18 1.86 1.18 3.16 0 4.51-2.67 5.52-5.22 5.81.42.37.78 1.09.78 2.2 0 1.59-.01 2.87-.01 3.27 0 .27.18.6.69.49A10.27 10.27 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "linkedin.com/in/aman-ullah-8a0317364",
    href: "https://linkedin.com/in/aman-ullah-8a0317364",
    type: "Professional Network",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18V9.75H5.67V18h2.67Zm-1.33-9.4a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08ZM18.33 18v-4.5c0-2.41-1.29-3.53-3.01-3.53-1.39 0-2.01.76-2.36 1.3v-1.12h-2.67c.04.78 0 8.35 0 8.35h2.67v-4.66c0-.25.02-.5.1-.68.21-.5.68-1.03 1.48-1.03 1.04 0 1.46.79 1.46 1.95V18h2.67Z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    handle: "@amanullah556",
    href: "https://twitter.com/amanullah556",
    type: "Thoughts & Updates",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M18.9 2H22l-7.2 8.2L23 22h-6.8l-5.3-6.9L4.9 22H2l7.7-8.8L1.5 2h7l4.8 6.3L18.9 2Zm-2.4 18h1.9L8.6 4H6.6l9.9 16Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "instagram.com/aman9973ullah",
    href: "https://instagram.com/aman9973ullah",
    type: "Creative Side",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

function ContactCard({ contact, index }) {
  const isExternal = contact.href.startsWith("https://");

  return (
    <motion.a
      href={contact.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={`${contact.name}: ${contact.handle}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.985 }}
      className="group relative isolate flex min-w-0 items-center gap-4 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0A0A0A] p-4 transition-colors duration-300 hover:border-[#D4AF37]/45 sm:gap-5 sm:p-5"
    >
      {/* Animated gold top border */}
      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-0 h-px w-full origin-left bg-gradient-to-r from-transparent via-[#FFE8A3] to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.65 }}
        transition={{ duration: 0.8, delay: index * 0.07 + 0.2 }}
      />

      {/* Hover light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at 15% 50%, rgba(212,175,55,0.11), transparent 65%)",
        }}
      />

      {/* Icon */}
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.06] text-[#D4AF37] transition-all duration-300 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/[0.12] group-hover:text-[#FFE8A3]">
        {contact.icon}
        <span
          aria-hidden="true"
          className="absolute -right-1 -top-1 h-2 w-2 rounded-full border border-[#0A0A0A] bg-[#D4AF37] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>

      {/* Details */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-sm font-semibold text-white transition-colors group-hover:text-[#FFE8A3]">
            {contact.name}
          </h3>

          <span className="rounded-full border border-white/[0.08] px-2 py-0.5 text-[9px] uppercase tracking-wider text-white/35">
            {contact.type}
          </span>
        </div>

        <p className="mt-2 truncate text-xs text-white/45 transition-colors group-hover:text-white/70 sm:text-sm">
          {contact.handle}
        </p>
      </div>

      {/* Arrow */}
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-white/35 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#D4AF37]/35 group-hover:text-[#FFE8A3]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path
            d="M7 17 17 7M7 7h10v10"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.a>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate w-full overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 md:py-32"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-80 w-[min(80vw,700px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.08] blur-[120px]" />

        <div className="absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-[#80651D]/[0.07] blur-[120px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/[0.05] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#E6C65C] sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.7)]" />
            Let&apos;s Connect
          </span>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Get In{" "}
            <span className="bg-gradient-to-r from-[#A17D24] via-[#FFF0B3] to-[#D4AF37] bg-clip-text text-transparent">
              Touch.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
            Have an idea, a project, or an opportunity in mind? Let&apos;s
            connect and turn it into something meaningful.
          </p>

          {/* Gold divider */}
          <div className="mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/70" />
            <span className="h-2 w-2 rotate-45 border border-[#D4AF37] bg-[#D4AF37]/20" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/70" />
          </div>
        </motion.div>

        {/* Contact cards — availability panel removed */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {CONTACTS.map((contact, index) => (
            <ContactCard
              key={contact.name}
              contact={contact}
              index={index}
            />
          ))}
        </div>

        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center sm:mt-16"
        >
          <p className="text-sm text-white/40">
            Prefer email?{" "}
            <a
              href="mailto:amankhanbangash39@gmail.com"
              className="font-medium text-[#D4AF37] underline decoration-[#D4AF37]/30 underline-offset-4 transition-colors hover:text-[#FFE8A3]"
            >
              Let&apos;s start a conversation
            </a>
          </p>

          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/25">
            Thoughtful Work
            <span className="mx-3 text-[#D4AF37]">/</span>
            Meaningful Connections
          </p>
        </motion.div>
      </div>
    </section>
  );
}
