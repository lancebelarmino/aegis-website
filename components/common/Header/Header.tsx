import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useMediaQuery from '@hooks/useMediaQuery';
import { Button, HamburgerMenu, Section } from '@components/ui';
import { navVariant } from '@utils/framer-variants';
import AegisLogo from '@assets/icons/AegisLogo.svg';

export default function Header() {
  const isDesktop = useMediaQuery('(min-width: 1024px)', false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hamburgerMenu = (
    <motion.nav className="clip-menu absolute top-20 z-50 w-[calc(100%_-_48px)] bg-white p-10" variants={navVariant} initial="hidden" animate="visible" exit="exit">
      <ul className="flex flex-col gap-8 ">
        <li>
          <a href="" className="text-xl text-black-900">
            Telegram
          </a>
        </li>
        <li>
          <a href="" className="text-xl text-black-900">
            Twitter
          </a>
        </li>
        <li>
          <Button className="w-full bg-gradient-to-b from-primary-800 to-primary-900 text-center text-xl after:bg-primary-900" component="a" href="https://app.aegisgg.app/" target="_blank" rel="noreferrer">
            DApp
          </Button>
        </li>
      </ul>
    </motion.nav>
  );

  if (isDesktop) {
    return (
      <Section className="absolute top-0 left-1/2 z-50 m-auto w-full -translate-x-1/2  py-8 lg:max-w-screen-xl" component="header">
        <div className="flex items-center justify-between gap-10">
          <AegisLogo />
          <hr />
          <nav>
            <ul className="flex items-center justify-between gap-12">
              <li>
                <a href="https://t.me/AegisGG_ETH" target="_blank" rel="noreferrer">
                  Telegram
                </a>
              </li>
              <li>
                <a href="https://twitter.com/AegisGG_ETH" target="_blank" rel="noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <Button className="border-none bg-gradient-to-b from-primary-800 to-primary-900 after:bg-primary-900" component="a" href="https://app.aegisgg.app/" target="_blank" rel="noreferrer">
                  DApp
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </Section>
    );
  }

  return (
    <Section className="absolute top-0 z-50  w-full  py-6" component="header">
      <div className="flex items-center justify-between">
        <AegisLogo />

        <AnimatePresence>{isMenuOpen && hamburgerMenu}</AnimatePresence>

        <button onClick={() => setIsMenuOpen((prevState) => !prevState)}>
          <HamburgerMenu opened={isMenuOpen} />
        </button>
      </div>
    </Section>
  );
}
