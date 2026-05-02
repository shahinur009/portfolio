import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What types of projects do you typically work on?",
    a: "I work on multi-tenant SaaS applications, SaaS dashboards, and custom-focused products that require strong architecture planning and performance optimization. I'm especially interested in projects where long-term maintainability and scalability are priorities.",
  },
  {
    q: "What is your approach to system architecture?",
    a: "I design with strong contracts (TypeScript + Zod), clear separation of concerns, and infrastructure that scales horizontally. I prefer modular monoliths early and split into services only when scaling pressure justifies it. Type-safe boundaries between frontend, backend, and shared packages keep refactors safe.",
  },
  {
    q: "How do you handle subscription billing and payments?",
    a: "Production-tested with Stripe (Checkout + subscriptions + webhooks) and Lemon Squeezy. I implement plan-gated feature flags, webhook idempotency, retry logic, and proper failure states. Tally form-builder ships dual-provider billing live.",
  },
  {
    q: "Do you lead teams or work independently?",
    a: "Both. I've mentored junior developers on component architecture, state management, and Git workflow at Bangla Puzzle. I'm equally comfortable being the sole engineer on a SaaS or operating inside a structured team at Dorik.",
  },
  {
    q: "What technologies do you prefer?",
    a: "Next.js 15/16 with React 19 + TypeScript on the frontend. Node.js + Express or Next.js API routes on the backend. PostgreSQL with Prisma for relational data, MongoDB with Mongoose where flexibility matters. NextAuth for auth, Stripe for billing, Vercel for hosting.",
  },
  {
    q: "How do you ensure code quality and scalability?",
    a: "Strict TypeScript, ESLint + Prettier, Zod validation at boundaries, Jest + React Testing Library for critical flows, code review discipline, type-safe contracts in monorepos, and observability from day one. I instrument before I optimize.",
  },
  {
    q: "How can we start working together?",
    a: "Reach out via the contact form below or email shaheenmis170879@gmail.com. I respond within 24 hours. We start with a discovery call to align on goals, constraints, and timeline before any commitment.",
  },
];

function FAQItem({ q, a, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-2xl bg-bg-card border border-white/5 overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/[0.02] transition"
      >
        <span className="font-semibold text-white text-base md:text-lg">
          {q}
        </span>
        <div
          className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition ${
            isOpen ? "bg-accent text-black rotate-45" : "bg-white/5 text-accent"
          }`}
        >
          <Plus size={18} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-white/60 leading-relaxed text-sm md:text-base">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section name="FAQ" id="FAQ" className="relative">
      <div className="section-pad">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-white/70 uppercase tracking-widest">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            Common Questions About
            <br />
            <span className="text-gradient">Collaboration</span>
          </h2>
          <p className="mt-5 text-white/60">
            Answers to help you understand how I work, what I specialize in,
            and how we can collaborate effectively.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <FAQItem
              key={i}
              q={f.q}
              a={f.a}
              index={i}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
