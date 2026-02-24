import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";

const updates = [
  {
    title: "Former British MP Simon Danczuk visits KASO Foundation",
    date: "November 8, 2025",
    img: "https://kasofoundation.org/wp-content/uploads/2025/11/simo-300x225.jpg",
    excerpt:
      "We were honored to welcome former British Member of Parliament Simon Danczuk to KASO Foundation. His visit highlighted the impact of our programs and opened discussions about potential partnerships to expand our reach and support for vulnerable communities in Rwanda.",
  },
  {
    title: "Kaso Gataro Project: Empowering families, transforming futures",
    date: "November 6, 2025",
    img: "https://kasofoundation.org/wp-content/uploads/2025/11/kasoo1-300x225.jpg",
    excerpt:
      "The Agataro Project is a cornerstone of KASO Foundation's work — empowering women street vendors with entrepreneurial training, business coaching, and market linkage support. Through savings groups and hands-on mentoring, families are building sustainable livelihoods and brighter futures for their children.",
  },
  {
    title: "KASO Vibration Eco Festival: When Rwanda's artists united for the planet",
    date: "November 6, 2025",
    img: "https://kasofoundation.org/wp-content/uploads/2025/11/kaso-300x225.jpg",
    excerpt:
      "The KASO Vibration Eco Festival brought together Rwanda's most talented artists in a celebration of creativity and environmental awareness. Through music, art, and community dialogue, the festival showcased how culture can drive positive change for our planet and future generations.",
  },
];

const UpdatesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <section id="updates" className="py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-divider w-16 block mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold">
            Recent <span className="text-gradient">Updates</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {updates.map((update, i) => {
            const isExpanded = expandedIdx === i;
            return (
              <motion.article
                key={update.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-lg transition-shadow duration-500"
              >
                <div
                  className="flex flex-col md:flex-row cursor-pointer"
                  onClick={() => setExpandedIdx(isExpanded ? null : i)}
                >
                  <div className="md:w-64 lg:w-80 shrink-0 aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img
                      src={update.img}
                      alt={update.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4 text-kaso-green" />
                      {update.date}
                    </div>
                    <h3 className="text-xl font-semibold leading-snug mb-3 group-hover:text-primary transition-colors">
                      {update.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-kaso-green font-medium">
                      {isExpanded ? "Read Less" : "Read More"}
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expandable content */}
                <motion.div
                  initial={false}
                  animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-8 md:ml-64 lg:ml-80">
                    <div className="pt-2 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed mt-4">
                        {update.excerpt}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;
