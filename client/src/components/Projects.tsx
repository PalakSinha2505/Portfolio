import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Globe2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'Locora',
    subtitle: 'Smart Travel App for Rajasthan',
    description: 'Developed the frontend and database for a travel app for Rajasthan with location detection, Women SOS alerts, 360° user content, and chat/group planning. Backend APIs for places, events, and food spots are under development for dynamic content and seamless experience. Ongoing work includes 360° media support, real-time alerts, and interactive map features.',
    tech: ['React Native', 'Expo', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/PalakSinha2505/locora',
    color: 'from-violet-500 to-purple-600',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const rotateXValue = (mouseY / (rect.height / 2)) * -8;
    const rotateYValue = (mouseX / (rect.width / 2)) * 8;
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d',
      }}
      className="group relative glass-card rounded-2xl p-8 transition-all duration-200 ease-out glow-border"
      data-testid={`card-project-${project.id}`}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center"
            >
              <Globe2 className="w-7 h-7 text-white" />
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
              <p className="text-primary font-medium">{project.subtitle}</p>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-secondary/20 text-secondary border border-secondary/30"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            className="glass-card border-primary/30 hover:bg-primary/10 gap-2"
            asChild
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`link-github-project-${project.id}`}
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
          </Button>
        </div>
      </div>

      <div
        className="absolute -inset-0.5 bg-gradient-to-r from-violet-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
      />
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my journey in building impactful applications with modern technologies
          </p>
        </motion.div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
