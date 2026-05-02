import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import success from "/success.jobs.png";
import ironfitness from "/Ironfitness.png";
import shahintourism from "/shahintourism.png";
import khagracharipratidin from "/khagrachori-potidin.png";
import ShatRong from "/shatrong.png";
import blackcraftresort from "/blackcraft.png";
import dicom from "/dicom.png";
import tally from "/tally-clone-vercel-app-dashboard.png";
import timeTracker from "/time-tracking-web.png";
import screenshotApi from "/webscreenshotapi.png";
import jhirun from "/jhirun.png";

const projects = [
  {
    id: 1,
    name: "Tally — Form Builder SaaS",
    tag: "Full Stack SaaS",
    image: tally,
    link: "https://tally-clone.vercel.app",
    github: null,
    text: "Production-grade form builder with drag-and-drop designer (dnd-kit), Tiptap rich-text, multi-tenant Postgres schema (20+ Prisma models), NextAuth + 2FA, dual payments (Stripe + Lemon Squeezy), Cloudinary, Upstash Redis, Resend.",
    stack: ["Next.js 16", "React 19", "Prisma", "PostgreSQL", "Stripe", "NextAuth"],
    featured: true,
  },
  {
    id: 2,
    name: "Dorik Time Tracker",
    tag: "Multi-tenant SaaS",
    image: timeTracker,
    link: "https://time-tracking-web-seven.vercel.app",
    github: null,
    text: "Standalone multi-tenant time-tracking platform built end-to-end as pnpm monorepo. JWT auth, RBAC (admin/manager/member), ClickUp OAuth 2.0 sync, Ant Design + Recharts analytics dashboards, MongoDB + Mongoose.",
    stack: ["Next.js 15", "Express 5", "MongoDB", "JWT", "ClickUp OAuth", "Ant Design"],
    featured: true,
  },
  {
    id: 3,
    name: "AI Web Screenshot API",
    tag: "Serverless API",
    image: screenshotApi,
    link: "https://webscreenshotapi.vercel.app",
    github: null,
    text: "AI-assisted on-demand screenshot capture API. Configurable viewport, delay, output formats. Built public docs site + serverless API layer on Vercel.",
    stack: ["Next.js", "TypeScript", "Puppeteer", "Vercel"],
    featured: false,
  },
  {
    id: 4,
    name: "Jhirun — E-commerce",
    tag: "Marketplace Platform",
    image: jhirun,
    link: "https://jhirun.com",
    github: null,
    text: "Bangladesh-focused multi-category marketplace (fashion, electronics, home goods) with cart, checkout, order management, admin panel, and integrated payments.",
    stack: ["Next.js", "Node.js", "MongoDB", "Cloudinary", "Firebase"],
    featured: false,
  },
  {
    id: 5,
    name: "Khagrachari Pratidin",
    tag: "News Media",
    image: khagracharipratidin,
    link: "https://khagracharipratidin.com",
    github: null,
    text: "Regional newspaper frontend with CMS-driven content for Khagrachari, Bangladesh.",
    stack: ["React", "Tailwind", "CMS"],
    featured: false,
  },
  {
    id: 6,
    name: "Black Craft Resort",
    tag: "Hospitality",
    image: blackcraftresort,
    link: "https://blackcraftresort.com/",
    github: null,
    text: "Brand site for Black Craft Resort & Restaurant — booking flow, gallery, menu management.",
    stack: ["React", "Tailwind", "Node.js"],
    featured: false,
  },
  {
    id: 7,
    name: "Shat Rong Gents Parlour",
    tag: "Retail Chain",
    image: ShatRong,
    link: "https://shatronggentsparlour.com/",
    github: "https://github.com/shahinur009/Success-job",
    text: "Brand and services site for parlour + training chain. Backend collaboration on user interface effectiveness.",
    stack: ["React", "Node.js", "MongoDB"],
    featured: false,
  },
  {
    id: 8,
    name: "DICOM Viewer (OHIF)",
    tag: "Medical Imaging",
    image: dicom,
    link: "https://medevel.com/14-best-browser-web-based-dicom-viewers-projects/",
    github: "https://github.com/shahinur009/Success-job",
    text: "Contributions to open-source medical imaging viewer. Modified premium DICOM viewer for client free-tier.",
    stack: ["React", "OHIF", "DICOM"],
    featured: false,
  },
  {
    id: 9,
    name: "Success Jobs",
    tag: "Job Portal",
    image: success,
    link: "https://success-jobs-7e686.web.app/",
    github: "https://github.com/shahinur009/Success-job",
    text: "Job portal for seekers and employers. Search, posting, application tracking.",
    stack: ["React", "Firebase", "Tailwind"],
    featured: false,
  },
  {
    id: 10,
    name: "Shahin Tourism",
    tag: "Travel Booking",
    image: shahintourism,
    link: "https://shahin-tourism.web.app/",
    github: "https://github.com/shahinur009/shahin-tourism",
    text: "Tourism booking platform. Tourists search locations and book travel packages.",
    stack: ["React", "Firebase", "Tailwind"],
    featured: false,
  },
  {
    id: 11,
    name: "Iron Fitness",
    tag: "GYM Platform",
    image: ironfitness,
    link: "https://iron-fitness-4500d.web.app/",
    github: "https://github.com/shahinur009/iron-fitness-center",
    text: "GYM membership website with admin-managed packages and user dashboards.",
    stack: ["React", "Firebase", "Tailwind"],
    featured: false,
  },
];

function ProjectCard({ p, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group relative rounded-3xl bg-bg-card border border-white/5 hover:border-accent/30 overflow-hidden transition"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-bg-elev">
        {p.image ? (
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-bg-card to-bg-elev relative">
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="relative text-center px-6">
              <p className="text-accent text-xs uppercase tracking-widest mb-2">
                Screenshot pending
              </p>
              <p className="font-bold text-2xl text-white/30">{p.name}</p>
              <p className="text-[10px] text-white/20 mt-2">
                Drop image at{" "}
                <code className="text-accent/50">public{p.placeholder}</code>
              </p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-60" />
        {p.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-black text-xs font-bold uppercase tracking-wider">
            Featured
          </div>
        )}
      </div>

      <div className="p-6">
        <p className="text-xs uppercase tracking-widest text-accent mb-2">
          {p.tag}
        </p>
        <h3 className="text-xl md:text-2xl font-bold mb-3">{p.name}</h3>
        <p className="text-sm text-white/60 leading-relaxed mb-4">{p.text}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.stack.map((s) => (
            <span
              key={s}
              className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-white/70 border border-white/5"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 bg-accent hover:bg-accent-dark text-black font-semibold text-sm px-4 py-2 rounded-full transition group/btn"
          >
            View Project
            <ArrowUpRight
              size={14}
              className="group-hover/btn:rotate-45 transition"
            />
          </a>
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full glass hover:bg-white/10 transition"
            >
              <FaGithub size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Project() {
  return (
    <section name="Projects" id="Projects" className="relative">
      <div className="section-pad">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-white/70 uppercase tracking-widest">
              Selected Works
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            Projects Where
            <br />
            <span className="text-gradient">Architecture Meets Execution</span>
          </h2>
          <p className="mt-5 text-white/60">
            A selection of products demonstrating scalable system design,
            performance optimization, and production-level engineering
            leadership.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
