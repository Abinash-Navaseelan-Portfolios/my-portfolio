import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState, FormEvent } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:abinash.navaseelan@outlook.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-2">
            {"// CONTACT"}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <div className="glass glow-box rounded-2xl p-6 flex items-center gap-4">
              <div className="glass p-3 rounded-xl text-primary">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium">
                  abinash.navaseelan@outlook.com
                </p>
              </div>
            </div>
            <div className="glass glow-box rounded-2xl p-6 flex items-center gap-4">
              <div className="glass p-3 rounded-xl text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground font-medium">
                  Tumba, Stockholm, Sweden
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
              I'm always excited to connect with fellow developers, tech
              enthusiasts, or anyone who shares a passion for building cool
              things. Feel free to reach out!
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-strong glow-box rounded-2xl p-6 flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="glass rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground bg-transparent outline-none focus:ring-1 focus:ring-primary transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="glass rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground bg-transparent outline-none focus:ring-1 focus:ring-primary transition-all"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="glass rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground bg-transparent outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
            />
            <button
              type="submit"
              className="glass glow-box rounded-xl px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
