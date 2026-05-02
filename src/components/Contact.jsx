import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bwngggma", userInfo);
      toast.success("Message sent. I'll respond within 24 hours.");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Email me directly instead.");
    }
  };

  return (
    <section name="Contact" id="Contact" className="relative">
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
              Get in touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            Let's Talk About
            <br />
            <span className="text-gradient">Your Next Project</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-3xl bg-bg-card border border-white/5 p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Personal Information</h3>

            <div className="space-y-5">
              <InfoRow
                Icon={Mail}
                label="Email"
                value="shaheenmis170879@gmail.com"
                href="mailto:shaheenmis170879@gmail.com"
              />
              <InfoRow
                Icon={Phone}
                label="Mobile / WhatsApp"
                value="+880 1744 604009"
                href="tel:+8801744604009"
              />
              <InfoRow
                Icon={MapPin}
                label="Location"
                value="Dhaka Cantonment, Dhaka 1206, Bangladesh"
              />
            </div>

            <div className="pt-8 mt-8 border-t border-white/5">
              <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
                Connect with me
              </p>
              <div className="flex gap-3">
                <SocialLink
                  href="https://www.linkedin.com/in/shaheen-ahamed-shahinur/"
                  Icon={FaLinkedinIn}
                />
                <SocialLink
                  href="https://github.com/shahinur009"
                  Icon={FaGithub}
                />
                <SocialLink
                  href="https://www.facebook.com/shahin.ahamed.3139"
                  Icon={FaFacebook}
                />
                <SocialLink
                  href="https://www.instagram.com/shahin.ahamed.3139/?hl=en"
                  Icon={FaInstagram}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-3xl bg-bg-card border border-white/5 p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send Your Message</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <Field
                label="Full Name"
                error={errors.name}
                input={
                  <input
                    {...register("name", { required: "Name required" })}
                    type="text"
                    placeholder="Your full name"
                    className="w-full bg-bg-elev border border-white/5 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-accent transition"
                  />
                }
              />
              <Field
                label="Email Address"
                error={errors.email}
                input={
                  <input
                    {...register("email", {
                      required: "Email required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email",
                      },
                    })}
                    type="email"
                    placeholder="you@company.com"
                    className="w-full bg-bg-elev border border-white/5 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-accent transition"
                  />
                }
              />
              <Field
                label="Message"
                error={errors.message}
                input={
                  <textarea
                    {...register("message", { required: "Message required" })}
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full bg-bg-elev border border-white/5 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-accent transition resize-none"
                  />
                }
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-black font-semibold py-3 rounded-xl transition disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-white/40 mb-1">
          {label}
        </p>
        <p className="text-white font-medium leading-snug">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-80 transition">
      {content}
    </a>
  ) : (
    content
  );
}

function SocialLink({ href, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10 rounded-xl glass hover:bg-accent hover:text-black flex items-center justify-center transition"
    >
      <Icon size={16} />
    </a>
  );
}

function Field({ label, error, input }) {
  return (
    <div>
      <label className="block text-sm text-white/70 mb-2 font-medium">
        {label}
      </label>
      {input}
      {error && (
        <p className="text-red-400 text-xs mt-1.5">{error.message}</p>
      )}
    </div>
  );
}

export default Contact;
