// CORE
import React from 'react';
// UI
import styles from '../../styles/customStyles';
import { Button } from '../../components';

const CTA = () => {
  return (
    <section id="cta" className={`${styles.paddingY}`}>
      <div
        className={`py-[72px] px-[100px] text-center md:text-left md:flex items-center bg-black-gradient rounded-[20px]`}
      >
        <div className="basis-[75%]">
          <h2 className={`${styles.heading2}`}>Let&apos;s try our service now!</h2>
          <p className={`${styles.paragraph} mt-3`}>
            Everything you need to accept card payments <br className="hidden sm:block" /> and grow
            your business anywhere on the planet.
          </p>
        </div>
        <div className="basis-[25%] flex justify-center mt-3">
          <Button className={'text-[14px]'}>Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
