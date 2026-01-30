import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Layers, Wrench, Brain } from 'lucide-react';

const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: Code2,
    skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'HTML5', 'CSS', 'TypeScript', 'SQL'],
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 'frameworks',
    title: 'Frameworks / Technologies',
    icon: Layers,
    skills: ['Node.js', 'Express.js', 'React.js', 'Android Studio', 'MongoDB', 'MySQL'],
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'VS Code', 'Postman'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'concepts',
    title: 'Core Concepts',
    icon: Brain,
    skills: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'Operating Systems',
      'Software Engineering',
      'Computer Organization and Architecture',
      'Systems Programming',
    ],
    color: 'from-orange-500 to-amber-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
    },
  },
};

function SkillCategory({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-card rounded-2xl p-6 glow-border"
      data-testid={`skill-category-${category.id}`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-bold">{category.title}</h3>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="flex flex-wrap gap-2"
      >
        {category.skills.map((skill, skillIndex) => (
          <motion.span
            key={skill}
            variants={skillVariants}
            whileHover={{
              scale: 1.05,
              y: -3,
              transition: { type: 'spring', stiffness: 400 },
            }}
            className="px-3 py-1.5 rounded-lg text-sm font-medium bg-muted/50 text-foreground border border-border/50 cursor-default transition-colors hover:border-primary/50 hover:bg-primary/10"
            data-testid={`skill-badge-${category.id}-${skillIndex}`}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit developed through academic excellence and hands-on project experience
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
