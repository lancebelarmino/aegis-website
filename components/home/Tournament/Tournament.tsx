import { motion } from 'framer-motion';
import { Section, Button } from '@components/ui';
import { fadeUpVariant } from '@utils/framer-variants';

export default function Tournament() {
  return (
    <Section className="bg-[url('/assets/images/tournament-background.jpg')] bg-cover bg-bottom bg-no-repeat py-36 text-center md:flex md:h-[80vh]">
      <motion.div className="m-auto will-change-transform md:flex-1 lg:max-w-screen-xl" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.h4 className="mb-2" variants={fadeUpVariant} custom={1}>
          Featured Tournament
        </motion.h4>
        <motion.h2 className="m-auto mb-16 font-normal lg:max-w-2xl" variants={fadeUpVariant} custom={2}>
          The International 2022: Singapore
        </motion.h2>
        <div className="flex items-center justify-between gap-10 lg:gap-20">
          <hr />
          <motion.div variants={fadeUpVariant} custom={3}>
            <Button direction="right">Wager Now!</Button>
          </motion.div>
          <hr />
        </div>
      </motion.div>
    </Section>
  );
}
