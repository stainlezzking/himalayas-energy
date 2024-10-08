import Link from "next/link";
import FlotingWidget from "./floatingwidget";

const Footer = ({ index }) => {
  return (
    <>
      <FlotingWidget index={index} />
      <div className="bg-black  py-[26px]  text-gray">
        <div className="pageMargin space-y-6">
          <div className="py-2 flex justify-between">
            <ul className="max-sm:space-y-4 max-sm:list-disc max-sm:ps-4 sm:flex max-md:flex-wrap  items-center gap-x-8">
              <li>
                <Link prefetch={false} href="/">
                  Home
                </Link>
              </li>
              <svg className="w-[5px] max-sm:hidden" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="3" r="2.5" transform="rotate(-90 2.5 3)" fill="white" />
              </svg>

              <li>
                <Link prefetch={false} href="/about.html">
                  About
                </Link>
              </li>
              <svg className="w-[5px] max-sm:hidden" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="3" r="2.5" transform="rotate(-90 2.5 3)" fill="white" />
              </svg>

              <li>
                <Link prefetch={false} href="/services.html">
                  Services
                </Link>
              </li>
              <svg className="w-[5px] max-sm:hidden" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="3" r="2.5" transform="rotate(-90 2.5 3)" fill="white" />
              </svg>

              <li>
                <Link prefetch={false} href="/sustainability.html">
                  Sustainability
                </Link>
              </li>
              <svg className="w-[5px] max-sm:hidden" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="3" r="2.5" transform="rotate(-90 2.5 3)" fill="white" />
              </svg>

              <li>
                <Link prefetch={false} href="/contact.html">
                  Contact
                </Link>
              </li>
              <li className="max-lg:hidden"> &copy; 2024. All Rights Reserved</li>
            </ul>
            <ul className="flex gap-x-6">
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.5 6H13.5C12.9477 6 12.5 6.44772 12.5 7V10H16.5C16.6137 9.99748 16.7216 10.0504 16.7892 10.1419C16.8568 10.2334 16.8758 10.352 16.84 10.46L16.1 12.66C16.0318 12.8619 15.8431 12.9984 15.63 13H12.5V20.5C12.5 20.7761 12.2761 21 12 21H9.5C9.22386 21 9 20.7761 9 20.5V13H7.5C7.22386 13 7 12.7761 7 12.5V10.5C7 10.2239 7.22386 10 7.5 10H9V7C9 4.79086 10.7909 3 13 3H16.5C16.7761 3 17 3.22386 17 3.5V5.5C17 5.77614 16.7761 6 16.5 6Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.9727 6.7174C20.5083 7.33692 19.9469 7.87733 19.3102 8.31776C19.3102 8.47959 19.3102 8.64142 19.3102 8.81225C19.3153 11.7511 18.1414 14.5691 16.0517 16.6345C13.9619 18.6999 11.1311 19.8399 8.19393 19.7989C6.49587 19.8046 4.81955 19.4169 3.2963 18.6661C3.21416 18.6302 3.16119 18.549 3.1615 18.4593V18.3604C3.1615 18.2313 3.26611 18.1267 3.39515 18.1267C5.0643 18.0716 6.6739 17.4929 7.99622 16.4724C6.48541 16.4419 5.12607 15.5469 4.50048 14.1707C4.46889 14.0956 4.47872 14.0093 4.52645 13.9432C4.57417 13.8771 4.65288 13.8407 4.73413 13.8471C5.1933 13.8932 5.65706 13.8505 6.10008 13.7212C4.43227 13.375 3.17909 11.9904 2.99974 10.2957C2.99337 10.2144 3.0298 10.1357 3.09588 10.0879C3.16195 10.0402 3.24812 10.0303 3.32326 10.062C3.77082 10.2595 4.25397 10.3635 4.74312 10.3676C3.28172 9.40846 2.65049 7.58405 3.20643 5.92622C3.26382 5.76513 3.40169 5.64612 3.56938 5.61294C3.73706 5.57975 3.90984 5.63728 4.0242 5.76439C5.99627 7.86325 8.70592 9.11396 11.5818 9.25279C11.5082 8.95885 11.472 8.65676 11.474 8.35372C11.5009 6.76472 12.4841 5.34921 13.9633 4.76987C15.4424 4.19054 17.1248 4.56203 18.2229 5.71044C18.9713 5.56785 19.6949 5.31645 20.3706 4.96421C20.4201 4.93331 20.4829 4.93331 20.5324 4.96421C20.5633 5.01373 20.5633 5.07652 20.5324 5.12604C20.2051 5.87552 19.6522 6.50412 18.9508 6.92419C19.565 6.85296 20.1684 6.70807 20.7481 6.49264C20.7969 6.45942 20.861 6.45942 20.9098 6.49264C20.9507 6.51134 20.9813 6.54711 20.9934 6.59042C21.0055 6.63373 20.9979 6.68018 20.9727 6.7174Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </li>
            </ul>
          </div>
          <div className="lg:hidden"> &copy; 2024. All Rights Reserved</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
