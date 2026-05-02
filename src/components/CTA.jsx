import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowUpRight } from "lucide-react";

function CTA() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2rem] bg-accent p-10 md:p-16 overflow-hidden"
        >
          <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-black/10 rounded-full blur-3xl" />

          <div className="relative grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight leading-[1.05]">
                Let's Build Systems
                <br />
                That Scale with{" "}
                <span className="italic">Confidence</span>
              </h2>
              <p className="mt-4 text-black/70 text-base md:text-lg max-w-xl">
                If you're ready to architect smart, ship fast, and lead with
                clarity — let's talk about your product vision.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="group inline-flex items-center gap-2 bg-black text-white font-semibold px-7 py-4 rounded-full cursor-pointer hover:bg-black/80 transition"
              >
                Start a Conversation
                <ArrowUpRight
                  size={18}
                  className="group-hover:rotate-45 transition"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
