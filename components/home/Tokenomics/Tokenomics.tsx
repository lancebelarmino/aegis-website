import { motion } from 'framer-motion';
import useMediaQuery from '@hooks/useMediaQuery';
import { fadeUpVariant } from '@utils/framer-variants';
import TokenomicsLine from '@assets/icons/TokenomicsLine.svg';
import TokenomicsCircle from '@assets/icons/TokenomicsCircle.svg';
import TokenomicsLineCircle from '@assets/icons/TokenomicsLineCircle.svg';

export default function Tokenomics() {
  const isDesktop = useMediaQuery('(min-width: 1024px)', false);

  return (
    <div className="relative py-20 lg:pt-8 lg:pb-56">
      <div className="mb-16 flex items-center justify-between gap-10 lg:mb-28 lg:gap-20">
        <hr />
        <motion.h2 className="uppercase" variants={fadeUpVariant} custom={1}>
          Tokenomics
        </motion.h2>
        <hr />
      </div>

      <motion.div className="-ml-8 will-change-transform lg:m-auto lg:max-w-2xl" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div className="relative mx-auto mb-8 h-16 w-10/12 lg:h-20" variants={fadeUpVariant} custom={1}>
          <div className="flex h-full skew-x-45">
            <div className="grid h-full w-20 place-items-center bg-gradient-to-b from-primary-800 to-primary-900 lg:w-28">
              <h2 className="-skew-x-45">1%</h2>
            </div>
            <div className="relative grid h-full flex-1 items-center border-t border-r border-b border-black-400 pl-10 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-white/5 before:backdrop-blur-[1.6px] before:content-[''] ">
              <p className="-skew-x-45">Automatic Liquidity Pool Injection</p>
            </div>
          </div>
          <TokenomicsLine className="absolute -right-9 bottom-0" />
        </motion.div>

        <motion.div className="relative mx-auto mb-8 h-16 w-10/12 lg:ml-28 lg:h-20" variants={fadeUpVariant} custom={2}>
          <div className="flex h-full skew-x-45">
            <div className="grid h-full w-20 place-items-center bg-gradient-to-b from-primary-800 to-primary-900 lg:w-28">
              <h2 className="-skew-x-45">2%</h2>
            </div>
            <div className="relative grid h-full flex-1 items-center border-t border-r border-b border-black-400 pl-10 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-white/5 before:backdrop-blur-[1.6px] before:content-[''] ">
              <p className="-skew-x-45">Marketing and Development Fund</p>
            </div>
          </div>
          <TokenomicsLine className="absolute -right-9 bottom-0" />
        </motion.div>

        <motion.div className="relative mx-auto mb-8 h-16 w-10/12 lg:ml-[168px] lg:h-20" variants={fadeUpVariant} custom={3}>
          <div className="flex h-full skew-x-45">
            <div className="grid h-full w-20 place-items-center bg-gradient-to-b from-primary-800 to-primary-900 lg:w-28">
              <h2 className="-skew-x-45">3%</h2>
            </div>
            <div className="relative grid h-full flex-1 items-center border-t border-r border-b border-black-400 pl-10 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-white/5 before:backdrop-blur-[1.6px] before:content-[''] ">
              <p className="-skew-x-45">Jackpot and Prize Pool</p>
            </div>
          </div>
          <TokenomicsLine className="absolute -right-9 bottom-0" />
        </motion.div>
      </motion.div>

      {isDesktop && <TokenomicsCircle className="absolute bottom-[280px]" />}
      {isDesktop && <TokenomicsLineCircle className="absolute bottom-16 right-0" />}
    </div>
  );
}
