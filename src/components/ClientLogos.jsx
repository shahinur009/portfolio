import { motion } from "framer-motion";

const clients = [
  { name: "Dorik", tag: "SaaS · No-code" },
  { name: "Bangla Puzzle Ltd", tag: "Software Agency" },
  { name: "Khagrachari Pratidin", tag: "News Media" },
  { name: "Black Craft Resort", tag: "Hospitality" },
  { name: "Shat Rong", tag: "Retail Chain" },
  { name: "Iron Fitness", tag: "Health & Fitness" },
  { name: "Shahin Tourism", tag: "Travel" },
  { name: "Success Jobs", tag: "Job Portal" },
];

function LogoChip({ name, tag }) {
  return (
    <div className="flex-shrink-0 mx-6 flex items-center gap-3 px-6 py-3 rounded-2xl bg-bg-card/50 border border-white/5 hover:border-accent/40 transition group">
      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent/30 to-accent/5 border border-accent/20 flex items-center justify-center font-black text-accent group-hover:scale-110 transition">
        {name.charAt(0)}
      </div>
      <div>
        <p className="font-semibold text-white text-sm leading-tight">{name}</p>
        <p className="text-[10px] text-white/40 leading-tight">{tag}</p>
      </div>
    </div>
  );
}

function ClientLogos() {
  return (
    <section className="relative py-12 border-y border-white/5 bg-bg-card/30 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-white/40 font-medium">
          Trusted by clients & teams
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee w-max">
          {[...clients, ...clients].map((c, i) => (
            <LogoChip key={i} name={c.name} tag={c.tag} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientLogos;
