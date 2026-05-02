import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { Link } from "react-scroll";

const navItems = ["Home", "About", "Skills", "Projects", "FAQ", "Contact"];

const resources = [
  {
    label: "Resume / CV",
    href: "/Md_Shahinur_Islam_Full_Stack_Developer_CV.pdf",
    download: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/shahinur009",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shaheen-ahamed-shahinur/",
  },
  {
    label: "Email",
    href: "mailto:shaheenmis170879@gmail.com",
  },
];

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 bg-bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-black font-black">
                S
              </div>
              <div>
                <p className="font-bold leading-tight">Md. Shahinur Islam</p>
                <p className="text-xs text-white/50 leading-tight">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Senior Software Engineer focused on production architecture,
              system design, and disciplined execution.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {navItems.map((n) => (
                <li key={n}>
                  <Link
                    to={n}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-sm text-white/70 hover:text-accent cursor-pointer transition"
                  >
                    {n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
              Resources
            </p>
            <ul className="space-y-2.5">
              {resources.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    target={r.download ? "_self" : "_blank"}
                    rel="noreferrer"
                    download={r.download || undefined}
                    className="text-sm text-white/70 hover:text-accent transition"
                  >
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {year} Md. Shahinur Islam. All rights reserved.
          </p>
          <div className="flex gap-3">
            <SocialIcon
              href="https://www.linkedin.com/in/shaheen-ahamed-shahinur/"
              Icon={FaLinkedinIn}
            />
            <SocialIcon href="https://github.com/shahinur009" Icon={FaGithub} />
            <SocialIcon
              href="https://www.facebook.com/shahin.ahamed.3139"
              Icon={FaFacebook}
            />
            <SocialIcon
              href="https://www.instagram.com/shahin.ahamed.3139/?hl=en"
              Icon={FaInstagram}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-9 h-9 rounded-lg glass hover:bg-accent hover:text-black flex items-center justify-center transition"
    >
      <Icon size={14} />
    </a>
  );
}

export default Footer;
