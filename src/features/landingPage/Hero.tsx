// CORE
import React from 'react';

// UI
import GetStarted from './GetStarted';
import styles from '../../styles/customStyles';
import { discount, robot } from '../../assets';

interface Props {
  subtitle: string;
}

const Hero = ({ subtitle }: Props) => {
  return (
    <section
      id="home"
      className={`${styles.boxWidth} ${styles.paddingX} ${styles.paddingY} flex flex-col md:flex-row items-center mt-[90px]`}
    >
      <div className={`flex-1 flex flex-col items-start gap-3`}>
        <div className="flex items-center gap-2 py-[6px] px-4 bg-discount-gradient rounded-[10px]">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph}`}>
            <span className="text-white"> 20% </span>
            Discount For
            <span className="text-white"> 1 Month </span>
            Account
          </p>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center">
            <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
              The Next <br className="hidden sm:block" />{' '}
              <span className="text-gradient"> Generation </span>
            </h1>
            <div className="hidden ss:block md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>
          <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Payment Method.
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px]`}>{subtitle}</p>
      </div>
      <div className="flex-1 flex justify-center relative my-10 md:my-0">
        <img
          src={robot}
          alt="billing"
          className="w-[70%] h-[70%] md:w-[100%] md:h-[100%] z-[2] up-down delay-1000"
        />
        <div className="absolute top-[10%] left-[35%] z-[0] w-[30%] h-[30%] rounded-full pink__gradient" />
        <div className="absolute top-[10%] left-[35%] z-[1] w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute top-[10%] left-[35%] z-[0] w-[30%] h-[30%] rounded-full blue__gradient" />
      </div>
      <div className={`${styles.flexCenter} ss:hidden`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
