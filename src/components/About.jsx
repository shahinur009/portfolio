import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Briefcase, Target } from "lucide-react";
import pic from "/shahin picture linkedin.png";

function About() {
  return (
    <section name="About" id="About" className="relative">
      <div className="section-pad">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-white/70 uppercase tracking-widest">About</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            Specializing in modern web technologies, I turn complex ideas into{" "}
            <span className="text-accent">fast, reliable,</span> and maintainable
            applications.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden bg-bg-card border border-white/5 aspect-[4/5]">
              <img
                src={pic}
                alt="Shahinur Islam"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <p className="font-bold text-lg">Md. Shahinur Islam</p>
                  <p className="text-sm text-white/60">Full Stack Developer</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/shaheen-ahamed-shahinur/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-accent text-black flex items-center justify-center hover:scale-110 transition"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg text-white/70 leading-relaxed">
              Over the years, I've led architectural initiatives, optimized
              high-traffic applications, and contributed to technical
              decisions making impact across product growth. I believe strong
              engineering is defined not just by delivery, but by{" "}
              <span className="text-white">durability</span>.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <InfoCard
                Icon={GraduationCap}
                label="Education"
                title="B.Sc. CSE"
                sub="Rajshahi Sci. & Tech. University · 2020"
              />
              <InfoCard
                Icon={Briefcase}
                label="Current Role"
                title="Junior Full Stack Dev"
                sub="Dorik · Remote (USA HQ) · 2025–Present"
              />
              <InfoCard
                Icon={Briefcase}
                label="Previous"
                title="Frontend Developer"
                sub="Bangla Puzzle Ltd · 2024–2025"
              />
              <InfoCard
                Icon={Target}
                label="Mission"
                title="Ship What Lasts"
                sub="Performance · clean architecture · product value"
              />
            </div>

            <a
              href="https://www.linkedin.com/in/shaheen-ahamed-shahinur/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-black font-semibold px-6 py-3 rounded-full transition group"
            >
              Learn More
              <ArrowUpRight
                size={18}
                className="group-hover:rotate-45 transition"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ Icon, label, title, sub }) {
  return (
    <div className="rounded-2xl bg-bg-card border border-white/5 p-5 hover:border-accent/30 transition">
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 mb-3">
        <Icon size={14} className="text-accent" />
        {label}
      </div>
      <p className="font-bold text-white">{title}</p>
      <p className="text-sm text-white/50 mt-1">{sub}</p>
    </div>
  );
}

export default About;
