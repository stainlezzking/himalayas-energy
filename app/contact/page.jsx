import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const Page = () => {
  return (
    <>
      <main className="pageMargin">
        <Navbar index={4} />
        <span className="flex gap-x-2 items-center mt-[72px] mb-[44px]">
          <svg width="29" height="8" viewBox="0 0 29 8" fill="none">
            <circle cx="3.5" cy="4" r="3" fill="#181818" stroke="#D9D9D9" />
            <circle cx="14.5" cy="4" r="3" fill="#181818" stroke="#D9D9D9" />
            <circle cx="25.5" cy="4" r="3" fill="#181818" stroke="#D9D9D9" />
          </svg>
          <svg width="9" height="10" viewBox="0 0 9 10" fill="none">
            <circle cx="4.5" cy="5" r="3.5" fill="white" stroke="#C00000" strokeWidth="2" />
          </svg>
          <p className="text-xs text-black">05/05</p>
        </span>
        <div className="relative gap-x-6 items-center">
          <span className="bg-primary block absolute top-1/2 -translate-y-1/2 w-2 h-[100px]"></span>
          <div className="space-y-3 ps-6 w-[630px]">
            <h4 className=" text-[14px]">CONTACT US</h4>
            <h1 className="text-4xl font-bold">Connect with Us to Fuel Your Energy Needs</h1>
          </div>
        </div>
        <div className="mt-[38px] space-y-[62px]">
          <div className="space-y-8">
            <div>
              <h1 className="text-black">OUR CONTACTS OFFICE ADDRESS: </h1>
              <p className="text-body1">33b, Alfred Rewane Road, Ikoyi, Lagos, Nigeria </p>
            </div>
            <div>
              <h1 className="text-black">TELEPHONE LINES: </h1>
              <p className="text-body1">+234(1)896-3099, +2348038696970 </p>
            </div>
            <div>
              <h1 className="text-black">EMAIL ADDRESS: </h1>
              <p className="text-body1">info@himalayasenergy.com</p>
            </div>
          </div>
          <form action="" className="space-y-8">
            <div className="space-y-3">
              <h1 className="text-2xl">Send us a Message</h1>
              <span className="bg-black block h-1 w-20"></span>
            </div>
            <div className="space-y-[49px] max-w-[665px]">
              <div className="grid grid-cols-2 gap-x-3">
                <div className="col-span-1">
                  <input type="text" className="px-[10px] rounded-2xl w-full py-[20px] bg-[#F6F6F6] placeholder:text-body1" placeholder="Your Name" />
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    className="px-[10px] rounded-2xl w-full py-[20px] bg-[#F6F6F6] placeholder:text-body1"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <textarea
                name=""
                className="bg-[#F6F6F6] text-body1 w-full px-[10px] rounded-2xl py-[20px] placeholder:text-body1"
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>
          </form>
        </div>
      </main>
      <div className="my-[119px] flex justify-center">
        <svg width="95" height="8" viewBox="0 0 95 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="3.5" cy="4" r="3" transform="rotate(-90 3.5 4)" fill="#181818" stroke="#D9D9D9" />
          <rect x="26" y="6" width="3" height="59" transform="rotate(-90 26 6)" fill="#181818" />
          <rect x="43" y="8" width="8" height="39" transform="rotate(-90 43 8)" fill="black" />
        </svg>
      </div>
      <Footer />
    </>
  );
};

export default Page;
