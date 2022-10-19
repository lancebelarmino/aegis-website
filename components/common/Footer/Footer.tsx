import { motion } from 'framer-motion';
import useMediaQuery from '@hooks/useMediaQuery';
import { Section, Card, Button } from '@components/ui';
import { fadeUpVariant } from '@utils/framer-variants';
import Telegram from '@assets/icons/Telegram.svg';
import Twitch from '@assets/icons/Twitch.svg';
import Twitter from '@assets/icons/Twitter.svg';

export default function Footer() {
  const isDesktop = useMediaQuery('(min-width: 1024px)', false);

  return (
    <Section className="py-24" component="footer">
      <div className="relative m-auto lg:max-w-screen-xl">
        <Card className="h-[480px] lg:h-[440px]">
          <motion.div className="will-change-transform md:max-w-lg" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 className="mb-5 leading-tight" variants={fadeUpVariant} custom={1}>
              Join us on our Social Networks
            </motion.h2>
            <motion.hr className="mb-8 w-12" variants={fadeUpVariant} custom={2} />
            <motion.p className="mb-2 font-bold" variants={fadeUpVariant} custom={3}>
              Be part of our growing community.
            </motion.p>
            <motion.p className="mb-8" variants={fadeUpVariant} custom={4}>
              Learn more about the project, events and development by joining our social networks.
            </motion.p>
            <div className="flex flex-col gap-8 md:flex-row md:gap-12">
              <motion.div variants={fadeUpVariant} custom={5}>
                <Button>Join Socials</Button>
              </motion.div>
              <motion.ul className="flex gap-4" variants={fadeUpVariant} custom={5}>
                <li>
                  <a className="icon:transition-all icon-hover:fill-primary-800" href="https://t.me/AegisGG_ETH" target="_blank" rel="noreferrer">
                    <Telegram />
                  </a>
                </li>
                <li>
                  <a className="icon:transition-all icon-hover:fill-primary-800" href="https://www.twitch.tv/aegisgg_eth" target="_blank" rel="noreferrer">
                    <Twitch />
                  </a>
                </li>
                <li>
                  <a className="icon:transition-all icon-hover:fill-primary-800" href="https://twitter.com/AegisGG_ETH" target="_blank" rel="noreferrer">
                    <Twitter />
                  </a>
                </li>
              </motion.ul>
            </div>
          </motion.div>
        </Card>

        {isDesktop && (
          <picture>
            <source srcSet="./assets/images/footer-phone.png" type="image/png" />
            <motion.img className="absolute top-6 right-8 will-change-transform lg:w-[560px]" src="./assets/images/aegis-logo.png" alt="Landscape picture" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} custom={1} />
          </picture>
        )}
      </div>
    </Section>
  );
}
