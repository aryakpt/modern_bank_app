// CORE
import React from 'react';

// UI
import { logo } from '../../assets';
import { footerLinks, socialMedia } from '../../constants';
import styles from '../../styles/customStyles';

const Footer = () => {
  return (
    <footer className={`${styles.boxWidth} ${styles.paddingX}`}>
      <div
        className={`${styles.paddingY} flex flex-col gap-8 sm:flex-row sm:gap-[0px] text-white font-poppins`}
      >
        <div className="basis-[40%]">
          <img src={logo} alt="" />
          <p className={`${styles.paragraph} mt-[30px] text-[18px] leading-[32px]`}>
            A new way to make the payments <br className="hidden sm:block" /> easy, reliable and
            secure.
          </p>
        </div>
        <div className="basis-[60%] flex justify-between flex-col gap-5 xs:flex-row sm:gap-[0px]">
          {footerLinks.map((item) => {
            return (
              <div key={item.title}>
                <h3 className={`text-white font-[500] text-[18px]`}>{item.title}</h3>
                <ul className="mt-6 flex flex-col gap-3">
                  {item.links.map((link) => {
                    return (
                      <li key={link.name}>
                        <a
                          href={`${link.link}`}
                          target="__blank"
                          className={`${styles.paragraph} text-[16px]`}
                        >
                          {link.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`flex flex-col ss:flex-row gap-[25px] ss:gap-0 justify-between items-center py-[39px] border-t-[1px] border-['rgba(11, 10, 12, 0.6)']`}
      >
        <div>
          <p className={`${styles.paragraph}`}>
            Copyright &#169; 2021 HooBank. All Rights Reserved.
          </p>
        </div>
        <div className="flex gap-9 ">
          {socialMedia.map((social, idx) => {
            return (
              <a key={idx} href={`${social.link}`} target="__blank">
                <img src={social.icon} alt={social.id} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
