// CORE
import React from 'react';

// UI
import styles from '../../styles/customStyles';

interface Props {
  icon: string;
  title: string;
  content: string;
  index: number;
}

const FeatureCard = ({ icon, title, content }: Props) => {
  return (
    <div className={`feature-card flex rounded-[20px] items-center gap-[20px] p-[20px]`}>
      <div className={`min-w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}>
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div>
        <h5 className="text-white text-[18px] font-semibold leading-[23px] mb-2">{title}</h5>
        <p className={`font-poppins ${styles.paragraph}`}>{content}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
