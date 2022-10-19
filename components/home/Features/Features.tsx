import { motion } from 'framer-motion';
import useMediaQuery from '@hooks/useMediaQuery';
import { fadeUpVariant } from '@utils/framer-variants';
import { FeatureBlock } from '@components/ui';
import FEATURES_DATA from '@data/features';
import FeaturesLine from '@assets/icons/FeaturesLine.svg';

export default function Features() {
  const isDesktop = useMediaQuery('(min-width: 1024px)', false);

  const featuresList = FEATURES_DATA.map((item) => <FeatureBlock key={item.id} title={item.title} description={item.description} button={item.button} link={item.link} {...(item.isComingSoon && { isComingSoon: true })} />);

  return (
    <motion.div className="relative py-20 lg:py-32">
      <div className="relative mb-10 lg:mb-28 ">
        <motion.h2 className="uppercase will-change-transform lg:text-center" variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
          Features
        </motion.h2>
        {isDesktop && <FeaturesLine className="absolute top-20 left-1/2 -translate-x-1/2" />}
      </div>

      <div className="grid grid-cols-1 grid-rows-[repeat(4,_380px)] gap-16 lg:grid-cols-2 lg:grid-rows-[repeat(2,_340px)] lg:gap-x-40 lg:gap-y-20">{featuresList}</div>
    </motion.div>
  );
}
