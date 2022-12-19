import { star, shield, send } from '../../assets';
import { features } from '../../constants';
import styles from '../../styles/customStyles';
const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex rounded-[20px] items-center gap-[20px] ${
        index === features.length - 1 ? 'mb-0' : 'mb-6'
      } feature-card p-[20px]`}
    >
      <div className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}>
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
