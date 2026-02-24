import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Briefcase, PiggyBank, ShoppingBag, Palette,
  GraduationCap, MessageCircle, Users, Lightbulb,
  Store, Wrench, Baby, Sparkles, Apple, Leaf
} from "lucide-react";

const approaches = [
  {
    icon: Briefcase,
    title: "Agataro Entrepreneurial Training",
    desc: "Women street vendors receive practical, relevant and hands-on business training, coaching, mentoring and individualized business advice with market linkage support.",
    tag: "Women Empowerment",
  },
  {
    icon: PiggyBank,
    title: "Savings & Loans Groups",
    desc: "Promoting financial literacy, savings culture and inclusive financial services for women street vendors.",
    tag: "Financial Inclusion",
  },
  {
    icon: ShoppingBag,
    title: "Business Development Services",
    desc: "Supporting women street vendors through comprehensive business development services to grow and sustain their enterprises.",
    tag: "Women Empowerment",
  },
  {
    icon: Palette,
    title: "Life Skills for Street Kids",
    desc: "Teaching valuable skills in the arts field and kitchen skills to street children, giving them a creative outlet and practical abilities.",
    tag: "Youth Skills",
  },
  {
    icon: GraduationCap,
    title: "Street Children Reintegration",
    desc: "Providing clothes, school fees and materials to reintegrate street children back into the education system and community.",
    tag: "Education",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurship & Life Skills",
    desc: "Street business management, entrepreneurship, life skills and leadership to build confidence, set goals, and prevent early pregnancy.",
    tag: "Youth Skills",
  },
  {
    icon: MessageCircle,
    title: "Social Dialogues",
    desc: "Reuniting street children with their parents through facilitated conversations and family mediation processes.",
    tag: "Family Reunification",
  },
  {
    icon: Users,
    title: "Inclusive Business Training",
    desc: "Women and young people benefit from inclusive training in business management with access to employment information and SME finance.",
    tag: "Financial Inclusion",
  },
  {
    icon: Store,
    title: "Street Market Skills",
    desc: "Developing practical market skills for street vendors to improve their livelihoods and grow their businesses sustainably.",
    tag: "Women Empowerment",
  },
  {
    icon: Wrench,
    title: "Vocational Training",
    desc: "Workshops, barista training, and on-the-job vocational training providing hands-on experience and employable skills.",
    tag: "Youth Skills",
  },
  {
    icon: Baby,
    title: "Early Childhood Development",
    desc: "Forming and accompanying home-based and community-based ECDs through basic materials and caregiver training.",
    tag: "Education",
  },
  {
    icon: Sparkles,
    title: "Hygiene & Sanitation",
    desc: "Empowering street vendors with knowledge and practices in hygienic food handling and personal sanitation.",
    tag: "Health",
  },
  {
    icon: Apple,
    title: "Nutrition School Sessions",
    desc: "Educating teen mothers and street vendors to prepare balanced diets through practical nutrition workshops.",
    tag: "Health",
  },
  {
    icon: Leaf,
    title: "Kitchen Gardens",
    desc: "Establishing kitchen gardens for growing nutritious vegetables, promoting food security and healthy eating habits.",
    tag: "Health",
  },
];

const tags = ["All", "Women Empowerment", "Youth Skills", "Education", "Financial Inclusion", "Health", "Family Reunification"];

const ApproachesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTag, setActiveTag] = useState("All");

  const filtered = activeTag === "All" ? approaches : approaches.filter((a) => a.tag === activeTag);

  return (
    <section id="approaches" className="py-32 bg-muted/30">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-divider w-16 block mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Approaches</span>
          </h2>
          <p className="text-muted-foreground max-w-lg">
            Practical, community-driven strategies creating lasting change for women, youth, and children.
          </p>
        </motion.div>

        {/* Filter tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTag === tag
                  ? "bg-kaso-green text-secondary-foreground shadow-md"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Approaches grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((approach, i) => {
            const Icon = approach.icon;
            return (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                layout
                className="group relative p-7 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-kaso-green/30 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-kaso-green/10 text-kaso-green flex items-center justify-center shrink-0 group-hover:bg-kaso-green group-hover:text-secondary-foreground transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-kaso-green/70 font-medium">
                      {approach.tag}
                    </span>
                    <h3 className="font-semibold mt-1 mb-2 leading-snug">{approach.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{approach.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApproachesSection;
