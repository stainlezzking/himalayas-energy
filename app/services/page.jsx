import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import service1 from "@/public/image1.png";
import service2 from "@/public/image2.png";
import service3 from "@/public/image3.png";
import service4 from "@/public/image4.png";
import Image from "next/image";
const Page = () => {
  return (
    <>
      <main>
        <div className="pageMargin">
          <Navbar index={2} />
          <span className="flex gap-x-2 items-center mt-[72px] mb-[44px]">
            <svg width="29" height="8" viewBox="0 0 29 8" fill="none">
              <circle cx="3.5" cy="4" r="3" fill="#181818" stroke="#D9D9D9" />
              <circle cx="14.5" cy="4" r="3" fill="#181818" stroke="#D9D9D9" />
              <circle cx="25.5" cy="4" r="3" fill="#181818" stroke="#D9D9D9" />
            </svg>
            <svg width="9" height="10" viewBox="0 0 9 10" fill="none">
              <circle cx="4.5" cy="5" r="3.5" fill="white" stroke="#C00000" stroke-width="2" />
            </svg>
            <p className="text-xs text-black">03/05</p>
          </span>
          <div className="relative gap-x-6 items-center">
            <span className="bg-primary block absolute top-1/2 -translate-y-1/2 w-2 h-[100px]"></span>
            <div className="space-y-3 ps-6 w-[630px] ">
              <h4 className="text-main text-[14px]">WHO WE ARE</h4>
              <h1 className="text-4xl font-bold">Innovating for a Sustainable Energy Future in Africa</h1>
            </div>
          </div>
        </div>
        <div className="relative">
          <span className="block absolute top-1/2 -translate-y-1/2 left-10">
            <svg width="9" height="62" viewBox="0 0 9 62" fill="none">
              <circle cx="4.5" cy="58.5" r="3" transform="rotate(-90 4.5 58.5)" fill="#181818" stroke="#D9D9D9" />
              <circle cx="4.5" cy="47.5" r="3" transform="rotate(-90 4.5 47.5)" fill="#181818" stroke="#D9D9D9" />
              <circle cx="4.5" cy="36.5" r="3" transform="rotate(-90 4.5 36.5)" fill="#181818" stroke="#D9D9D9" />
              <circle cx="4.5" cy="25.5" r="3.5" fill="white" stroke="#C00000" stroke-width="2" />
              <circle cx="4.5" cy="14.5" r="3" transform="rotate(-90 4.5 14.5)" fill="#181818" stroke="#D9D9D9" />
              <circle cx="4.5" cy="3.5" r="3" transform="rotate(-90 4.5 3.5)" fill="#181818" stroke="#D9D9D9" />
            </svg>
          </span>
          <div className="pageMargin grid grid-cols-4 gap-x-5 my-[94px]">
            <div className="col-span-1 aspect-square relative">
              <Image
                src={service1}
                className="object-cover"
                fill
                alt="Himalayas Energy can supply a wide range of services for Onshore/Offshore projects, covering the entire project life span, from the earliest conceptual studies, Basics, FEED to Detailed Design. "
              />
            </div>
            <div className="col-span-1 aspect-square relative">
              <Image
                src={service2}
                className="object-cover"
                fill
                alt="Himalayas Energy’s pipeline technicians are highly skilled operators of offshore installation vessels with extensive experience constructing small diameter to large diameter pipeline systems and networks"
              />
            </div>
            <div className="col-span-1 aspect-square relative">
              <Image
                src={service3}
                className="object-cover"
                fill
                alt="We offer cost effective waste management solutions across multiple industries from medium to large scale in the upstream and downstream oil and gas sector."
              />
            </div>
            <div className="col-span-1 aspect-square relative">
              <Image
                src={service4}
                className="object-cover"
                fill
                alt="Himalayas Energy is a recruitment specialist for employers and professionals in the oil, gas and energy sector. We provide contract and permanent recruitment opportunities across Nigeria and West Africa"
              />
            </div>
          </div>
        </div>

        <div className="space-y-[47px] pageMargin">
          <ul className="space-y-[62px]">
            <li className="space-y-3">
              <span className="text-2xl pb-1 border-b border-b-primary">01</span>
              <h1 className="font-bold">ONSHORE & OFFSHORE PIPELINE INSTALLATION</h1>
              <p className="text-body1">
                Himalayas Energy can supply a wide range of services for Onshore/Offshore projects, covering the entire project life span, from the
                earliest conceptual studies, Basics, FEED to Detailed Design. <br />
                Himalayas’s subsea construction and installation services offer field development support to oil and gas companies. A combination of
                our assets and engineering services enable our team to complete projects safely and on-time and within budget. Our Onshore/Offshore
                Construction Services include:
              </p>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Civilwork
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Construction and Installation
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Decommissioning
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Heavy Lift Operations
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Hook-up and Commissioning
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Production Modules & Facility Maintenance
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Structural Repair & Facility Upgrades
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Constructability Planning and Reviews
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Turnkey installations
              </span>
            </li>
            <li className="space-y-3">
              <span className="text-2xl pb-1 border-b border-b-primary">02</span>
              <h1 className="font-bold">LOCAL GAS DISTRIBUTION</h1>
              <p className="text-body1">
                Himalayas Energy builds pipeline transportation networks. We provide value to our customers and the industry by constructing pipeline
                networks to connect producing wells and treatment facilities to onshore or offshore terminals for separation, treating, storage, and
                off-take. Himalayas Energy’s pipeline technicians are highly skilled operators of offshore installation vessels with extensive
                experience constructing small diameter to large diameter pipeline systems and networks. Our experience spans from areas near shore, in
                shallow water, or between shore and a connection point in deeper water. <br />
                Himalayas Energy’s pipeline IRM work includes:
              </p>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Facility Installation & Abandonment.
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Pipeline Installation, Burial & Testing.
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Pipeline Repair and Maintenance.
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Pipeline Abandonment & Removal.
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Subsea Well Plug & Abandonment Support;
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Exposed Pipeline Burial.
              </span>
            </li>
            <li className="space-y-3">
              <span className="text-2xl pb-1 border-b border-b-primary">03</span>
              <h1 className="font-bold">ENVIRONMENTAL / WASTE MANAGEMENT</h1>
              <p className="text-body1">
                We offer cost effective waste management solutions across multiple industries from medium to large scale in the upstream and
                downstream oil and gas sector.
              </p>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Fresh Water Treatment.
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Desalination Systems and Accessories
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Domestic waste disposal
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Tank Cleaning
              </span>
            </li>
            <li className="space-y-3">
              <span className="text-2xl pb-1 border-b border-b-primary">04</span>
              <h1 className="font-bold">PETROLEUM PRODUCTS HAULAGE AND MARKETING</h1>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Petroleum Products and Industrial Gases (Gas, Oils, Fuels).
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Automotive Gas Oil (AGO), Dual Purpose Kerosene (DPK) and Premium Motor Spirit (PMS) to Onshore and Offshore Locations /Facilities.
              </span>
            </li>
            <li>
              <svg width="94" height="8" viewBox="0 0 94 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="59" y="2" width="3" height="59" transform="rotate(90 59 2)" fill="#181818" />
                <rect x="42" width="8" height="39" transform="rotate(90 42 0)" fill="black" />
                <circle cx="81.5" cy="4" r="3" transform="rotate(-90 81.5 4)" fill="#181818" stroke="#D9D9D9" />
              </svg>
            </li>
            <li className="space-y-3">
              <span className="text-2xl pb-1 border-b border-b-primary">05</span>
              <h1 className="font-bold">MANPOWER SERVICES</h1>
              <p className="text-body1">
                Himalayas Energy is a recruitment specialist for employers and professionals in the oil, gas and energy sector. We provide contract
                and permanent recruitment opportunities across Nigeria and West Africa. We have specialist discipline knowledge for the people who are
                responsible for Engineering Construction, Repairs, Modification and Maintenance, Project Management, Subsurface, Subsea and Marine,
                HSEQ, Waste Management , Petroleum Product Haulage and Seismic Surveys. <br />
                Himalayas Energy also recruits and mobilises business service and operational experts for Supply Chain, IT, Finance, HR, Sales and
                Manufacturing opportunities. We speak the language of the oil, gas and energy industry and have a genuine understanding of client
                requirements. <br />
                The flexibility of our business model means our clients can outsource their recruitment function entirely or complement their internal
                capabilities with our services. Our network of skilled professionals is constantly evolving and expanding throughour innovative use of
                social media, online advertising and database technology building. <br />
                We build engagement with thousands of potential candidates – and organically via referrals and recommendations from existing clients
                and candidates.
              </p>
            </li>
            <li className="space-y-3">
              <span className="text-2xl pb-1 border-b border-b-primary">06</span>
              <h1 className="font-bold">OIL & GAS EXPLORATION AND FIELD DEVELOPMENT PROGRAM</h1>
              <p className="text-body1">
                Himalayas Energy Consults Limited has expertise to optimize onshore and offshore field development, reduce Capex and expedite your
                production start. Our Onshore and Offshore Field Development Programs include:
              </p>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                <span className="font-medium text-main">Oil Field Assessment:</span> Assessing the volume of oil and gas in the reservoir.
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Choosing a platform type (FPSO, Jacket, TLP, Semi) to operate.
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Gas Evacuation and Monetization Strategy
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Stakeholder Assessment and Evaluation.
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Consideration of Construction, Operation and Decommissioning
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Full Project Life Economics.
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Broker Deals on Field Development Consortiums.
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Development of CAPEX Finance
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                EPCIC Development of the Field to First Oil
              </span>
            </li>
            <li className="space-y-3">
              <span className="text-2xl pb-1 border-b border-b-primary">07</span>
              <h1 className="font-bold">
                ENGINEERING CONSTRUCTION / OPERATION / MODIFICATTON / REPAIR / MAINTENANCE SERVICES FOR SITE / PLATFORMS / PROPERTIES
              </h1>
              <p className="text-body1">
                geting the offshore & on shore industry, Himalayas Energy provides a wide range of services in operation, modification, repair and
                maintenance services for offshore and onshore site and platforms. Areas we cover are listed as follows:
              </p>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Steel / Piping / Mechanical Services / Electrical Services
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Subsea Construction Services
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Pipe fitting and Welding Services
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Compressors and Valve Supply Services
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Mobile Production & Floating Storage Units
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Transportation / Supply and Disposal
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Steel / Metal / Concrete Structures / Platforms
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Floating Facilities / Systems including Storage / Loading
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Early Production Facilities
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Process & Utility Modules / Packages
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Engineering, Procurement & Construction
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Pre-Commissioning & Commissioning
              </span>
              <span className="flex gap-x-2 items-center text-body1">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" className="block shrink-0">
                  <circle cx="6.5" cy="7" r="4.5" fill="white" stroke="#C00000" stroke-width="4" />
                </svg>
                Maintenance Services.
              </span>
            </li>
          </ul>
        </div>
      </main>
      <div className="my-[119px] flex justify-center">
        <svg width="95" height="8" viewBox="0 0 95 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="3.5" cy="4" r="3" transform="rotate(-90 3.5 4)" fill="#181818" stroke="#D9D9D9" />
          <rect x="26" y="6" width="3" height="59" transform="rotate(-90 26 6)" fill="#181818" />
          <rect x="43" y="8" width="8" height="39" transform="rotate(-90 43 8)" fill="black" />
        </svg>
      </div>
      <Footer index={2} />
    </>
  );
};

export default Page;
