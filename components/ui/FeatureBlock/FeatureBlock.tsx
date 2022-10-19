import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUpVariant } from '@utils/framer-variants';
import { Card, Button } from '@components/ui';

interface FeatureProps {
  title: string;
  description: string;
  button: string;
  link: string;
  isComingSoon?: boolean;
}

export default function FeatureBlock({ title, description, button, link, isComingSoon = false }: FeatureProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <AnimatePresence exitBeforeEnter>
        {isComingSoon && isHovered ? (
          <motion.div key="coming-soon" className="relative -top-4 grid h-full place-content-center will-change-transform" initial="hidden" animate="visible" exit="exit">
            <motion.h3 className="mb-4" variants={fadeUpVariant} custom={1}>
              Coming Soon!
            </motion.h3>
            <motion.hr className="m-auto w-12" variants={fadeUpVariant} custom={2} />
          </motion.div>
        ) : (
          <motion.div key="features-content" className="will-change-transform" initial="hidden" whileInView="visible" exit="exit" viewport={{ once: true }}>
            <motion.h3 className="mb-5" variants={fadeUpVariant} custom={1}>
              {title}
            </motion.h3>
            <motion.hr className="mb-10 w-12" variants={fadeUpVariant} custom={2} />
            <motion.p className="mb-10" variants={fadeUpVariant} custom={3}>
              {description}
            </motion.p>
            <motion.div variants={fadeUpVariant} custom={4}>
              <Button className="min-w-[230px]">{button}</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
