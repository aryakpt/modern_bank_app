import styles from '../../styles/customStyles';
import { apple, bill, google } from '../../assets';

const Billing = () => {
  return (
    <section
      id="billing"
      className={`relative flex gap-[30px] md:gap-0 ${styles.paddingY} flex-col-reverse md:flex-row md:items-center relative`}
    >
      <div className={`flex-1 flex justify-center`}>
        <img src={bill} alt="bill" className="w-[70%] h-[70%] md:w-[100%] md:h-[100%]" />
      </div>
      <div className={`flex-1`}>
        <h2 className="font-poppins text-white text-[48px] font-semibold leading-[76px]">
          Easily control your
          <br className="hidden sm:block" /> billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-[48px]`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce
          ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className="flex gap-4 mt-[48px]">
          <img src={apple} alt="apple" />
          <img src={google} alt="google" />
        </div>
      </div>
      <div className="absolute z-[0] w-[50%] h-[50%] left-[-50%] bottom-6 rounded-full pink__gradient opacity-75" />
      <div className="absolute z-[1] w-[60%] h-[60%] rounded-full left-[-50%] white__gradient opacity-75" />
      <div className="absolute z-[0] w-[50%] h-[50%] left-[-50%] blue__gradient opacity-75" />
    </section>
  );
};

export default Billing;
