import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
        >
          Hi, I'm{' '}
          <span className="text-gradient">Palak Sinha</span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 font-medium"
        >
          Computer Science Undergraduate | Full Stack & AI Enthusiast
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-muted-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Motivated Computer Science undergraduate with strong academic performance and a solid grasp of core computing concepts. 
          Actively interested in learning how large-scale, reliable software systems are designed and maintained, 
          with hands-on exposure through academic and personal projects.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-blue-600 border-0 text-white font-semibold px-8"
            data-testid="button-view-projects"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="glass-card border-primary/30 hover:bg-primary/10"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-contact-me"
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex justify-center gap-6"
        >
          <motion.a
            variants={socialVariants}
            href="https://github.com/PalakSinha2505"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-card glass-card-hover transition-all duration-300 group"
            data-testid="link-github"
          >
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.a>
          <motion.a
            variants={socialVariants}
            href="https://www.linkedin.com/in/palak-sinha-53b24129b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-card glass-card-hover transition-all duration-300 group"
            data-testid="link-linkedin"
          >
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.a>
          <motion.a
            variants={socialVariants}
            href="mailto:palaksinha2505@gmail.com"
            className="p-3 rounded-full glass-card glass-card-hover transition-all duration-300 group"
            data-testid="link-email"
          >
            <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-muted-foreground/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
