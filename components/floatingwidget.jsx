"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const FlotingWidget = ({ index }) => {
  const [floating, setFloating] = useState(false);
  const ref = useRef();
  useEffect(
    function () {
      // i want to cancle the event listner on unmount, i dont think its necessary since all links are a tags no Link
      // return null;
      function scrollMonitor() {
        if (window.innerWidth < 768 && floating) return setFloating(false);
        if (window.innerWidth < 768) return null;
        const scrollPosition = window.scrollY;
        if (scrollPosition > 1000 && !floating) {
          setFloating(true);
          ref.current.classList.remove("hidden");
          ref.current.classList.add("animate__animated", "animate__bounceInUp");
          ref.current.classList.remove("animate__animated", "animate__backOutDown");
        } else if (scrollPosition < 1000 && floating) {
          setFloating(false);
          ref.current.classList.remove("animate__animated", "animate__bounceInUp");
          ref.current.classList.add("animate__animated", "animate__backOutDown");
          //   setTimeout(() => ref.current.classList.add("hidden"), 1000);
        }
      }
      window.addEventListener("scroll", scrollMonitor);
      return () => {
        window.removeEventListener("scroll", scrollMonitor);
      };
    },
    [floating]
  );
  return (
    <div
      ref={ref}
      className="fixed max-md:hidden  border border-white/30 hidden h-0 bottom-10 right-10 space-y-[21px] px-[10px] rounded-2xl py-4 bg-black/90 z-50"
    >
      <div className="relative flex gap-x-2 group justify-center cursor-pointer">
        <Link
          prefetch={false}
          href="/home"
          className="absolute hover:underline bg-black/90 py-3 w-0 transition-all delay-500 group-hover:p-[10px] text-white  left-0 overflow-hidden group-hover:left-[-100px] top-1/2 -translate-y-1/2 group-hover:w-[100px] rounded-l-2xl "
        >
          Home
        </Link>
        <div className={`flex gap-x-2 relative justify-center ${index == 0 && "px-[10px] py-2 bg-white  border-b border-b-primary rounded-full"} `}>
          <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.4896 0.170777C12.3476 0.0601037 12.1728 0 11.9928 0C11.8128 0 11.638 0.0601037 11.496 0.170777L0 9.13478L0.9944 10.3924L2.4 9.29638V19.1996C2.40085 19.6237 2.56969 20.0301 2.86956 20.33C3.16944 20.6299 3.57591 20.7987 4 20.7996H20C20.4241 20.7987 20.8306 20.6299 21.1304 20.33C21.4303 20.0301 21.5992 19.6237 21.6 19.1996V9.30358L23.0056 10.3996L24 9.14198L12.4896 0.170777ZM13.6 19.1996H10.4V12.7996H13.6V19.1996ZM15.2 19.1996V12.7996C15.2 12.3752 15.0314 11.9683 14.7314 11.6682C14.4313 11.3681 14.0243 11.1996 13.6 11.1996H10.4C9.97565 11.1996 9.56869 11.3681 9.26863 11.6682C8.96857 11.9683 8.8 12.3752 8.8 12.7996V19.1996H4V8.04918L12 1.81718L20 8.05718V19.1996H15.2Z"
              className={`${index == 0 ? "fill-[#181818]" : "fill-[#D9D9D9]"}`}
            />
          </svg>
        </div>
      </div>
      <div className="relative flex gap-x-2 group justify-center cursor-pointer">
        <Link
          prefetch={false}
          href="/about"
          className="absolute hover:underline bg-black/90 py-3 w-0 transition-all delay-500 group-hover:p-[10px] text-white  left-0 overflow-hidden group-hover:left-[-110px] top-1/2 -translate-y-1/2 group-hover:w-[100px] rounded-l-2xl "
        >
          About
        </Link>
        <div className={`flex gap-x-2 relative justify-center ${index == 1 && " px-[10px] py-2 bg-white  border-b border-b-primary rounded-full"} `}>
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 7.7998H11V5.7998H9M10 18.7998C5.59 18.7998 2 15.2098 2 10.7998C2 6.3898 5.59 2.7998 10 2.7998C14.41 2.7998 18 6.3898 18 10.7998C18 15.2098 14.41 18.7998 10 18.7998ZM10 0.799805C8.68678 0.799805 7.38642 1.05846 6.17317 1.56101C4.95991 2.06356 3.85752 2.80015 2.92893 3.72874C1.05357 5.6041 0 8.14764 0 10.7998C0 13.452 1.05357 15.9955 2.92893 17.8709C3.85752 18.7995 4.95991 19.5361 6.17317 20.0386C7.38642 20.5411 8.68678 20.7998 10 20.7998C12.6522 20.7998 15.1957 19.7462 17.0711 17.8709C18.9464 15.9955 20 13.452 20 10.7998C20 9.48659 19.7413 8.18623 19.2388 6.97297C18.7362 5.75971 17.9997 4.65732 17.0711 3.72874C16.1425 2.80015 15.0401 2.06356 13.8268 1.56101C12.6136 1.05846 11.3132 0.799805 10 0.799805ZM9 15.7998H11V9.7998H9V15.7998Z"
              className={`${index == 1 ? "fill-[#181818]" : "fill-[#D9D9D9]"}`}
            />
          </svg>
        </div>
      </div>
      <div className="relative flex gap-x-2 group justify-center cursor-pointer">
        <Link
          prefetch={false}
          href="/services"
          className="absolute hover:underline bg-black/90 py-3 w-0 transition-all delay-500 group-hover:p-[10px] text-white  left-0 overflow-hidden group-hover:left-[-110px] top-1/2 -translate-y-1/2 group-hover:w-[100px] rounded-l-2xl "
        >
          Services
        </Link>
        <div className={`flex gap-x-2 relative justify-center ${index == 2 && " px-[10px] py-2 bg-white  border-b border-b-primary rounded-full"} `}>
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.476 0.799805V1.8543C12.8608 1.95886 12.2767 2.19919 11.766 2.5578L10.992 1.8303L9.96075 2.9328L10.7108 3.63556C10.3685 4.13604 10.1366 4.7036 10.0305 5.30056H8.976V6.80056H10.0305C10.14 7.42306 10.386 7.99006 10.734 8.48806L9.93675 9.26056L11.0168 10.3406L11.7892 9.54255C12.2872 9.89056 12.8542 10.1366 13.4767 10.2461V11.2998H14.9767V10.2453C15.5737 10.1394 16.1412 9.9078 16.6418 9.56581L17.3438 10.3158L18.4463 9.28381L17.7188 8.5113C18.0713 8.0088 18.3113 7.42756 18.4222 6.79981H19.476V5.29981H18.4215C18.3138 4.69247 18.0736 4.11632 17.718 3.6123L18.4215 2.9088L17.3663 1.8543L16.6635 2.5578C16.1595 2.20224 15.5833 1.96205 14.976 1.8543V0.799805H13.476ZM14.226 3.28455C14.5898 3.28216 14.9505 3.35205 15.2872 3.49016C15.6238 3.62827 15.9296 3.83186 16.1869 4.0891C16.4442 4.34635 16.6479 4.65213 16.7861 4.98871C16.9243 5.32529 16.9943 5.68596 16.992 6.04981C16.992 7.59106 15.7673 8.81581 14.226 8.81581C12.6848 8.81581 11.46 7.59106 11.46 6.04981C11.46 4.50855 12.6848 3.2838 14.226 3.2838V3.28455ZM4.4985 7.71331L3.117 8.27581L3.6555 9.63331C2.93872 10.0623 2.33574 10.6576 1.8975 11.3688L0.5625 10.8288L0 12.2126L1.335 12.7511C1.22967 13.1568 1.17475 13.5739 1.1715 13.9931C1.1715 14.4206 1.23525 14.8376 1.335 15.2351L0 15.7751L0.5625 17.1573L1.8975 16.6173C2.33184 17.3377 2.93526 17.9414 3.6555 18.3761L3.1155 19.7111L4.49925 20.2736L5.03925 18.9386C5.44496 19.0439 5.8621 19.0988 6.28125 19.1021C6.70875 19.1021 7.12725 19.0383 7.52325 18.9386L8.06325 20.2736L9.4455 19.7111L8.9055 18.3761C9.61743 17.9387 10.2129 17.3356 10.641 16.6181L11.9985 17.1566L12.561 15.7743L11.2035 15.2343C11.301 14.8368 11.367 14.4191 11.367 13.9923C11.367 13.5648 11.3018 13.1463 11.202 12.7496L12.5618 12.2111L11.9993 10.8273L10.6418 11.3673C10.2108 10.658 9.61555 10.0628 8.90625 9.63181L9.44625 8.2743L8.0625 7.7118L7.52475 9.06931C7.11848 8.96562 6.70126 8.91098 6.282 8.90656C5.8545 8.90656 5.4375 8.97106 5.04 9.07006L4.5 7.71256L4.4985 7.71331ZM6.2805 10.4073C8.27775 10.4073 9.8655 11.9973 9.8655 13.9938C9.867 15.9911 8.27775 17.6028 6.2805 17.6028C5.80639 17.6034 5.33683 17.5105 4.8987 17.3293C4.46056 17.1481 4.06248 16.8823 3.72723 16.5471C3.39199 16.2118 3.12617 15.8137 2.94501 15.3756C2.76385 14.9375 2.67091 14.4679 2.6715 13.9938C2.6715 11.9966 4.284 10.4073 6.2805 10.4073Z"
              fill="#D9D9D9"
              className={`${index == 2 ? "fill-[#181818]" : "fill-[#D9D9D9]"}`}
            />
          </svg>
        </div>
      </div>
      <div className="relative flex gap-x-2 group justify-center cursor-pointer">
        <Link
          prefetch={false}
          href="/sustainability"
          className="absolute hover:underline bg-black/90 py-3 w-0 transition-all delay-500 group-hover:p-[10px] text-white  left-0 overflow-hidden group-hover:left-[-155px] top-1/2 -translate-y-1/2 group-hover:w-[150px] rounded-l-2xl "
        >
          Sustainability
        </Link>
        <div className={`flex gap-x-2 relative justify-center ${index == 3 && " px-[10px] py-2 bg-white  border-b border-b-primary rounded-full"} `}>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.1775 21.0859C14.8725 21.7065 13.4451 22.0268 12 22.0234C6.62402 22.0234 2.25002 17.6494 2.25002 12.2734C2.25002 9.96719 3.04277 7.78919 4.50002 6.04244V7.77344H6.00002V3.27344H1.50002V4.77344H3.63152C1.77195 6.82823 0.744641 9.50213 0.750021 12.2734C0.750021 18.4767 5.79677 23.5234 12 23.5234C13.6682 23.5269 15.316 23.1569 16.8225 22.4404L16.1775 21.0859Z"
              className={`${index == 3 ? "fill-[#181818]" : "fill-[#D9D9D9]"}`}
            />
            <path
              d="M15.75 7.02344C13.38 7.02344 11.4368 8.86619 11.2665 11.1934C10.442 10.4411 9.36618 10.0238 8.25 10.0234H5.25V13.0234C5.25 15.5052 7.269 17.5234 9.75 17.5234H11.25V20.5234H12.75V14.5234H14.25C16.731 14.5234 18.75 12.5052 18.75 10.0234V7.02344H15.75ZM9.75 16.0234C8.0955 16.0234 6.75 14.6779 6.75 13.0234V11.5234H8.25C9.9045 11.5234 11.25 12.8689 11.25 14.5234V14.9629L9.53025 13.2432L8.46975 14.3037L10.1895 16.0234H9.75ZM17.25 10.0234C17.25 11.6779 15.9045 13.0234 14.25 13.0234H13.8105L15.5303 11.3037L14.4697 10.2432L12.75 11.9629V11.5234C12.75 9.86894 14.0955 8.52344 15.75 8.52344H17.25V10.0234Z"
              className={`${index == 3 ? "fill-[#181818]" : "fill-[#D9D9D9]"}`}
            />
            <path
              d="M23.25 12.2735C23.25 6.07021 18.2032 1.02346 12 1.02346C10.3318 1.01999 8.68401 1.39004 7.17749 2.10646L7.82249 3.46096C9.12751 2.84041 10.555 2.52007 12 2.52346C17.376 2.52346 21.75 6.89746 21.75 12.2735C21.75 14.5797 20.9572 16.7577 19.5 18.5045V16.7735H18V21.2735H22.5V19.7735H20.3685C22.2281 17.7187 23.2554 15.0448 23.25 12.2735Z"
              className={`${index == 3 ? "fill-[#181818]" : "fill-[#D9D9D9]"}`}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FlotingWidget;
