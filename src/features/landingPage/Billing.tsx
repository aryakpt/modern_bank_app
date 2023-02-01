// CORE
import React from 'react';
// UI
import styles from '../../styles/customStyles';
import { apple, bill, google } from '../../assets';

const Billing = () => {
  return (
    <section
      id="billing"
      className={`relative flex gap-[30px] md:gap-0 ${styles.paddingY} flex-col-reverse md:flex-row md:items-center z-10`}
    >
      <div className={`flex-1 flex justify-center`}>
        <img src={bill} alt="bill" className="w-[70%] h-[70%] md:w-[100%] md:h-[100%]" />
      </div>
      <div className={`flex-1`}>
        <h2 className="z-10 font-poppins text-white text-[48px] font-semibold leading-[76px]">
          Easily control your billing & invoicing.
        </h2>
        <p className={`z-10 ${styles.paragraph} mt-[48px]`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce
          ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className="z-10 flex gap-4 mt-[48px]">
          <img src={apple} alt="apple" />
          <img src={google} alt="google" />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 spin z-[-10]">
          <div className="absolute z-[0] w-[50%] h-[50%] left-0 bottom-6 rounded-full pink__gradient opacity-75" />
          <div className="absolute z-[1] w-[60%] h-[60%] rounded-full left-0 white__gradient opacity-75" />
          <div className="absolute z-[0] w-[50%] h-[50%] left-0 blue__gradient opacity-75" />
        </div>
      </div>
    </section>
  );
};

export default Billing;
