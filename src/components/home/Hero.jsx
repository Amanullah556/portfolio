import { motion } from "framer-motion";
import useTypingEffect from "../../hooks/useTypingEffect";
import Button from "../../components/ui/Button";

const ROLES = [
  "Frontend Developer",
  "React Developer",
  "UI Engineer",
  "Freelancer",
];

export default function Hero() {
  const typedRole = useTypingEffect(ROLES);

  const handleExplore = () => {
    const statsSection = document.getElementById("stats");

    if (statsSection) {
      statsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center overflow-hidden px-6 pb-20 pt-12 text-center sm:pt-16 md:pb-24 md:pt-28">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mb-9"
      >
        <div className="rounded-full bg-gradient-to-br from-[#80651D] via-[#FFF0B3] to-[#D4AF37] p-[4px]">
          <div className="rounded-full bg-[#05050a] p-[5px]">
            <img
              src="/profile.jpeg"
              alt="Aman Ullah"
              className="h-48 w-48 rounded-full border border-[#D4AF37]/30 object-cover object-center sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72"
            />
          </div>
        </div>

        {/* Available to Work */}
        <div className="absolute bottom-3 right-0 flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#05050a] px-3 py-2 shadow-[0_0_15px_rgba(212,175,55,0.08)] sm:bottom-5 sm:right-1">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>

          <span className="whitespace-nowrap text-[10px] font-semibold text-[#FFE8A3] sm:text-xs">
            Available to Work
          </span>
        </div>
      </motion.div>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="w-full"
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] sm:text-sm sm:tracking-[0.35em]">
          Welcome to my portfolio
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-[#9F7B21] via-[#FFF0B3] to-[#D4AF37] bg-clip-text text-transparent">
            Aman Ullah
          </span>
        </h1>
      </motion.div>

      {/* Typing Effect */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-5 flex min-h-9 items-center justify-center text-lg font-medium text-white/80 sm:text-xl md:text-2xl"
      >
        <span>{typedRole}</span>
        <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-[#D4AF37]" />
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8"
      >
        I build modern, responsive, and user-friendly web experiences with a
        focus on clean design, performance, and quality.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-9 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row"
      >
        <Button to="/projects" variant="primary">
          View Projects
        </Button>

        <Button to="/contact" variant="secondary">
          Contact Me
        </Button>
      </motion.div>

      {/* Explore My Work Button */}
      <motion.button
        type="button"
        onClick={handleExplore}
        aria-label="Explore my work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group mt-14 flex cursor-pointer flex-col items-center gap-3 rounded-xl p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/50 transition-colors duration-300 group-hover:text-[#D4AF37]">
          Explore My Work
        </span>

        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-10 w-7 items-start justify-center rounded-full border border-[#D4AF37]/60 p-1.5 transition-colors duration-300 group-hover:border-[#D4AF37]"
        >
          <span className="h-2 w-1 animate-bounce rounded-full bg-[#D4AF37]" />
        </motion.span>

        <span className="text-[9px] text-white/30 transition-colors duration-300 group-hover:text-white/60">
          Click to explore
        </span>
      </motion.button>
    </section>
  );
}
