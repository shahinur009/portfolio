import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Production Apps Shipped" },
  { value: 2, suffix: "+", label: "Years Building SaaS" },
  { value: 20, suffix: "+", label: "Prisma Models · Tally" },
  { value: 100, suffix: "%", label: "Code-Review Responses" },
];

function Counter({ to, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration: 1.6,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, to, count]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span className="text-accent">{suffix}</span>
    </span>
  );
}

function Stats() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-bg-card border border-white/5 overflow-hidden"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 md:p-10 group hover:bg-white/[0.02] transition relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition" />
                <div className="relative">
                  <p className="text-5xl md:text-6xl font-black tracking-tight mb-3">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium leading-relaxed">
                    {s.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Stats;
