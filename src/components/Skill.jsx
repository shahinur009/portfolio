import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Cloud,
  Database,
  GitBranch,
  Lock,
} from "lucide-react";

const pillars = [
  {
    Icon: Layout,
    title: "Frontend Architecture",
    desc: "React 19, Next.js 15/16, TypeScript, Tailwind, shadcn/ui, Framer Motion. Accessible, performant, scalable UI systems.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind", "Zustand"],
  },
  {
    Icon: Server,
    title: "Backend & API Systems",
    desc: "Node.js, Express 5, Next.js API routes, REST + Server Actions, WebSockets. Robust APIs with strong contracts.",
    stack: ["Node.js", "Express", "REST", "Server Actions", "WebSocket"],
  },
  {
    Icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Vercel, Netlify, Render, Railway, Docker Compose, GitHub Actions CI/CD, observability and monitoring.",
    stack: ["Vercel", "Docker", "GitHub Actions", "pnpm monorepo"],
  },
  {
    Icon: Database,
    title: "Databases & ORMs",
    desc: "PostgreSQL on Neon/Supabase with Prisma. MongoDB Atlas with Mongoose. Firebase, Upstash Redis caching.",
    stack: ["PostgreSQL", "Prisma", "MongoDB", "Mongoose", "Redis"],
  },
  {
    Icon: Lock,
    title: "Auth, Billing & Security",
    desc: "NextAuth, JWT + refresh, OAuth 2.0, 2FA (TOTP), bcrypt. Stripe + Lemon Squeezy subscriptions, webhooks.",
    stack: ["NextAuth", "JWT", "Stripe", "OAuth", "2FA"],
  },
  {
    Icon: GitBranch,
    title: "Engineering Leadership",
    desc: "Driving technical standards, mentoring developers, aligning engineering execution with product strategy.",
    stack: ["Code review", "Mentoring", "Agile", "Architecture"],
  },
];

function Skill() {
  return (
    <section name="Skills" id="Skills" className="relative">
      <div className="section-pad">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-white/70 uppercase tracking-widest">
              Technical Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            Built Across
            <br />
            <span className="text-gradient">the Full Stack.</span>
          </h2>
          <p className="mt-5 text-white/60 max-w-xl">
            My expertise spans frontend systems, backend architecture,
            infrastructure, and performance optimization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl bg-bg-card border border-white/5 p-7 hover:border-accent/40 transition overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-black transition">
                  <p.Icon size={22} />
                </div>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-5">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-white/70 border border-white/5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
