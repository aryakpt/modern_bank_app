// CORE
import React from 'react';

// UI
import styles from '../../styles/customStyles';
import { arrowUp } from '../../assets';

const GetStarted = () => {
  return (
    <div className="w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer">
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div>
          <p className="inline font-poppins text-white text-[18px] text-gradient">Get</p>
          <img src={arrowUp} alt="arrow up" className="inline w-[23px] h-[23px] object-contain" />
        </div>
        <p className="font-poppins text-white text-[18px] text-gradient">Started</p>
      </div>
    </div>
  );
};

export default GetStarted;
