import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  GraduationCap, MapPin, BookOpen, Stethoscope,
  Home, Users, Brain, HeartHandshake
} from "lucide-react";

const programs = [
  { icon: GraduationCap, title: "School Essentials", desc: "Stationery, backpacks, uniforms, books, and extracurricular activities for every child." },
  { icon: MapPin, title: "Local Support", desc: "Personalised Learning for Life Coordinators linking children to local learning opportunities." },
  { icon: BookOpen, title: "Learning & Mentoring", desc: "Out-of-school programs building skills to thrive at school and beyond." },
  { icon: Stethoscope, title: "Healthcare", desc: "Immunizations, checkups, diagnoses and treatments fighting disease and sickness." },
  { icon: Home, title: "Safe Haven", desc: "A secure place for street children to sleep, rest, play, learn and rebuild their lives." },
  { icon: Users, title: "Community Service", desc: "Opportunities for children to experience the value of investing in others." },
  { icon: Brain, title: "Therapy & Counseling", desc: "Emotional support and guidance to heal from past trauma and build resilience." },
  { icon: HeartHandshake, title: "Family Support", desc: "Strengthening families, promoting responsible parenting for safer environments." },
];

const ProgramsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="programs" className="relative py-32 bg-muted/30">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-divider w-16 mx-auto block mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Programs</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Holistic care across education, health, shelter, and community.
          </p>
        </motion.div>

        {/* Flowing masonry-like grid instead of boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {programs.map((program, i) => {
            const Icon = program.icon;
            const isHovered = hoveredIdx === i;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative group p-8 transition-all duration-500 cursor-default ${
                  isHovered ? "bg-card shadow-xl z-10 scale-[1.02]" : "bg-transparent"
                } ${i < 4 ? "border-b border-border" : ""} ${i % 4 !== 3 ? "lg:border-r lg:border-border" : ""}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${
                  isHovered ? "bg-kaso-green text-secondary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{program.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{program.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
