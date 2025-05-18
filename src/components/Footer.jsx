import React from "react";
import { logo } from "../assets";
import styles, { layout } from "../style";
import { footerLinks } from "../constants";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className={`bg-black ${styles.paddingX} pb-10`}>
      <div className={`${layout.section}`}>
        <div className="md:mr-6 mb-10">
          <img
            src={logo}
            alt="Logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-8 ml-4 sm:w-[312px]`}>
            A new way to make the payments <br /> easy, reliable and secure.
          </p>
        </div>
        <div className="flex md:justify-evenly justify-start  items-start w-full flex-wrap gap-8">
          {footerLinks.map((section, index) => {
            return (
              <div key={index} className={`${styles.flexStart} flex-col`}>
                <h4 className="text-white font-poppins font-medium text-[18px] mb-2 sm:mb-6">
                  {section.title}
                </h4>
                {section.links.map((link, index) => (
                  <a
                    href={`#${link.link}`}
                    key={index}
                    className="text-dimWhite font-poppins text-base py-1 md:py-3"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#3F3E45] mb-[33px]"></div>
      <div className="flex justify-between items-center  flex-col  md:flex-row">
        <p className={`${styles.paragraph}`}>
          Copyright &copy; 2025 HooBank. All Rights Reserved.
        </p>
        <div className="flex justify-center items-center gap-[30px]  mt-6 md:mt-0">
          {socialMedia.map((item, _) => (
            <a href={item.link} key={item.id} className="w-full">
              <img
                src={item.icon}
                alt="Sosmed"
                className="w-[21px] h-[21px] object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
