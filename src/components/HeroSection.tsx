import { motion } from "framer-motion";
import { Heart, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="A child smiling with hope"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-kaso-dark/90 via-kaso-dark/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:py-0">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-kaso-green/20 text-kaso-green border border-kaso-green/30 mb-6">
              Building Safe Havens
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-primary-foreground mb-6"
          >
            Be the reason
            <br />
            a child finds{" "}
            <span className="italic text-kaso-green">hope.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg text-primary-foreground/70 max-w-lg mb-10 font-light leading-relaxed"
          >
            Join us in building a safe haven where every child can dream, 
            learn, and grow beyond their struggles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#donate"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:shadow-2xl hover:shadow-primary/30 transition-all"
            >
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Donate Now
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary-foreground/30 text-primary-foreground font-medium text-base hover:bg-primary-foreground/10 transition-all"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ArrowDown className="w-5 h-5 text-primary-foreground/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
