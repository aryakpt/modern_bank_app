import { airbnb, binance, coinbase, dropbox } from '../../assets';
import { clients } from '../../constants';
import styles from '../../styles/customStyles';

const Clients = () => {
  return (
    <section id="clients" className={`${styles.flexCenter}`}>
      <div className={`flex gap-[10px] flex-wrap w-full`}>
        {clients.map((client, idx) => {
          return (
            <div
              key={client.id}
              className={`flex-1 ${styles.flexCenter} basis-[21%] min-w-[192px]`}
            >
              <img
                src={client.logo}
                alt="client"
                className={`w-[100px] sm:w-[192px] object-contain `}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
