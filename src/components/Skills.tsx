import { motion } from "framer-motion";

interface Skill {
  name: string;
  category: string;
  level: number; // 1-5
}

const skills: Skill[] = [
  // Coding
  { name: "HTML5", category: "Coding", level: 4 },
  { name: "CSS3", category: "Coding", level: 4 },
  { name: "JavaScript", category: "Coding", level: 4 },
  { name: "React + TypeScript", category: "Coding", level: 3 },
  { name: "Tailwind CSS", category: "Coding", level: 3 },
  { name: "Node.js", category: "Coding", level: 3 },
  { name: "Express.js", category: "Coding", level: 3 },
  { name: "MongoDB", category: "Coding", level: 3 },
  { name: "Mongoose", category: "Coding", level: 3 },
  { name: "REST APIs", category: "Coding", level: 3 },
  // IT & Networking
  { name: "Networking", category: "IT & Infra", level: 5 },
  { name: "Windows / Linux", category: "IT & Infra", level: 5 },
  { name: "Fiber Installation", category: "IT & Infra", level: 4 },
  { name: "Cisco Packet Tracer", category: "IT & Infra", level: 4 },
  { name: "Network Security", category: "IT & Infra", level: 4 },
  { name: "Network Administration", category: "IT & Infra", level: 4 },
  { name: "Homelabbing", category: "IT & Infra", level: 4 },
  // Tools
  { name: "Git & GitHub", category: "Tools", level: 4 },
  { name: "Postman", category: "Tools", level: 4 },
  { name: "VS Code", category: "Tools", level: 5 },
];

const categories = ["Coding", "IT & Infra", "Tools"];

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.4 }}
    className="glass rounded-xl p-4 flex items-center justify-between gap-4 hover:glow-box transition-all duration-300"
  >
    <span className="text-sm font-medium text-foreground">{skill.name}</span>
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full transition-colors ${
            i < skill.level ? "bg-primary" : "bg-muted"
          }`}
        />
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-2">{"// SKILLS"}</p>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text">Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-strong glow-box rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-primary mb-4 font-mono">{`<${cat} />`}</h3>
              <div className="flex flex-col gap-3">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill, i) => (
                    <SkillBar key={skill.name} skill={skill} index={i} />
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
