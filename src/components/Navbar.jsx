import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: 1, text: "Home" },
  { id: 2, text: "About" },
  { id: 3, text: "Skills" },
  { id: 4, text: "Projects" },
  { id: 5, text: "FAQ" },
  { id: 6, text: "Contact" },
];

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link
          to="Home"
          smooth={true}
          duration={500}
          offset={-70}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-black font-black text-sm group-hover:scale-110 transition">
            S
          </div>
          <div className="hidden sm:block">
            <p className="font-bold text-sm leading-tight">Shahinur</p>
            <p className="text-[10px] text-white/50 leading-tight">
              Full Stack Dev
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {navItems.map(({ id, text }) => (
            <Link
              key={id}
              to={text}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="bg-white/5 text-accent"
              className="px-4 py-1.5 rounded-full text-sm font-medium text-white/70 hover:text-white cursor-pointer transition"
            >
              {text}
            </Link>
          ))}
        </nav>

        <Link
          to="Contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="hidden md:inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-black font-semibold text-sm px-5 py-2 rounded-full cursor-pointer transition"
        >
          Let's Talk
          <span className="w-1.5 h-1.5 rounded-full bg-black/50" />
        </Link>

        <button
          onClick={() => setMenu(!menu)}
          className="md:hidden p-2 rounded-lg glass"
          aria-label="Toggle menu"
        >
          {menu ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-card border-t border-white/5 overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navItems.map(({ id, text }) => (
                <li key={id}>
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setMenu(false)}
                    className="block px-4 py-3 rounded-lg text-white/80 hover:bg-white/5 hover:text-accent cursor-pointer transition"
                  >
                    {text}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="Contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setMenu(false)}
                  className="block mt-2 px-4 py-3 rounded-lg bg-accent text-black font-semibold text-center cursor-pointer"
                >
                  Let's Talk
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
