import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award, Medal } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'Smart India Hackathon 2025',
    description: 'Top 50 team in the Internal Smart India Hackathon (SIH) 2025, out of 250+ teams.',
    icon: Trophy,
    color: 'from-amber-400 to-orange-500',
  },
  {
    id: 2,
    title: 'Subject Topper - English',
    description: 'Subject Topper in English, CBSE Class XII Boards, 2023.',
    icon: Award,
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 3,
    title: 'CodeChef Bronze League',
    description: 'Achieved Bronze League in CodeChef programming contests.',
    icon: Medal,
    color: 'from-amber-600 to-yellow-500',
  },
];

function AchievementCard({ achievement, index }: { achievement: typeof achievements[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = achievement.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="glass-card rounded-2xl p-6 glow-border group"
      data-testid={`card-achievement-${achievement.id}`}
    >
      <div className="flex items-start gap-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 200, delay: index * 0.15 + 0.2 }}
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-foreground">{achievement.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition and milestones in my journey
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
