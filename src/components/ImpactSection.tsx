import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import impactBg from "@/assets/impact-bg.jpg";
import { Heart, Handshake, Users } from "lucide-react";

const supportOptions = [
  { icon: Heart, title: "Donate", desc: "Every contribution changes a child's world." },
  { icon: Handshake, title: "Partner", desc: "Partner with us for maximum ground impact." },
  { icon: Users, title: "Volunteer", desc: "Complement our efforts — volunteer today." },
];

const ImpactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Full bleed image background */}
      <div className="absolute inset-0">
        <img src={impactBg} alt="Children playing" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-kaso-dark/80 backdrop-blur-sm" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
            The impact we make —{" "}
            <span className="italic text-kaso-green">together.</span>
          </h2>
          <p className="text-primary-foreground/60 max-w-xl mx-auto leading-relaxed">
            So much becomes possible when children grow up healthy, educated, skilled, 
            and safe — at home, in school, in the community, and online.
          </p>
        </motion.div>

        <div id="donate" className="grid sm:grid-cols-3 gap-6">
          {supportOptions.map((opt, i) => {
            const Icon = opt.icon;
            return (
              <motion.div
                key={opt.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="group p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-md hover:bg-primary-foreground/10 transition-all cursor-pointer text-center"
              >
                <div className="w-14 h-14 rounded-full bg-kaso-green/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-kaso-green" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">{opt.title}</h3>
                <p className="text-sm text-primary-foreground/60">{opt.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
