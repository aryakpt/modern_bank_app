import React from 'react';
import styles from '../../styles/customStyles';
import { discount, robot } from '../../assets';
import GetStarted from '../GetStarted/GetStarted';

const Hero = () => {
  return (
    <section id="home" className={`flex flex-col ${styles.paddingY} md:flex-row `}>
      <div className={`flex-1 flex-col ${styles.flexStart} px-6 sm:px-16 xl:px-0`}>
        <div className="flex items-center gap-2 py-[6px] px-4 mb-2 bg-discount-gradient rounded-[10px]">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph}`}>
            <span className="text-white"> 20% </span>
            Discount For
            <span className="text-white"> 1 Month </span>
            Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="hidden sm:block" />{' '}
            <span className="text-gradient"> Generation </span>
          </h1>
          <div className="hidden ss:flex md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quas alias adipisci
          corrupti earum blanditiis maiores dolor excepturi labore nihil!
        </p>
      </div>
      <div className="flex-1 flex justify-center relative my-10 md:my-0">
        <img
          src={robot}
          alt="billing"
          className="w-[70%] h-[70%] md:w-[100%] md:h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full top-0 bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className={`${styles.flexCenter} ss:hidden`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
