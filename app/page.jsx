import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <div className="pt-[27px] h-screen w-screen bg-[url('/banner.png')] bg-cover bg-no-repeat">
        <div className="pageMargin relative">
          <Navbar whiteShade={true} />
          <div id="caption" className="max-w-[660px] absolute space-y-[54px] left-0 top-1/2 translate-y-1/2 ">
            <span className="flex gap-x-2 items-center ">
              <svg width="29" height="8" viewBox="0 0 29 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3.5" cy="4" r="3" fill="#181818" stroke="#D9D9D9" />
                <circle cx="14.5" cy="4" r="3" fill="#181818" stroke="#D9D9D9" />
                <circle cx="25.5" cy="4" r="3" fill="#181818" stroke="#D9D9D9" />
              </svg>
              <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4.5" cy="5" r="3.5" fill="white" stroke="#C00000" stroke-width="2" />
              </svg>
              <p className="text-white text-xs">01/06</p>
            </span>
            <div className="w-full p-8 relative before:block before:absolute before:bg-primary before:w-2 before:h-full before:left-0 before:top-0">
              <h1 className="text-[40px]/[60px] font-bold text-white">DRIVING INNOVATION AND EXCELLENCE IN AFRICA'S OIL & GAS INDUSTRY</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <div className="max-w-[663px] mx-auto ">
          <span className="w-[110px] h-3 bg-primary mx-auto"></span>
          <div className="bg-white py-[20px] px-[30p] flex gap-x-[36px]">
            <div></div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
