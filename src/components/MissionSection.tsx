import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

const timelineItems = [
  {
    year: "Origins",
    title: "A Small Initiative",
    text: "KASO Foundation began as a small initiative focused on economic empowerment and skills training, helping vulnerable communities build better lives.",
  },
  {
    year: "Growth",
    title: "Expanding Our Reach",
    text: "We grew into a recognized force for change, helping hundreds of young people and women through sustainable solutions that foster dignity and self-reliance.",
  },
  {
    year: "HabaHome",
    title: "Safe Haven Is Born",
    text: "As we saw the urgent need to address street children in Rwanda — pushed to the streets by family conflicts, neglect, and hardship — HabaHome Safe Haven was born.",
  },
  {
    year: "Today",
    title: "Transforming Lives",
    text: "Today we provide street children with safe spaces for healing, therapy, skill development, and gradual reintegration into society and family life.",
  },
];

const MissionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Decorative organic shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-kaso-green/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <span className="section-divider w-16 block mb-8" />
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            About <span className="text-gradient">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are committed to ending childhood hunger. In Rwanda and around the world, 
            we provide children and families with the food and essentials kids need to grow and thrive.
          </p>
        </motion.div>

        {/* Mission & Vision side by side */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative pl-8 border-l-2 border-kaso-green/30"
          >
            <span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-kaso-green flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-secondary-foreground" />
            </span>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              KASO Foundation is dedicated to transforming the lives of vulnerable children 
              and women in Rwanda by providing sustainable solutions that foster dignity, 
              self-reliance, and well-being. Through our HabaHome Safe Haven initiative, 
              we are creating safe spaces where street children can find healing, guidance, 
              and a path toward a stable future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative pl-8 border-l-2 border-primary/30"
          >
            <span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-primary-foreground" />
            </span>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              We believe that every child deserves a chance to grow in a nurturing environment, 
              free from the struggles of street life. Our mission is to provide not just 
              temporary relief but lasting change — restoring hope, rebuilding lives, 
              and empowering communities.
            </p>
          </motion.div>
        </div>

        {/* Interactive Timeline — Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-10">
            Our <span className="text-gradient">Story</span>
          </h3>

          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Timeline nav */}
            <div className="flex lg:flex-col gap-2">
              {timelineItems.map((item, i) => (
                <button
                  key={item.year}
                  onClick={() => setActiveIdx(i)}
                  className={`group text-left px-5 py-4 rounded-xl transition-all duration-300 ${
                    activeIdx === i
                      ? "bg-kaso-green text-secondary-foreground shadow-lg"
                      : "hover:bg-muted"
                  }`}
                >
                  <span className={`text-xs font-medium uppercase tracking-wider ${
                    activeIdx === i ? "opacity-70" : "text-muted-foreground"
                  }`}>
                    {item.year}
                  </span>
                  <div className={`font-semibold flex items-center gap-2 ${
                    activeIdx === i ? "" : "text-foreground"
                  }`}>
                    {item.title}
                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      activeIdx === i ? "translate-x-1" : "opacity-0 group-hover:opacity-50"
                    }`} />
                  </div>
                </button>
              ))}
            </div>

            {/* Active content */}
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center"
            >
              <div className="p-8 rounded-2xl bg-card border border-border">
                <span className="text-sm text-kaso-green font-medium uppercase tracking-wider">
                  {timelineItems[activeIdx].year}
                </span>
                <h4 className="text-xl font-bold mt-2 mb-4">{timelineItems[activeIdx].title}</h4>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {timelineItems[activeIdx].text}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* What We Do — HabaHome pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-24"
        >
          <h3 className="text-2xl font-bold mb-3">
            What We <span className="text-gradient">Do</span>
          </h3>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            At the heart of our work is HabaHome Safe Haven — a transformative initiative for street children.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
            {[
              { label: "A Safe Haven", desc: "A space where children access water, food, and clothing in a dignified manner." },
              { label: "Therapy & Counseling", desc: "Psychological support using proven techniques to help children break free from negative cycles." },
              { label: "Skill Development", desc: "Physical games, creative learning, and activities to help them see a future beyond the streets." },
              { label: "Gradual Reintegration", desc: "A step-by-step approach making street life unattractive while encouraging positive transition." },
            ].map((pillar, i) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="bg-card p-8 group hover:bg-kaso-green/5 transition-colors"
              >
                <span className="text-4xl font-display font-bold text-kaso-green/20 group-hover:text-kaso-green/40 transition-colors">
                  0{i + 1}
                </span>
                <h4 className="font-semibold mt-3 mb-2">{pillar.label}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
