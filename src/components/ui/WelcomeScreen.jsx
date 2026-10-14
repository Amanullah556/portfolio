
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.61 5.25-5.1 5.52.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.98V9h2.95v9.45ZM6.45 7.71a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12 10.74H15.5v-4.6c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.68H9.23V9h2.83v1.29h.04a3.1 3.1 0 0 1 2.8-1.54c3 0 3.55 1.97 3.55 4.54v5.16Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.8"
        r="0.8"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export default function WelcomeScreen({ onComplete }) {
  const timerRef = useRef(null);
  const completedRef = useRef(false);

  useEffect(() => {
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    completedRef.current = false;

    timerRef.current = setTimeout(() => {
      if (!completedRef.current) {
        completedRef.current = true;
        onComplete?.();
      }
    }, 8000);

    return () => {
      clearTimeout(timerRef.current);

      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [onComplete]);

  const handleContinue = () => {
    if (completedRef.current) return;

    completedRef.current = true;
    clearTimeout(timerRef.current);
    onComplete?.();
  };

  const socialButtons = [
    {
      Icon: GitHubIcon,
      color: "#D4AF37",
      url: "https://github.com/",
      label: "GitHub",
    },
    {
      Icon: LinkedInIcon,
      color: "#0A66C2",
      url: "https://www.linkedin.com/",
      label: "LinkedIn",
    },
    {
      Icon: InstagramIcon,
      color: "#E4405F",
      url: "https://www.instagram.com/",
      label: "Instagram",
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-0 z-[9999] flex h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-black px-5 text-center"
    >
      {/* Subtle gold glow */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37] blur-[120px] sm:h-96 sm:w-96"
      />

      {/* Profile image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 1,
          delay: 0.1,
          type: "spring",
          stiffness: 100,
        }}
        className="relative z-10 mb-8"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -inset-2 rounded-full border border-dashed border-[#D4AF37]/70"
        />

        <div className="rounded-full bg-gradient-to-br from-[#80651D] via-[#FFE8A3] to-[#D4AF37] p-[3px] shadow-[0_0_35px_rgba(212,175,55,0.25)]">
          <img
            src="/profile.jpeg"
            alt="My Profile"
            className="h-44 w-44 rounded-full border-4 border-black object-cover sm:h-52 sm:w-52 md:h-60 md:w-60"
          />
        </div>
      </motion.div>

      {/* Welcome heading */}
      <motion.h1
        initial={{
          opacity: 0,
          y: 40,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.1,
          delay: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
      >
        <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
          Welcome to
        </span>

        <br />

        <motion.span
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="inline-block bg-gradient-to-r from-[#9F7B21] via-[#FFF0B3] to-[#D4AF37] bg-clip-text text-transparent"
        >
          My Portfolio
        </motion.span>
      </motion.h1>

      {/* Three social buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        className="relative z-10 mt-9 flex items-center justify-center gap-4"
      >
        {socialButtons.map(({ Icon, color, url, label }, index) => (
          <motion.a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            initial={{ opacity: 0, scale: 0.7, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: 1.3 + index * 0.15,
            }}
            whileHover={{
              y: -5,
              scale: 1.1,
              boxShadow: `0 0 22px ${color}55`,
            }}
            whileTap={{ scale: 0.94 }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md sm:h-14 sm:w-14"
            style={{ color }}
          >
            <Icon />
          </motion.a>
        ))}
      </motion.div>

      {/* Continue button */}
      <motion.button
        type="button"
        onClick={handleContinue}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.7 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 30px rgba(212,175,55,0.3)",
        }}
        whileTap={{ scale: 0.96 }}
        className="group relative z-10 mt-7 flex items-center gap-3 rounded-full bg-gradient-to-r from-[#B8942E] via-[#F5D778] to-[#D4AF37] px-7 py-4 font-bold text-black shadow-lg shadow-[#D4AF37]/10"
      >
        <span>Explore My Portfolio</span>
        <ArrowRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </motion.button>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/5">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 8, ease: "linear" }}
          className="h-full bg-gradient-to-r from-[#80651D] via-[#FFE8A3] to-[#D4AF37]"
        />
      </div>
    </motion.main>
  );
}
