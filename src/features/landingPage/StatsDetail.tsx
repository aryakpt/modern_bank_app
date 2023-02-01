// CORE
import React from 'react';

// UI
import styles from '../../styles/customStyles';

interface Props {
  title: string;
  value: string;
}
const StatsDetail = ({ title, value }: Props) => {
  return (
    <div className="basis-[33%] text-white flex-1">
      <h2 className={`${styles.flexCenter} gap-[10px] xs:gap[25px]`}>
        <span
          className={`font-poppins text-[26px] ss:text-[30px] md:text-[40px] leading-[43px] xs:leading-[53px] font-[600]`}
        >
          {value}
        </span>
        <span
          className={`${styles.paragraph} text-gradient uppercase leading-[26px] text-[20.45px]`}
        >
          {title}
        </span>
      </h2>
    </div>
  );
};

export default StatsDetail;
