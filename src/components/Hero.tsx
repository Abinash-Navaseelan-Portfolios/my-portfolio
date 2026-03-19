import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Hero = () => {
  const [muted, setMuted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [playerReady, setPlayerReady] = useState(false);

  // We use YouTube iframe API with enablejsapi to control mute/unmute
  useEffect(() => {
    // Listen for YouTube iframe API messages
    const handleMessage = (event: MessageEvent) => {
      try {
        const data =
          typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (data.event === "onReady" || data.info?.playerState !== undefined) {
          setPlayerReady(true);
        }
      } catch {
        // ignore non-JSON messages
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const sendCommand = (func: string, args?: unknown[]) => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func, args: args || [] }),
        "*",
      );
    }
  };

  const toggleMute = () => {
    if (muted) {
      sendCommand("unMute");
      sendCommand("setVolume", [80]);
    } else {
      sendCommand("mute");
    }
    setMuted(!muted);
  };

  // Auto-unmute after a short delay to let iframe load
  useEffect(() => {
    const timer = setTimeout(() => {
      sendCommand("unMute");
      sendCommand("setVolume", [60]);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* YouTube Video Background with sound enabled */}
      <div className="absolute inset-0 z-0">
        <iframe
          ref={iframeRef}
          src="https://www.youtube.com/embed/7Aav_0S5NSE?autoplay=1&mute=0&loop=1&playlist=7Aav_0S5NSE&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=*"
          title="Background Video"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vh] md:w-[120vw] md:h-[120vh] pointer-events-none"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Mute/Unmute Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-20 glass p-3 rounded-xl text-muted-foreground hover:text-primary hover:glow-box transition-all duration-300"
        aria-label={muted ? "Unmute" : "Mute"}
      >
        {muted ? <VolumeX size={22} /> : <Volume2 size={22} />}
      </motion.button>

      {/* Glass Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-strong glow-box rounded-2xl p-8 md:p-12 max-w-2xl w-full text-center"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 flex justify-center"
          >
            <div className="glass glow-box rounded-full p-1.5 w-28 h-28 md:w-36 md:h-36">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-muted-foreground text-3xl md:text-4xl font-bold overflow-hidden">
                {/* Replace this div with an <img> when you have a real photo */}
                <img
                  src="/public/profile.jpg"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-primary font-mono text-sm tracking-widest mb-2">
              {"// HELLO WORLD"}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Abinash Leo</span>
              <br />
              <span className="text-foreground">Navaseelan</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8">
              Junior IT Technician · Full Stack Developer Student
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://github.com/abinashnavaseelan"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-xl hover:glow-box transition-all duration-300 text-muted-foreground hover:text-primary"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/abinashnavaseelan"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-xl hover:glow-box transition-all duration-300 text-muted-foreground hover:text-primary"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://instagram.com/abinashnavaseelan"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-xl hover:glow-box transition-all duration-300 text-muted-foreground hover:text-primary"
            >
              <Instagram size={22} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8"
          >
            <a
              href="#about"
              className="inline-block text-sm text-muted-foreground hover:text-primary transition-colors animate-float"
            >
              ↓ Scroll to explore
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
