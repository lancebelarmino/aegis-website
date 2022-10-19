import { Section } from '@components/ui';
import { Features, Tokenomics } from '@components/home';

export default function FeaturesTokenomics() {
  return (
    <Section className="bg-[url('/assets/images/features-tokenomics-background.jpg')] bg-cover bg-top bg-no-repeat">
      <div className="m-auto lg:max-w-screen-xl">
        <Features />
        <Tokenomics />
      </div>
    </Section>
  );
}
