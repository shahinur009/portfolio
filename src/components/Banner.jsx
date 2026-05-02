import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { ArrowUpRight, Download, Sparkles } from "lucide-react";
import pic from "/shahin.png";
import { Link } from "react-scroll";

function Banner() {
  return (
    <section
      name="Home"
      id="Home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg radial-fade pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-pad relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-white/70">Available for new projects</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight">
              Architecting the
              <br />
              <span className="text-gradient">Modern Web</span>
            </h1>

            <div className="flex items-center gap-3 text-xl md:text-2xl text-white/70 font-medium">
              <span>I am a</span>
              <ReactTyped
                className="text-accent font-bold"
                strings={[
                  "Full Stack Developer",
                  "Next.js Engineer",
                  "Node.js Architect",
                  "MERN Specialist",
                ]}
                typeSpeed={50}
                backSpeed={40}
                loop
              />
            </div>

            <p className="text-base md:text-lg text-white/60 max-w-xl leading-relaxed">
              I am Md. Shahinur Islam — Full Stack Developer with 2+ years
              shipping production SaaS. Specializing in Next.js, React,
              Node.js, PostgreSQL, and MongoDB. I turn complex ideas into fast,
              reliable, and maintainable applications.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="Projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-black font-semibold px-6 py-3 rounded-full cursor-pointer transition"
              >
                View Projects
                <ArrowUpRight
                  size={18}
                  className="group-hover:rotate-45 transition"
                />
              </Link>
              <a
                href="/Md_Shahinur_Islam_Full_Stack_Developer_CV.pdf"
                download
                className="inline-flex items-center gap-2 glass hover:bg-white/5 text-white font-semibold px-6 py-3 rounded-full transition"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow" />
              <div
                className="absolute inset-4 rounded-full border border-accent/30 animate-spin-slow"
                style={{ animationDirection: "reverse" }}
              />
              <div className="absolute inset-8 rounded-full border border-white/5" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/40 accent-glow">
                  <img
                    src={pic}
                    alt="Shahinur Islam"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 glass rounded-2xl p-4 max-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles size={14} className="text-accent" />
                  <span className="text-xs text-white/70">2+ years exp</span>
                </div>
                <p className="text-sm font-semibold leading-tight">
                  Hi, I'm Shahinur
                </p>
                <p className="text-xs text-white/50 mt-1 leading-tight">
                  Specializing in modern web stacks — building fast, reliable
                  apps.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-4 -right-2 md:top-12 md:-right-6 glass rounded-2xl p-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-medium">Open to remote</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
