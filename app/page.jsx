// "use client";
import Navbar from "@/components/navbar";
import Image from "next-export-optimize-images/image";
import oil from "@/public/oil.png";
import processenv from "@/public/processenv.png";
import peopleexcellence from "@/public/peopleexcellence.png";
import qualitypolicy from "@/public/qualitypolicy.png";
import customerfocus from "@/public/customerfocus.png";
import values from "@/public/values.png";
import skills from "@/public/skills.png";
import economic from "@/public/economic.png";
import social from "@/public/social.png";
import whoAreWe1 from "@/public/who-we-are-1.png";
import whoAreWe2 from "@/public/who-we-are-2.png";
import Titledash, { SubTitleDash } from "@/components/title-dash";
import Button from "@/components/button";
import PageNumber from "@/components/number";
import WhatWeDoSections from "@/components/whatwedo";
import Onshore from "@/components/svg/whatwedo-onshore";
import Distribution from "@/components/svg/whatwedo-gasdistribution";
import Environment from "@/components/svg/whatwedo-environment";
import Marketing from "@/components/svg/whatwedo-marketing";
import Manpower from "@/components/svg/whatwedo-manpower";
import Development from "@/components/svg/whatwedo-development";
import Footer from "@/components/footer";
import * as motion from "framer-motion/client";

import {
  BannerIntroVariant,
  BlogsParentVariant,
  homeListMoveRightVariant,
  homeVisionandMissionVariant,
  parentStagger,
} from "@/components/framer-variants";

export default function Home() {
  return (
    <>
      <div>
        <div className="relative pt-[27px] pb-[120px] sm:min-h-screen max-w-full w-screen bg-[url('/banner.png')] bg-cover bg-no-repeat before:block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/50">
          <div className="pageMargin relative">
            <Navbar whiteShade={true} />
            <div id="caption" className="max-w-[660px] max-sm:my-28 my-[73px] space-y-[54px]">
              <span className="flex gap-x-2 items-center ">
                <svg width="29" height="8" viewBox="0 0 29 8" fill="none">
                  <circle cx="3.5" cy="4" r="3" fill="#181818" stroke="#D9D9D9" />
                  <circle cx="14.5" cy="4" r="3" fill="#181818" stroke="#D9D9D9" />
                  <circle cx="25.5" cy="4" r="3" fill="#181818" stroke="#D9D9D9" />
                </svg>
                <svg width="9" height="10" viewBox="0 0 9 10" fill="none">
                  <circle cx="4.5" cy="5" r="3.5" fill="white" stroke="#C00000" strokeWidth="2" />
                </svg>
                <p className="text-white text-xs">01/06</p>
              </span>
              <div className="w-full px-5 py-[30px] sm:p-8 relative overflow-hidden">
                <motion.span
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  className="block absolute bg-primary w-2 h-full left-0 top-0"
                ></motion.span>
                <motion.h1
                  variants={BannerIntroVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-2xl/[35px] sm:text-[40px]/[60px] font-bold text-white"
                >
                  DRIVING INNOVATION AND EXCELLENCE IN AFRICA'S OIL & GAS INDUSTRY
                </motion.h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative -top-[97px] ">
        <span className="block w-[110px] h-3 mx-auto bg-primary"></span>
        <div className="bg-white px-[10px] sm:px-[30px] max-sm:max-w-[90%] py-[20px] w-fit mx-auto shadow-[0px_4px_4px_rgba(0,0,0,0.25)] relative">
          <span className="block absolute -left-[60px] top-1/2">
            <svg width="9" height="62" viewBox="0 0 9 62" fill="none">
              <circle cx="4.5" cy="58.5" r="3" transform="rotate(-90 4.5 58.5)" fill="#181818" stroke="#D9D9D9" />
              <circle cx="4.5" cy="47.5" r="3" transform="rotate(-90 4.5 47.5)" fill="#181818" stroke="#D9D9D9" />
              <circle cx="4.5" cy="36.5" r="3" transform="rotate(-90 4.5 36.5)" fill="#181818" stroke="#D9D9D9" />
              <circle cx="4.5" cy="25.5" r="3.5" fill="white" stroke="#C00000" strokeWidth="2" />
              <circle cx="4.5" cy="14.5" r="3" transform="rotate(-90 4.5 14.5)" fill="#181818" stroke="#D9D9D9" />
              <circle cx="4.5" cy="3.5" r="3" transform="rotate(-90 4.5 3.5)" fill="#181818" stroke="#D9D9D9" />
            </svg>
          </span>
          <div className="gap-x-4 sm:gap-x-[36px] max-sm:items-center grid grid-cols-2 sm:grid-cols-3 ">
            <div className="col-span-1 space-y-3 ">
              <Image
                src={oil}
                width="154"
                alt="oil and gas company from Himalayas Energy"
                className="w-full mx-auto max-w-[90px]
              sm:max-w-[154px]"
              />
              <div>
                <h3 className="text-sm sm:text-lg text-center">SERVICE OFFERING</h3>
                <div className="pt-3">
                  <span className="w-[80px] h-1 mx-auto bg-black block"></span>
                </div>
              </div>
            </div>
            <div className="col-span-1 sm:col-span-2 sm:ps-[36px] py-8">
              <motion.ul
                variants={parentStagger()}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5, once: true }}
                className="space-y-6 text-[14px] sm:text-lg"
              >
                <motion.li variants={homeListMoveRightVariant} className="flex items-center gap-x-2 ">
                  <svg className="w-[12px] h-[13px] shrink-0" viewBox="0 0 13 14" fill="none">
                    <circle cx="6.5" cy="7.10205" r="4.5" fill="white" className="stroke-primary" strokeWidth="4" />
                  </svg>
                  Exploration & Production
                </motion.li>
                <motion.li variants={homeListMoveRightVariant} className="flex items-center gap-x-2 ">
                  <svg className="w-[12px] h-[13px] shrink-0" viewBox="0 0 13 14" fill="none">
                    <circle cx="6.5" cy="7.10205" r="4.5" fill="white" className="stroke-primary" strokeWidth="4" />
                  </svg>
                  Design & Build
                </motion.li>
                <motion.li variants={homeListMoveRightVariant} className="flex items-center gap-x-2 ">
                  <svg className="w-[12px] h-[13px] shrink-0" viewBox="0 0 13 14" fill="none">
                    <circle cx="6.5" cy="7.10205" r="4.5" fill="white" className="stroke-primary" strokeWidth="4" />
                  </svg>
                  Engineering Procurement
                </motion.li>
                <motion.li variants={homeListMoveRightVariant} className="flex items-center gap-x-2 ">
                  <svg className="w-[12px] h-[13px] shrink-0" viewBox="0 0 13 14" fill="none">
                    <circle cx="6.5" cy="7.10205" r="4.5" fill="white" className="stroke-primary" strokeWidth="4" />
                  </svg>
                  Construction
                </motion.li>
                <motion.li variants={homeListMoveRightVariant} className="flex items-center gap-x-2 ">
                  <svg className="w-[12px] h-[13px] shrink-0" viewBox="0 0 13 14" fill="none">
                    <circle cx="6.5" cy="7.10205" r="4.5" fill="white" className="stroke-primary" strokeWidth="4" />
                  </svg>
                  Commissioning (EPCC)
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-full overflow-x-hidden relative after:block after:absolute">
        <div className="absolute top-1/2 left-[10px]">
          <PageNumber className="w-fit">01</PageNumber>
        </div>
        <section className="relative py-[55px] pageMargin grid grid-cols-6 space-y-[58px] md:grid-cols-12 justify-between gap-x-1 lg:gap-x-10 items-center ">
          <span className="block absolute top-0 right-0">
            <svg width="95" height="8" viewBox="0 0 95 8" fill="none">
              <circle cx="3.5" cy="4" r="3" transform="rotate(-90 3.5 4)" fill="#181818" stroke="#D9D9D9" />
              <rect x="26" y="6" width="3" height="59" transform="rotate(-90 26 6)" fill="#181818" />
              <rect x="43" y="8" width="8" height="39" transform="rotate(-90 43 8)" fill="black" />
            </svg>
          </span>
          <div className="space-y-6 col-span-6 xl:col-span-5 max-w-[430px]">
            <Titledash>WHO WE ARE</Titledash>
            <div className="space-y-16">
              <p className="text-body1">
                Himalayas Energy Consults Limited was established in 2023 in Nigeria as a full-service company providing a range of services to the
                Oil & Gas industry. Himalayas Energy is currently looking to spread its tentacles into the Exploration and Production terrain with its
                recent participation in the Marginal Field Bid-Round.
              </p>
              <Button className="max-lg:hidden" path="/about.html">
                Read more
              </Button>
            </div>
          </div>
          <motion.div
            variants={parentStagger()}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.6, once: true }}
            className="col-span-6 xl:col-span-7 relative aspect-square "
          >
            <Image
              src={whoAreWe1}
              placeholder="blur"
              alt="Who are Himalayas Energy Consults, Himalayas Energy Consults Limited was established in 2023 in Nigeria as a full-service company
            providing a range of services to the Oil & Gas industry. "
              width="554"
              height="462"
              className="w-[80%] max-md:max-w-[400px] aspect-square
            absolute bottom-0 left-0"
            />
            <motion.span
              variants={{ hidden: { x: "100%" }, visible: { x: 0, transition: { ease: "easeIn", duration: 0.4, delay: 0.2, type: "spring" } } }}
              className="absolute bg-primary home-who-are-we-overlap h-[92px] top-1/2 -translate-y-1/2"
            ></motion.span>
            <Image
              src={whoAreWe2}
              placeholder="blur"
              alt="Himalayas Energy is currently looking to spread its tentacles into the exploration and production terrain with its recent
            participation in the Marginal Field BidRound."
              width="554"
              height="462"
              className="w-[80%] max-md:max-w-[400px] aspect-square absolute
            bottom-20 right-10 md:top-0 md:right-0 z-20"
            />
          </motion.div>
          <div className="col-span-full mt-[62px] flex justify-center lg:hidden">
            <Button path="/about.html"> Read more</Button>
          </div>
        </section>
      </div>
      <div className="bg-[#EFF0F3]">
        <section className="py-[120px] pageMargin relative">
          <div className="absolute right-0 min-[1150px]:-right-[45px] bottom-10">
            <PageNumber className="w-fit">02</PageNumber>
          </div>
          <span className="block absolute top-40 lg:top-20 -left-5">
            <svg width="9" height="62" viewBox="0 0 9 62" fill="none">
              <circle cx="4.5" cy="58.5" r="3" transform="rotate(-90 4.5 58.5)" fill="#181818" stroke="#D9D9D9" />
              <circle cx="4.5" cy="47.5" r="3" transform="rotate(-90 4.5 47.5)" fill="#181818" stroke="#D9D9D9" />
              <circle cx="4.5" cy="36.5" r="3" transform="rotate(-90 4.5 36.5)" fill="#181818" stroke="#D9D9D9" />
              <circle cx="4.5" cy="25.5" r="3.5" fill="white" stroke="#C00000" strokeWidth="2" />
              <circle cx="4.5" cy="14.5" r="3" transform="rotate(-90 4.5 14.5)" fill="#181818" stroke="#D9D9D9" />
              <circle cx="4.5" cy="3.5" r="3" transform="rotate(-90 4.5 3.5)" fill="#181818" stroke="#D9D9D9" />
            </svg>
          </span>
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 gap-x-[26px]">
            <motion.div
              variants={homeVisionandMissionVariant()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className=" col-span-1 py-[35px] px-5 gap-x-[32px] space-y-8 sm:flex items-center bg-[#F9F8F8]"
            >
              <div className="bg-white py-[54px] px-[42px] max-sm:w-fit">
                <svg width="72" height="62" viewBox="0 0 72 62" fill="none">
                  <path
                    d="M69.3756 12.5775L63.5084 6.70724C62.8234 6.02228 61.8944 5.63747 60.9258 5.63747C59.9571 5.63747 59.0281 6.02228 58.3431 6.70724C57.6581 7.3922 57.2733 8.32121 57.2733 9.28989C57.2733 10.2586 57.6581 11.1876 58.3431 11.8725L64.2194 17.7336C64.3322 17.8466 64.4217 17.9807 64.4827 18.1282C64.5437 18.2758 64.575 18.4339 64.5749 18.5935V42.7094C64.5749 43.1929 64.3828 43.6566 64.0409 43.9985C63.699 44.3404 63.2353 44.5324 62.7518 44.5324C62.2683 44.5324 61.8046 44.3404 61.4627 43.9985C61.1209 43.6566 60.9288 43.1929 60.9288 42.7094V31.1634C60.9288 28.9071 60.0325 26.7432 58.437 25.1477C56.8415 23.5522 54.6776 22.6559 52.4212 22.6559H48.7751V9.28685C48.7751 7.03051 47.8788 4.86658 46.2833 3.2711C44.6879 1.67563 42.5239 0.779297 40.2676 0.779297H15.9603C13.7039 0.779297 11.54 1.67563 9.94452 3.2711C8.34904 4.86658 7.45271 7.03051 7.45271 9.28685V54.2554H3.80662C2.83961 54.2554 1.91222 54.6395 1.22844 55.3233C0.544664 56.0071 0.160522 56.9345 0.160522 57.9015C0.160522 58.8685 0.544664 59.7959 1.22844 60.4796C1.91222 61.1634 2.83961 61.5476 3.80662 61.5476H52.4212C53.3882 61.5476 54.3156 61.1634 54.9994 60.4796C55.6832 59.7959 56.0673 58.8685 56.0673 57.9015C56.0673 56.9345 55.6832 56.0071 54.9994 55.3233C54.3156 54.6395 53.3882 54.2554 52.4212 54.2554H48.7751V29.9481H52.4212C52.7436 29.9481 53.0527 30.0761 53.2806 30.304C53.5086 30.532 53.6366 30.8411 53.6366 31.1634V42.7094C53.6366 45.1269 54.597 47.4454 56.3064 49.1549C58.0158 50.8643 60.3343 51.8246 62.7518 51.8246C65.1694 51.8246 67.4878 50.8643 69.1973 49.1549C70.9067 47.4454 71.8671 45.1269 71.8671 42.7094V18.5935C71.8705 17.4758 71.652 16.3685 71.2243 15.3358C70.7967 14.3031 70.1683 13.3655 69.3756 12.5775ZM14.7449 54.2554V9.28685C14.7449 8.96452 14.873 8.65539 15.1009 8.42746C15.3288 8.19954 15.6379 8.07149 15.9603 8.07149H40.2676C40.5899 8.07149 40.8991 8.19954 41.127 8.42746C41.3549 8.65539 41.4829 8.96452 41.4829 9.28685V54.2554H14.7449ZM36.6215 26.302C36.6215 27.269 36.2373 28.1964 35.5536 28.8801C34.8698 29.5639 33.9424 29.9481 32.9754 29.9481H23.2525C22.2855 29.9481 21.3581 29.5639 20.6743 28.8801C19.9905 28.1964 19.6064 27.269 19.6064 26.302C19.6064 25.335 19.9905 24.4076 20.6743 23.7238C21.3581 23.04 22.2855 22.6559 23.2525 22.6559H32.9754C33.9424 22.6559 34.8698 23.04 35.5536 23.7238C36.2373 24.4076 36.6215 25.335 36.6215 26.302Z"
                    fill="#C00000"
                  />
                </svg>
              </div>
              <div className="space-y-[15px]">
                <Titledash> OUR MISSION</Titledash>
                <p className="text-body1">
                  Our mission is to satisfy our customer’s requirements through conformity by utilizing proven process techniques that allow for the
                  efficient execution of projects meeting the time, cost and quality requirements of our Clients with a commitment to continual
                  improvement in quality.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={homeVisionandMissionVariant(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className=" col-span-1 py-[35px] px-5 gap-x-[32px] space-y-8 sm:flex items-center bg-[#F9F8F8]"
            >
              <div className="bg-white py-[54px] px-[42px] max-sm:px-[50px] max-sm:w-fit">
                <svg width="58" height="74" viewBox="0 0 58 74" fill="none">
                  <path
                    d="M51.8242 33.9079C50.888 32.6867 49.7482 31.6283 48.6898 30.57C45.9625 28.1276 42.8687 26.3772 40.2635 23.8126C34.1982 17.8694 32.8549 8.05908 36.722 0.52832C32.8549 1.46458 29.4762 3.58133 26.586 5.90162C16.0429 14.3686 11.8908 29.3081 16.8571 42.1307C17.0199 42.5378 17.1827 42.9448 17.1827 43.474C17.1827 44.3696 16.5721 45.1837 15.758 45.5094C14.8217 45.9164 13.8448 45.6722 13.0713 45.0209C12.8403 44.8274 12.6471 44.5927 12.5014 44.3289C7.90157 38.5078 7.16885 30.1629 10.2626 23.487C3.46453 29.0231 -0.239794 38.3857 0.289395 47.2191C0.533636 49.2544 0.777877 51.2897 1.46989 53.3251C2.03979 55.7675 3.13887 58.2099 4.36008 60.3674C8.75642 67.4097 16.3686 72.4573 24.5507 73.475C33.2619 74.5741 42.5838 72.9865 49.2597 66.9619C56.7091 60.2045 59.3143 49.3765 55.4879 40.0954L54.9587 39.037C54.1038 37.1645 51.8242 33.9079 51.8242 33.9079ZM38.9609 59.5532C37.8211 60.5302 35.9486 61.5886 34.4831 61.9956C29.924 63.6239 25.3648 61.3443 22.6782 58.6577C27.5223 57.5179 30.4124 53.9357 31.2673 50.3128C31.9593 47.0562 30.6567 44.3696 30.1275 41.2352C29.639 38.2229 29.7204 35.6583 30.8195 32.8495C31.5929 34.3964 32.4071 35.9433 33.384 37.1645C36.5185 41.2352 41.444 43.0263 42.5024 48.5624C42.6652 49.1323 42.7466 49.7022 42.7466 50.3128C42.8687 53.6507 41.4033 57.3144 38.9609 59.5532Z"
                    fill="#C00000"
                  />
                </svg>
              </div>
              <div className="space-y-[15px]">
                <Titledash> OUR VISION</Titledash>
                <p className="text-body1">
                  Our vision is to be the first choice of all companies for the provision of cutting-edge technology in the Upstream and Downstream
                  oil and gas sector.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <div className="relative">
        <div className="absolute top-1/2 left-[40px]">
          <PageNumber className="w-fit">03</PageNumber>
        </div>
        <section className="bg-white pt-[100px] pb-[50px] pageMargin">
          <svg width="94" height="8" viewBox="0 0 94 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="59" y="2" width="3" height="59" transform="rotate(90 59 2)" fill="#181818" />
            <rect x="42" width="8" height="39" transform="rotate(90 42 0)" fill="black" />
            <circle cx="81.5" cy="4" r="3" transform="rotate(-90 81.5 4)" fill="#181818" stroke="#D9D9D9" />
          </svg>
          <div className="space-y-10">
            <div className="flex items-center justify-center flex-cols-1">
              <Titledash span="mx-auto">WHAT WE DO</Titledash>
            </div>
            <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[62px] gap-y-[60px] md:gap-y-10">
                <div className="col-span-1">
                  <WhatWeDoSections
                    title="ONSHORE & OFFSHORE PIPELINE INSTALLATION"
                    body="Himalayas Energy can supply a wide range of services for Onshore/Offshore projects, covering the entire project life span, from the earliest conceptual studies, Basics, FEED to Detailed Design."
                  >
                    <Onshore />
                  </WhatWeDoSections>
                </div>
                <div className="col-span-1">
                  <WhatWeDoSections
                    title="LOCAL GAS DISTRIBUTION"
                    body="Himalayas Energy can supply a wide range of services for Onshore/Offshore projects, covering the entire project life span, from the earliest conceptual studies, Basics, FEED to Detailed Design."
                  >
                    <Distribution />
                  </WhatWeDoSections>
                </div>
                <div className="col-span-1">
                  <WhatWeDoSections
                    title="ENVIRONMENTAL / WASTE MANAGEMENT"
                    body="Himalayas Energy can supply a wide range of services for Onshore/Offshore projects, covering the entire project life span, from the earliest conceptual studies, Basics, FEED to Detailed Design."
                  >
                    <Environment />
                  </WhatWeDoSections>
                </div>
                <div className="col-span-1">
                  <WhatWeDoSections
                    title="PETROLEUM PRODUCTS HAULAGE AND MARKETING"
                    body="Himalayas Energy can supply a wide range of services for Onshore/Offshore projects, covering the entire project life span, from the earliest conceptual studies, Basics, FEED to Detailed Design."
                  >
                    <Marketing />
                  </WhatWeDoSections>
                </div>
                <div className="col-span-1">
                  <WhatWeDoSections
                    title="MANPOWER SERVICES"
                    body="Himalayas Energy can supply a wide range of services for Onshore/Offshore projects, covering the entire project life span, from the earliest conceptual studies, Basics, FEED to Detailed Design."
                  >
                    <Manpower />
                  </WhatWeDoSections>
                </div>
                <div className="col-span-1">
                  <WhatWeDoSections
                    title="OIL & GAS EXPLORATION AND FIELD DEVELOPMENT PROGRAM"
                    body="Himalayas Energy can supply a wide range of services for Onshore/Offshore projects, covering the entire project life span, from the earliest conceptual studies, Basics, FEED to Detailed Design."
                  >
                    <Development />
                  </WhatWeDoSections>
                </div>
              </div>
              <Button className="mx-auto" path="/services.html">
                Read more
              </Button>
            </div>
          </div>
        </section>
      </div>

      <div className="relative">
        <div className="absolute top-[100px] right-[30px]">
          <svg width="9" height="62" viewBox="0 0 9 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4.5" cy="58.5" r="3" transform="rotate(-90 4.5 58.5)" fill="#181818" stroke="#D9D9D9" />
            <circle cx="4.5" cy="47.5" r="3" transform="rotate(-90 4.5 47.5)" fill="#181818" stroke="#D9D9D9" />
            <circle cx="4.5" cy="36.5" r="3" transform="rotate(-90 4.5 36.5)" fill="#181818" stroke="#D9D9D9" />
            <circle cx="4.5" cy="25.5" r="3.5" fill="white" stroke="#C00000" strokeWidth="2" />
            <circle cx="4.5" cy="14.5" r="3" transform="rotate(-90 4.5 14.5)" fill="#181818" stroke="#D9D9D9" />
            <circle cx="4.5" cy="3.5" r="3" transform="rotate(-90 4.5 3.5)" fill="#181818" stroke="#D9D9D9" />
          </svg>
        </div>
        <div className="absolute top-1/2 right-[10px]">
          <PageNumber className="w-fit">04</PageNumber>
        </div>
        <section className="pageMargin space-y-[43px] mt-[50px]">
          <Titledash>WHY CHOOSE US</Titledash>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch relative">
              <span className="max-lg:hidden bg-primary h-[92px] w-[1500px] absolute top-1/2 -translate-y-1/2 -left-[1000px] z-[-1] block"></span>
              <div className="col-span-1 max-sm:h-auto max-lg:h-[345px] flex items-center justify-center bg-main lg:bg-white px-[67px] pb-[27px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: 0.3, once: true }}
                  className="space-y-3  max-w-[240px]"
                >
                  <h1 className="text-[32px] max-lg:text-white"> 01</h1>
                  <h2 className="text-lg max-lg:text-white">QUALITY POLICY</h2>
                  <p className="text-body2 lg:text-body1">
                    We are committed to providing safe, dependable transportation service to our customers and to meet our goal, organization shall
                    strive’ Prompt & Positive response Team Performance On time delivery of goods To reduce customer complaints.
                  </p>
                </motion.div>
              </div>
              <div className="col-span-1 relative max-lg:h-[345px]">
                <Image src={qualitypolicy} placeholder="blur" alt="Why choose Himalayas Energy" className="object-cover " fill />
              </div>
              <div className="col-span-1 max-sm:h-auto max-lg:h-[356px] bg-black px-[70px] pb-[27px] flex flex-col justify-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: 0.3, once: true }}
                  className=" max-w-[240px] mx-auto space-y-3"
                >
                  <h1 className="text-[32px] text-white"> 02</h1>
                  <h2 className="text-lg text-white">CUSTOMER FOCUS</h2>
                  <p className="text-body2">
                    Our goals are to understand and meet customer needs, constantly seeking customer opinions; to anticipate market trends; to be
                    competitive; to create and deliver products and services that bring value to the customer.
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch relative">
              <div className="col-span-2 max-lg:order-2 max-lg:mx-auto">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: 0.3, once: true }}
                  className="max-w-[700px] space-y-[28px] pt-[91px] "
                >
                  <h1 className="text-2xl text-center text-black">
                    At Himalayas Energy Consults Limited we value the health and safety of our employees and all who come into contact with our
                    business. We do not want to harm or damage the environment and are committed to supply high quality and safe products to our
                    customers.
                  </h1>
                  <p className="text-body1">
                    Himalayas Energy Consults Limited places a very high premium on Health, Safety and Environmental (HSE) considerations in all its
                    activities. Although many companies have their own safety standards with which we are obliged to comply during our operations, it
                    is our policy to strive towards the improvement and provision of safe and healthy working conditions for all persons and
                    environment.
                    <br />
                    Himalayas Energy Consults Limited places a very high premium on Health, Safety and Environmental (HSE) considerations in all its
                    activities. Although many companies have their own safety standards with which we are obliged to comply during our operations, it
                    is our policy to strive towards the improvement and provision of safe and healthy working conditions for all persons and
                    environment
                  </p>
                  <div className="flex justify-end mt-10">
                    <svg width="95" height="8" viewBox="0 0 95 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="3.5" cy="4" r="3" transform="rotate(-90 3.5 4)" fill="#181818" stroke="#D9D9D9" />
                      <rect x="26" y="6" width="3" height="59" transform="rotate(-90 26 6)" fill="#181818" />
                      <rect x="43" y="8" width="8" height="39" transform="rotate(-90 43 8)" fill="black" />
                    </svg>
                  </div>
                </motion.div>
              </div>
              <div className="col-span-1 max-lg:order-1 bg-primary">
                <div className="h-[345px] lg:min-h-[50%] relative ">
                  <Image src={customerfocus} placeholder="blur" alt="Why choose Himalayas Energy" className="object-cover " fill />
                </div>
                <div className="h-[345px] flex items-center lg:min-h-[50%] bg-black text-center border-y-2 border-y-body2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ amount: 0.3, once: true }}
                    className=" max-w-[240px] mx-auto space-y-3"
                  >
                    <h1 className="text-[32px] text-white"> 03</h1>
                    <h2 className="text-lg text-white">PROCESS ENVIRONMENT</h2>
                    <p className="text-body2 pb-5">
                      Our goals are to ensure processes are structured and executed to support business performance; to run world-class standardised
                      processes; and to have a common understanding of excellent execution.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch relative">
              <div className="col-span-1 relative max-lg:h-[345px] max-lg:order-2 lg:shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ">
                <Image src={peopleexcellence} placeholder="blur" alt="Why choose Himalayas Energy" className="object-cover " fill />
              </div>
              <div className="col-span-1 max-lg:order-1 max-sm:h-auto max-lg:h-[345px] flex items-center justify-center bg-black px-[67px] lg:pt-2 pb-[27px] text-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: 0.3, once: true }}
                  className="space-y-3  max-w-[240px]"
                >
                  <h1 className="text-[32px] text-white"> 04</h1>
                  <h2 className="text-lg text-white">PEOPLE EXCELLENCE</h2>
                  <p className="text-body2 pb-5">
                    Our goals are to be an employer of choice; to have the right people in the right place; to think outside the box; to continuously
                    learn, change and improve; to provide attractive careers and to develop management and leadership capabilities.
                  </p>
                </motion.div>
              </div>
              <div className="col-span-1 relative max-lg:h-[345px]">
                <Image src={processenv} placeholder="blur" alt="Why choose Himalayas Energy" className="object-cover " fill />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="pageMargin py-[90px] space-y-10">
        <div className="max-md:flex justify-center">
          <Titledash span="max-md:mx-auto"> OUR CORE VALUES </Titledash>
        </div>
        <div className="md:flex items-center space-y-8 gap-x-8">
          <div className=" relative w-full max-w-[520px] h-[320px] max-md:mx-auto">
            <Image placeholder="blur" src={values} alt="Himalayas Energy Core values" fill />
          </div>
          <div className="items-stretch p-5 lg:p-[67px] ps-0">
            <ul className="space-y-6 max-w-[500px] max-md:mx-auto">
              <motion.li
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0, transition: { ease: "easeOut" } }}
                viewport={{ once: true }}
                className="flex gap-x-1 items-center"
              >
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" strokeWidth="4" />
                </svg>
                <p>
                  <span className="font-bold">Integrity:</span> The courage to maintain the right from the wrong without compromise.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, ease: "easeOut" } }}
                viewport={{ once: true }}
                className="flex gap-x-1 items-center"
              >
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" strokeWidth="4" />
                </svg>
                <p>
                  <span className="font-bold"> Reliability:</span>The ability to deliver on what we promise, without exception.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, ease: "easeOut" } }}
                viewport={{ once: true }}
                className="flex gap-x-1 items-center"
              >
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" strokeWidth="4" />
                </svg>
                <p>
                  <span className="font-bold"> Accountabilty:</span>The strength to be responsible for our actions and decision.
                </p>
              </motion.li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pageMargin space-y-[36px]">
        <div className="flex items-center justify-center flex-cols-1">
          <Titledash span="mx-auto">WHAT WE DO</Titledash>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[23px]">
          <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" variants={BlogsParentVariant()} className="col-span-1">
            <div className="lg:max-w-[370px] w-full ">
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                animdelay={0.2}
                className="relative max-sm:aspect-square max-lg:aspect-video lg:h-[370px]  w-full "
              >
                <Image
                  src={skills}
                  placeholder="blur"
                  className="object-cover object-top "
                  fill
                  alt="Himalayas Energy Consults Limited offers education and training opportunities for
                advancement."
                />
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 150 }, visible: { opacity: 1, y: 0, transition: { ease: "easeOut", when: "beforeChildren" } } }}
                className="px-[14px] relative top-[-117px]"
              >
                <span className="block w-[55px] h-[6px] mx-auto bg-primary"></span>
                <div className="bg-white max-sm:max-w-[100%] max-lg:max-w-[80%] mx-auto px-[13px] py-[8px]  md:space-y-[13px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                  <SubTitleDash>SKILLS DEVELOPMENT</SubTitleDash>
                  <p className="text-body1 max-lg:py-5">
                    Himalayas Energy Consults Limited offers education and training opportunities for advancement. Employee development takes the form
                    of e learning, on-the-job coaching and training, development projects, secondments and classroom-based training. In-house
                    programmes are provided to improve productivity by equipping employees with behavioural skills
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" variants={BlogsParentVariant(0.4)} className="col-span-1">
            <div className="lg:max-w-[370px] w-full ">
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="relative max-sm:aspect-square max-lg:aspect-video lg:h-[370px]  w-full "
              >
                <Image
                  src={social}
                  className="object-cover object-top "
                  fill
                  alt="Himalayas Energy Consults Limited offers education and training opportunities for
                advancement."
                />
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 150 }, visible: { opacity: 1, y: 0, transition: { ease: "easeOut", when: "beforeChildren" } } }}
                className="px-[14px] relative top-[-117px]"
              >
                <motion.span className="block w-[55px] h-[6px] mx-auto bg-primary"></motion.span>
                <div className="bg-white max-sm:max-w-[100%] max-lg:max-w-[80%] mx-auto px-[13px] py-[8px]  md:space-y-[13px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                  <SubTitleDash animdelay={0.2}>SOCIAL RESPONSIBILITY</SubTitleDash>
                  <p className="text-body1 max-lg:py-5">
                    Himalayas Energy Consults Limited takes seriously the influence and impact its business has on society, the economy, and the
                    environment. Corporate Social Investment (CSI) is an inherent part of how Himalayas Energy Consults Limited currently does
                    business. Economically and socially strong communities enhance Himalayas Energy Consults Limited success.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div viewport={{ once: true }} initial="hidden" whileInView="visible" variants={BlogsParentVariant(0.6)} className="col-span-1">
            <div className="lg:max-w-[370px] w-full ">
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="relative max-sm:aspect-square max-lg:aspect-video lg:h-[370px]  w-full "
              >
                <Image
                  src={economic}
                  className="object-cover object-top "
                  fill
                  alt="Himalayas Energy Consults Limited offers education and training opportunities for
                advancement."
                />
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 150 }, visible: { opacity: 1, y: 0, transition: { ease: "easeOut", when: "beforeChildren" } } }}
                className="px-[14px] relative top-[-117px]"
              >
                <span className="block w-[55px] h-[6px] mx-auto bg-primary"></span>
                <div className="bg-white max-sm:max-w-[100%] max-lg:max-w-[80%] mx-auto px-[13px] py-[8px]  md:space-y-[13px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                  <SubTitleDash animdelay={0.2}>ECONOMIC EMPOWERMENT INITIATIVES</SubTitleDash>
                  <p className="text-body1 max-lg:py-5">
                    Himalayas Energy Consults Limited places a very high premium on Health, Safety and Environmental (HSE) considerations in all its
                    activities. Although many companies have their own safety standards with which we are obliged to comply during our operations, it
                    is our policy to strive towards the improvement and provision of safe and healthy working conditions for everyone.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer index={0} />
    </>
  );
}
