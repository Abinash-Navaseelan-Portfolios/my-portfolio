import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-2">{"// ABOUT"}</p>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text">Who Am I?</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass glow-box rounded-2xl p-8"
          >
            <p className="text-foreground leading-relaxed mb-6">
              Hey! I'm <span className="text-primary font-semibold">Abinash Leo Navaseelan</span>, a 19-year-old tech enthusiast based in Sweden. I recently graduated from NTI Gymnasiet Södertörn and I'm currently leveling up my skills to become a Full Stack Developer at the same institution.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My journey in tech started with a deep curiosity for how things work under the hood — from networking infrastructure and fiber installations to building modern web applications. I thrive at the intersection of IT operations and software development, bringing a unique perspective that combines hands-on hardware experience with clean, efficient code.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding or troubleshooting networks, you'll find me tinkering with my homelab, exploring new technologies, or watching anime. I believe in continuous learning and pushing boundaries — one commit at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-5"
          >
            <div className="glass glow-box rounded-2xl p-6 flex items-start gap-4">
              <div className="glass p-3 rounded-xl text-primary shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground text-sm">Tumba, Stockholm, Sweden</p>
              </div>
            </div>

            <div className="glass glow-box rounded-2xl p-6 flex items-start gap-4">
              <div className="glass p-3 rounded-xl text-primary shrink-0">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Education</h3>
                <p className="text-muted-foreground text-sm">
                  NTI Gymnasiet Södertörn — IT Technician Graduate
                </p>
                <p className="text-muted-foreground text-sm">
                  Currently studying Full Stack Development
                </p>
              </div>
            </div>

            <div className="glass glow-box rounded-2xl p-6 flex items-start gap-4">
              <div className="glass p-3 rounded-xl text-primary shrink-0">
                <Briefcase size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Current Role</h3>
                <p className="text-muted-foreground text-sm">
                  Junior IT Technician & Full Stack Developer Student
                </p>
              </div>
            </div>

            <div className="glass glow-box-accent rounded-2xl p-6">
              <p className="text-sm font-mono text-accent italic">
                "This is the Final Getsuga Tenshou. This technique allows me to become Getsuga itself." — Mugetsu 無月
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
