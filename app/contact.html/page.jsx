import Footer from "@/components/footer";
import { parentStagger } from "@/components/framer-variants";
import TitleIntro from "@/components/intro";
import Navbar from "@/components/navbar";
import * as motion from "framer-motion/client";
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
        <TitleIntro title="CONTACT US">Connect with Us to Fuel Your Energy Needs</TitleIntro>
        <div className="mt-[38px] space-y-[62px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              variants={parentStagger(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              className="space-y-8"
            >
              <motion.div variants={{ hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1 } }} viewport={{ once: true }}>
                <h1 className="text-black">OUR CONTACTS OFFICE ADDRESS: </h1>
                <p className="text-body1">33b, Alfred Rewane Road, Ikoyi, Lagos, Nigeria </p>
              </motion.div>
              <motion.div variants={{ hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1 } }} viewport={{ once: true }}>
                <h1 className="text-black">TELEPHONE LINES: </h1>
                <p className="text-body1">+234(1)896-3099, +2348038696970 </p>
              </motion.div>
              <motion.div variants={{ hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1 } }} viewport={{ once: true }}>
                <h1 className="text-black">EMAIL ADDRESS: </h1>
                <p className="text-body1">info@himalayasenergy.com</p>
              </motion.div>
            </motion.div>
            <form action="" className="space-y-8 max-lg:order-2">
              <div className="space-y-3">
                <h1 className="text-2xl">Send us a Message</h1>
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: "80px" }}
                  viewport={{ once: true }}
                  className="bg-black block h-1 w-20"
                ></motion.span>
              </div>
              <div className="space-y-[49px] max-w-[665px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="col-span-1">
                    <input
                      type="text"
                      className="px-[10px] rounded-2xl w-full py-[20px] bg-[#F6F6F6] placeholder:text-body1"
                      placeholder="Your Name"
                    />
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
            <div className="bg-black col-span-full aspect-video">
              <iframe
                className="w-full h-full border-none"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.8378576244795!2d3.4254514334452377!3d6.450354132020264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4cfc4fa14b9%3A0xc3d6ea1a1a3990a8!2sMagnumflo%20Place%2C%2033b%20Alfred%20Rewane%20Rd%2C%20Ikoyi%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1714319774223!5m2!1sen!2sng"
                allowfullscreen="false"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
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
