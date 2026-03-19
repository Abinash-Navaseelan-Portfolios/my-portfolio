import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "My personal portfolio website built to showcase my work, skills, and journey as a developer. Features a modern glassmorphic design with smooth animations and a responsive layout.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/abinashnavaseelan/My-portfolio",
    live: "https://abinashnavaseelan-portfolio.netlify.app/",
  },
  {
    title: "Network Infrastructure Lab",
    description:
      "A comprehensive homelab setup featuring multiple servers, network segmentation, and security configurations. Demonstrates practical IT infrastructure skills with VLANs, firewalls, and monitoring.",
    tech: ["Cisco", "Linux", "Networking", "Security"],
    github: "https://github.com/abinashnavaseelan",
  },
  {
    title: "Full Stack Web Application",
    description:
      "A MERN stack application built during full stack development studies. Features user authentication, RESTful API design, and MongoDB data persistence with a clean, modern UI.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/abinashnavaseelan",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-2">{"// PROJECTS"}</p>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text">What I've Built</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-strong glow-box rounded-2xl p-6 flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300"
            >
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="glass text-xs font-mono text-primary px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
