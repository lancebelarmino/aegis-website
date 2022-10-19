import type { NextPage } from 'next';
import Head from 'next/head';
import { Hero, Tournament, FeaturesTokenomics } from '@components/home';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aegis</title>
        <meta name="description" content="Electronic Sports Fan token dedicated to the purpose of Cryptocurrency mass adaption and the thriving industry of E-Sports" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Tournament />
        <FeaturesTokenomics />
      </main>
    </>
  );
};

export default Home;
