// CORE
import React from 'react';

// UI
import styles from '../../styles/customStyles';
import { BaseLayout } from '../../components';
import {
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
} from '../../features/landingPage';

const Home = () => {
  return (
    <BaseLayout>
      <Hero
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quas alias adipisci
          corrupti earum blanditiis maiores dolor excepturi labore nihil!"
      />
      <div className={`bg-primary ${styles.paddingX} ${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
      </div>
    </BaseLayout>
  );
};

export default Home;
