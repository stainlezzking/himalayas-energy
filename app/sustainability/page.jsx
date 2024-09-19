import Navbar from "@/components/navbar";
import Image from "next/image";
import energy1 from "@/public/energy1.png";
import energy2 from "@/public/energy2.png";
import Footer from "@/components/footer";
import ExportedImage from "next-image-export-optimizer";
import TitleIntro from "@/components/intro";

const Page = () => {
  return (
    <>
      <main className="pageMargin">
        <Navbar index={3} />
        <span className="flex gap-x-2 items-center mt-[72px] mb-[44px]">
          <svg width="29" height="8" viewBox="0 0 29 8" fill="none">
            <circle cx="3.5" cy="4" r="3" fill="#181818" stroke="#D9D9D9" />
            <circle cx="14.5" cy="4" r="3" fill="#181818" stroke="#D9D9D9" />
            <circle cx="25.5" cy="4" r="3" fill="#181818" stroke="#D9D9D9" />
          </svg>
          <svg width="9" height="10" viewBox="0 0 9 10" fill="none">
            <circle cx="4.5" cy="5" r="3.5" fill="white" stroke="#C00000" strokeWidth="2" />
          </svg>
          <p className="text-xs text-black">04/05</p>
        </span>
        <TitleIntro title="SUSTAINABILITY">Driving Energy Innovation with a Greener Future in Mind</TitleIntro>
        <div className="mt-[38px] mb-[76px] grid grid-cols-2 space-y-10 gap-x-[10px] relative">
          <span className="absolute bg-primary sustainable-overlap about-intro-custom-width h-[126px] lg:h-[92px] top-1/2 -translate-y-1/2"></span>
          <div className="col-span-full lg:col-span-1 aspect-[4/3] relative">
            <Image src={energy1} fill alt="" />
          </div>
          <div className="col-span-full lg:col-span-1 aspect-[4/3] relative">
            <Image src={energy2} fill alt="" />
          </div>
        </div>
        <ul className="space-y-[36px]">
          <li className="space-y-3">
            <div className="space-y-3">
              <h1 className="text-main">Prioritizing Health, Safety, and Environmental Responsibility</h1>
              <span className=" border-b border-b-primary pt-1 block w-[128px]"></span>
            </div>
            <p className="text-body1">
              At Himalayas Energy Consults Limited, we recognize that the health, safety, and environmental (HSE) aspects of our operations are not just a
              priority—they are a fundamental responsibility. As an integral part of the global energy industry, we are acutely aware of the impact our
              activities can have on the lives of individuals, the stability of communities, and the preservation of our environment. Our commitment to HSE
              excellence is driven by the understanding that the long-term success of our company is inextricably linked to the wellbeing of our employees, the
              communities in which we operate, and the planet we all share.
            </p>
          </li>
          <li className="space-y-3">
            <div className="space-y-3">
              <h1 className="text-main">Health and Safety: A Culture of Care and Prevention</h1>
              <span className=" border-b border-b-primary pt-1 block w-[128px]"></span>
            </div>
            <p className="text-body1">
              Himalayas Energy is committed to creating a work environment where the health and safety of every employee is safeguarded. We strive to instill a
              culture of care, where safety is not just a policy but a shared value among all members of our team. To achieve this, we have implemented rigorous
              safety standards that exceed industry requirements, ensuring that our operations are conducted with the utmost care and diligence. <br />
              Our safety protocols are continuously reviewed and enhanced to address emerging risks and to incorporate the latest advancements in safety
              technology and practices. We provide comprehensive training and resources to our employees, empowering them to take ownership of their safety and
              that of their colleagues. Through regular safety drills, risk assessments, and health screenings, we ensure that everyone at Himalayas Energy is
              equipped to perform their duties safely and effectively.
            </p>
          </li>
          <li className="space-y-3">
            <div className="space-y-3">
              <h1 className="text-main">Environmental Stewardship: Protecting Our Planet for Future Generations</h1>
              <span className=" border-b border-b-primary pt-1 block w-[128px]"></span>
            </div>
            <p className="text-body1">
              As global demand for energy continues to rise, driven by population growth and increasing urbanization, the need for sustainable energy solutions
              has never been more critical. Himalayas Energy is committed to minimizing our environmental footprint and contributing to the global transition
              towards a more sustainable energy future. <br />
              We are actively involved in initiatives that promote the responsible use of natural resources, reduce emissions, and prevent environmental
              degradation. Our environmental management systems are designed to ensure that our operations are conducted in a manner that protects the air,
              water, and land. From adopting cleaner technologies to enhancing waste management practices, we are constantly exploring new ways to reduce our
              impact on the environment.
            </p>
          </li>
          <li className="space-y-3">
            <div className="space-y-3">
              <h1 className="text-main">Building a Sustainable Future</h1>
              <span className=" border-b border-b-primary pt-1 block w-[128px]"></span>
            </div>
            <p className="text-body1">
              The world is changing rapidly, and so are the demands placed on our energy systems. By 2050, the global population is expected to reach 9 billion,
              with the majority of people living in cities. This urbanization will place unprecedented pressure on our food, water, and energy resources.
              Himalayas Energy is committed to meeting these challenges head-on by developing energy solutions that are not only reliable and efficient but also
              environmentally responsible. <br />
              We believe that our role in the energy industry extends beyond providing the fuel that powers modern life. It is also about ensuring that the
              growth and development we help to drive are sustainable and beneficial for all. By prioritizing health, safety, and environmental responsibility
              in everything we do, Himalayas Energy is helping to build a future where people, economies, and the environment can thrive together.
            </p>
          </li>
        </ul>
      </main>
      <div className="my-[119px] flex justify-center">
        <svg width="95" height="8" viewBox="0 0 95 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="3.5" cy="4" r="3" transform="rotate(-90 3.5 4)" fill="#181818" stroke="#D9D9D9" />
          <rect x="26" y="6" width="3" height="59" transform="rotate(-90 26 6)" fill="#181818" />
          <rect x="43" y="8" width="8" height="39" transform="rotate(-90 43 8)" fill="black" />
        </svg>
      </div>
      <Footer index={3} />
    </>
  );
};

export default Page;
