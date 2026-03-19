import { motion } from "framer-motion";
import { Download, FileText, Award, FolderOpen } from "lucide-react";

interface DownloadItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  files?: { label: string; file: string; fileName: string }[];
  file?: string;
  fileName?: string;
}

const downloads: DownloadItem[] = [
  {
    title: "My CV / Resume",
    description: "Download my latest curriculum vitae in English or Swedish.",
    icon: <FileText size={24} />,
    files: [
      {
        label: "🇬🇧 English",
        file: "/downloads/Abinash_Leo_Navaseelan_CV_EN.pdf",
        fileName: "Abinash_Leo_Navaseelan_CV_EN.pdf",
      },
      {
        label: "🇸🇪 Svenska",
        file: "/downloads/Abinash_Leo_Navaseelan_CV_SV.pdf",
        fileName: "Abinash_Leo_Navaseelan_CV_SV.pdf",
      },
    ],
  },
  {
    title: "Certificates",
    description:
      "View and download my professional certifications in IT, networking, and web development.",
    icon: <Award size={24} />,
    file: "/downloads/Certificates.pdf",
    fileName: "Certificates.pdf",
  },
  {
    title: "Other Documents",
    description:
      "Additional documents, transcripts, and supporting files available for download.",
    icon: <FolderOpen size={24} />,
    file: "/downloads/Other_Documents.pdf",
    fileName: "Other_Documents.pdf",
  },
];

const Downloads = () => {
  return (
    <section id="downloads" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-2">
            {"// DOWNLOADS"}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text">
            Get My Files
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {downloads.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-strong glow-box rounded-2xl p-6 flex flex-col items-center text-center group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="glass rounded-xl p-4 mb-4 text-primary group-hover:text-accent transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {item.files ? (
                <div className="flex gap-3">
                  {item.files.map((f) => (
                    <a
                      key={f.label}
                      href={f.file}
                      download={f.fileName}
                      className="flex items-center gap-1.5 text-primary font-mono text-sm glass rounded-lg px-3 py-2 hover:glow-box transition-all duration-300 hover:text-accent"
                    >
                      <Download size={14} />
                      <span>{f.label}</span>
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  href={item.file}
                  download={item.fileName}
                  className="flex items-center gap-2 text-primary font-mono text-sm hover:text-accent transition-colors"
                >
                  <Download size={16} />
                  <span>Download</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mt-8 font-mono"
        >
          * Upload your files to the{" "}
          <span className="text-primary">public/downloads/</span> folder to
          enable downloads
        </motion.p>
      </div>
    </section>
  );
};

export default Downloads;
