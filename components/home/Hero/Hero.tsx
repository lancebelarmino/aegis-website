import { motion } from 'framer-motion';
import { Section, Button } from '@components/ui';
import { fadeUpVariant } from '@utils/framer-variants';
import HeroTarget from '@assets/icons/HeroTarget.svg';

export default function Hero() {
  return (
    <Section className="relative h-auto bg-[url('/assets/images/hero-background.jpg')] bg-cover bg-bottom bg-no-repeat pt-[180px] pb-[100px] lg:flex lg:h-[90vh] lg:align-middle">
      <motion.div className="m-auto will-change-transform lg:flex lg:max-w-5xl lg:items-start lg:justify-between" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className=" mb-8 w-full lg:m-0">
          <motion.h1 className="mb-4 font-bold uppercase lg:mb-8 " variants={fadeUpVariant} custom={1}>
            Aegis
          </motion.h1>
          <div className="relative lg:max-w-[460px] lg:pl-12">
            <motion.p className="mb-6" variants={fadeUpVariant} custom={2}>
              Aegis is an Electronic Sports Fan token dedicated to the purpose of Cryptocurrency mass adoption and the thriving industry of E-Sports.
            </motion.p>
            <motion.hr className="mb-7 w-12" variants={fadeUpVariant} custom={3} />
            <motion.div variants={fadeUpVariant} custom={4}>
              <Button className="ml-4" href="https://app.uniswap.org/#/swap?outputCurrency=0x3e4c87bf57d48935d1643A7b8a3383B928B040de" target="_blank" rel="noreferrer" component="a">
                Buy $AEGIS Token
              </Button>
            </motion.div>
            <HeroTarget className="absolute -top-16 right-0" />
          </div>
        </div>

        <picture>
          <source srcSet="./assets/images/aegis-logo.png" type="image/png" />
          <motion.img className="m-auto block w-[320px] lg:w-[720px]" src="./assets/images/aegis-logo.png" alt="Landscape picture" variants={fadeUpVariant} custom={5} viewport={{ once: true }} />
        </picture>
      </motion.div>
    </Section>
  );
}
