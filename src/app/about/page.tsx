// app/about/page.tsx
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoSunnyOutline, IoCodeSlashOutline } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";

const sections = [
  {
    icon: <IoSunnyOutline size={30} />,
    title: "Stunning Visuals",
    description: "Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola.",
  },
  {
    icon: <IoCodeSlashOutline size={30} />,
    title: "Clean Code",
    description: "Over 92% of computers are infected with Adware and spyware. Such software is rarely accompanied by uninstall utility.",
  },
  {
    icon: <LuAlarmClock size={30} />,
    title: "Punctuality",
    description: "If you own an iPhone, you’ve probably already worked out how much fun it is to use it to watch movies—it has that nice big screen.",
  },
];

export default function About() {
  return (
    <div className="pt-3 md:pb-28 xs:pb-16 pb-12">
      <div className="xs:py-16 py-14 bg-hover">
        <div className="text-white text-center">
          <h1 className="md:text-5xl text-3xl xs:mb-8 mb-6 font-semibold">About Us</h1>
          <ul className="flex space-x-4 justify-center items-center font-normal flex-wrap">
            <li>
              <Link href="/" className="hover:text-gray-800">Home</Link>
            </li>
            <li><FaArrowRightLong /></li>
            <li>
              <span className="font-bold">About us</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:py-[120px] md:pb-0 md:pt-28 xs:pt-24 pt-16">
        {sections.map((section, index) => (
          <div key={index} className="flex items-start group px-3 lg:mb-0 mb-10">
            <div className="mr-[30px] p-5 bg-white rounded-md transition-all duration-300 group-hover:bg-hover">
              <span className="text-[#222] transition-all duration-300 group-hover:text-white">
                {section.icon}
              </span>
            </div>
            <div>
              <h1 className="mb-5 text-lg font-semibold transition-all duration-300">
                {section.title}
              </h1>
              <p className="transition-all duration-300 text-[#777]">
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
