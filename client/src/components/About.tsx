import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const coursework = [
  'Data Structures and Algorithms',
  'Design and Analysis of Algorithms',
  'Object-Oriented Programming',
  'Database Management Systems',
  'Operating Systems',
  'Software Engineering',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Motivated to contribute to digitalization, automation, and sustainable technology 
            through curiosity, responsibility, and continuous improvement.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 glow-border"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-primary" />
              Education
            </h3>

            <div className="relative pl-8 border-l-2 border-primary/30">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary animate-pulse-glow"
              />

              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-foreground">
                    Bachelor of Technology in Computer Science
                  </h4>
                  <p className="text-primary font-medium">Banasthali Vidyapith</p>
                  <p className="text-muted-foreground text-sm">Tonk, Rajasthan</p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Expected May 2027</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                      CGPA: 8.34 / 10.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-8 glow-border"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-primary" />
              Relevant Coursework
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="flex flex-wrap gap-3"
            >
              {coursework.map((course, index) => (
                <motion.div
                  key={course}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Badge
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 cursor-default"
                    data-testid={`badge-course-${index}`}
                  >
                    {course}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
