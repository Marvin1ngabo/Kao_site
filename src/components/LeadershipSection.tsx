import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ceoPortrait from "@/assets/ceo-portrait.jpeg";

const LeadershipSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="py-32 overflow-hidden">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Portrait - takes 2 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
              <img
                src={ceoPortrait}
                alt="TARATIBU Tom Zimulinda - President & CEO"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kaso-dark/60 to-transparent" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-kaso-green/10 animate-float" />
          </motion.div>

          {/* Text - takes 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary mb-6">
              Leadership
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Our President{" "}
              <span className="text-gradient">&amp; CEO</span>
            </h2>
            <p className="text-xl font-display italic text-foreground/80 mb-4">
              TARATIBU Tom Zimulinda
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Leading Kaso Foundation in its global growth with new partners, to serve 
              more children and families. An accomplished non-profit and business leader 
              bringing a wealth of knowledge and experience to his role as CEO.
            </p>

            {/* Sponsor CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-kaso-green to-kaso-green/80 text-secondary-foreground max-w-md">
              <p className="font-display text-2xl font-bold mb-1">Change a child's future</p>
              <p className="text-sm opacity-80 mb-4">With your support of $25/month, a child will have a better future!</p>
              <a
                href="#donate"
                className="inline-flex items-center px-6 py-2.5 rounded-full bg-background text-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Sponsor a Child →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
