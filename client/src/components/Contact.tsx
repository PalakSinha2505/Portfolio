import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    value: 'palaksinha2505@gmail.com',
    href: 'mailto:palaksinha2505@gmail.com',
    icon: Mail,
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+91 7004573316',
    href: 'tel:+917004573316',
    icon: Phone,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/palak-sinha-53b24129b/',
    icon: Linkedin,
    color: 'from-blue-600 to-blue-500',
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'View my projects',
    href: 'https://github.com/PalakSinha2505',
    icon: Github,
    color: 'from-gray-700 to-gray-600',
    external: true,
  },
];

function ContactCard({ contact, index }: { contact: typeof contactLinks[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = contact.icon;

  return (
    <motion.a
      ref={ref}
      href={contact.href}
      target={contact.external ? '_blank' : undefined}
      rel={contact.external ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="glass-card rounded-2xl p-6 glow-border group block"
      data-testid={`link-contact-${contact.id}`}
    >
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-muted-foreground mb-1">{contact.label}</h3>
          <p className="text-foreground font-semibold truncate">{contact.value}</p>
        </div>
        {contact.external && (
          <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        )}
      </div>
    </motion.a>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat about tech!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {contactLinks.map((contact, index) => (
            <ContactCard key={contact.id} contact={contact} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Looking forward to connecting with you!
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-violet-600 to-blue-600 border-0 text-white font-semibold px-8"
            asChild
          >
            <a href="mailto:palaksinha2505@gmail.com" data-testid="button-send-email">
              <Mail className="w-5 h-5 mr-2" />
              Send me an Email
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
