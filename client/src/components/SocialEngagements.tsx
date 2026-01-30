import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Heart } from 'lucide-react';

const engagements = [
  {
    id: 1,
    title: 'Social Summer of Code (SSOC) Season 4',
    role: 'Contributor',
    description: 'Contributing to open source projects and collaborating with developers worldwide.',
    icon: Users,
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 2,
    title: 'Codess.Cafe Mentorship Program',
    role: 'Mentee',
    description: 'Learning from experienced professionals and growing as a developer in a supportive community.',
    icon: Heart,
    color: 'from-pink-500 to-rose-600',
  },
];

function EngagementCard({ engagement, index }: { engagement: typeof engagements[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = engagement.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="glass-card rounded-2xl p-6 glow-border group"
      data-testid={`card-engagement-${engagement.id}`}
    >
      <div className="flex items-start gap-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ type: 'spring', stiffness: 200, delay: index * 0.15 + 0.2 }}
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${engagement.color} flex items-center justify-center flex-shrink-0`}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-lg font-bold text-foreground">{engagement.title}</h3>
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-primary/20 text-primary">
              {engagement.role}
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{engagement.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function SocialEngagements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="engagements" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Social <span className="text-gradient">Engagements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Community involvement and collaborative learning experiences
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {engagements.map((engagement, index) => (
            <EngagementCard key={engagement.id} engagement={engagement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
