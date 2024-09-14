import Navbar from "@/components/navbar";
import Titledash from "@/components/title-dash";
import aboutIntro from "@/public/about-intro.png";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <div className="pageMargin">
        <Navbar index={1} />
        <span className="flex gap-x-2 items-center mt-[72px] mb-[43px]">
          <svg width="29" height="8" viewBox="0 0 29 8" fill="none">
            <circle cx="3.5" cy="4" r="3" fill="#181818" stroke="#D9D9D9" />
            <circle cx="14.5" cy="4" r="3" fill="#181818" stroke="#D9D9D9" />
            <circle cx="25.5" cy="4" r="3" fill="#181818" stroke="#D9D9D9" />
          </svg>
          <svg width="9" height="10" viewBox="0 0 9 10" fill="none">
            <circle cx="4.5" cy="5" r="3.5" fill="white" stroke="#C00000" stroke-width="2" />
          </svg>
          <p className="text-white text-xs">02/06</p>
        </span>
        <div className="relative gap-x-6 items-center mb-[94px]">
          <span className="bg-primary block absolute top-1/2 -translate-y-1/2 w-2 h-[100px]"></span>
          <div className="space-y-3 ps-6 w-[630px] font-bold">
            <h4 className="text-main text-[14px]">WHO WE ARE</h4>
            <h1 className="text-4xl">Leading the Charge in Africa's Oil & Gas Transformation</h1>
          </div>
        </div>
      </div>
      <div>
        <setcion className="pageMargin grid grid-cols-12 gap-x-[36px]">
          <div className="relative col-span-5">
            <Image src={aboutIntro} fill alt="" />
          </div>
          <div className="col-span-7 p-[40px] text-body1">
            Himalayas Energy Consults Limited was established in 2023 in Nigeria as a full-service company providing a range of services to the Oil &
            Gas industry. Himalayas Energy is committed to continually growing the Oil and Gas Sector on the African continent and is always looking
            for new and innovative ways of achieving this goal. With over six (6) years’ experience in the Oil and Gas industry, our vast array of
            services includes Pipeline Fabrication, Construction and Laying of Offshore/Onshore Pipelines, Gas Distribution, Vessel Supply, just to
            mention a few. <br /> Himalayas Energy Consults Limited currently has its head office in Nigeria but with an ever buoyancy in the target
            markets, spreading its wings even wider to cater for the process industries, especially in the emerging African Oil and Gas sector. The
            management of Himalayas Energy Consults Limited is always focusing to deliver high quality projects within the scheduled time, and in full
            compliance with the clients’ specifications and applicable standards.
          </div>
          <div className="relative col-span-full my-[135px]">
            <span className="absolute top-1/2 right-0">
              <svg width="95" height="8" viewBox="0 0 95 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3.5" cy="4" r="3" transform="rotate(-90 3.5 4)" fill="#181818" stroke="#D9D9D9" />
                <rect x="26" y="6" width="3" height="59" transform="rotate(-90 26 6)" fill="#181818" />
                <rect x="43" y="8" width="8" height="39" transform="rotate(-90 43 8)" fill="black" />
              </svg>
            </span>
            <p className="max-w-[764px] mx-auto text-center font-medium">
              We are at the fore front of providing cutting edge technology to our extensive clientele in the African Oil and Gas sector and this we
              achieve through our unique strategic partnership alliances with world renowned industry leaders and experts.
            </p>
          </div>
        </setcion>
      </div>
      <div className="bg-[#EFF0F3]">
        <section className="py-[120px] pageMargin relative">
          <span className="block absolute top-20 -left-5">
            <svg width="9" height="62" viewBox="0 0 9 62" fill="none">
              <circle cx="4.5" cy="58.5" r="3" transform="rotate(-90 4.5 58.5)" fill="#181818" stroke="#D9D9D9" />
              <circle cx="4.5" cy="47.5" r="3" transform="rotate(-90 4.5 47.5)" fill="#181818" stroke="#D9D9D9" />
              <circle cx="4.5" cy="36.5" r="3" transform="rotate(-90 4.5 36.5)" fill="#181818" stroke="#D9D9D9" />
              <circle cx="4.5" cy="25.5" r="3.5" fill="white" stroke="#C00000" stroke-width="2" />
              <circle cx="4.5" cy="14.5" r="3" transform="rotate(-90 4.5 14.5)" fill="#181818" stroke="#D9D9D9" />
              <circle cx="4.5" cy="3.5" r="3" transform="rotate(-90 4.5 3.5)" fill="#181818" stroke="#D9D9D9" />
            </svg>
          </span>
          <div className="grid grid-cols-2 gap-x-[26px]">
            <div className=" col-span-1 py-[35px] px-5 gap-x-[32px] flex items-center bg-[#F9F8F8]">
              <div className="bg-white py-[54px] px-[42px]">
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
            </div>
            <div className=" col-span-1 py-[35px] px-5 gap-x-[32px] flex items-center bg-[#F9F8F8]">
              <div className="bg-white py-[54px] px-[42px]">
                <svg width="58" height="74" viewBox="0 0 58 74" fill="none">
                  <path
                    d="M51.8242 33.9079C50.888 32.6867 49.7482 31.6283 48.6898 30.57C45.9625 28.1276 42.8687 26.3772 40.2635 23.8126C34.1982 17.8694 32.8549 8.05908 36.722 0.52832C32.8549 1.46458 29.4762 3.58133 26.586 5.90162C16.0429 14.3686 11.8908 29.3081 16.8571 42.1307C17.0199 42.5378 17.1827 42.9448 17.1827 43.474C17.1827 44.3696 16.5721 45.1837 15.758 45.5094C14.8217 45.9164 13.8448 45.6722 13.0713 45.0209C12.8403 44.8274 12.6471 44.5927 12.5014 44.3289C7.90157 38.5078 7.16885 30.1629 10.2626 23.487C3.46453 29.0231 -0.239794 38.3857 0.289395 47.2191C0.533636 49.2544 0.777877 51.2897 1.46989 53.3251C2.03979 55.7675 3.13887 58.2099 4.36008 60.3674C8.75642 67.4097 16.3686 72.4573 24.5507 73.475C33.2619 74.5741 42.5838 72.9865 49.2597 66.9619C56.7091 60.2045 59.3143 49.3765 55.4879 40.0954L54.9587 39.037C54.1038 37.1645 51.8242 33.9079 51.8242 33.9079ZM38.9609 59.5532C37.8211 60.5302 35.9486 61.5886 34.4831 61.9956C29.924 63.6239 25.3648 61.3443 22.6782 58.6577C27.5223 57.5179 30.4124 53.9357 31.2673 50.3128C31.9593 47.0562 30.6567 44.3696 30.1275 41.2352C29.639 38.2229 29.7204 35.6583 30.8195 32.8495C31.5929 34.3964 32.4071 35.9433 33.384 37.1645C36.5185 41.2352 41.444 43.0263 42.5024 48.5624C42.6652 49.1323 42.7466 49.7022 42.7466 50.3128C42.8687 53.6507 41.4033 57.3144 38.9609 59.5532Z"
                    fill="#C00000"
                  />
                </svg>
              </div>
              <div className="space-y-[15px]">
                <Titledash> OUR VISSION</Titledash>
                <p className="text-body1">
                  Our vision is to be the first choice of all companies for the provision of cutting-edge technology in the upstream and downstream
                  oil and gas sector.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
