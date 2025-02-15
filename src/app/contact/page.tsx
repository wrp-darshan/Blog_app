// app/contact/page.tsx
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { CiHome, CiPhone, CiMail } from "react-icons/ci";

const contactDetails = [
  {
    icon: <CiHome size={30} />,
    title: "Los Angeles, USA",
    description: "56/8, Rocky Beach Road",
  },
  {
    icon: <CiPhone size={30} />,
    title: "Phone Number",
    description: "+1 234 567 890",
  },
  {
    icon: <CiMail size={30} />,
    title: "Email Address",
    description: "info@example.com",
  },
];

const inputform = [
  {
    placeholder: "Enter your name",
  },
  {
    placeholder: "Enter email address",
  },
  {
    placeholder: "Enter subject",
  },
]

export default function Contact() {
  return (
    <div className="pt-3 md:pb-28 xs:pb-16 pb-12">
      {/* Breadcrumb Navigation */}
      <div className="xs:py-16 py-14 bg-hover">
        <div className="text-white text-center">
          <h1 className="md:text-5xl text-3xl xs:mb-8 mb-6 font-semibold">Contact Us</h1>
          <ul className="flex space-x-4 justify-center items-center font-normal flex-wrap">
            <li>
              <Link href="/" className="hover:text-gray-800">Home</Link>
            </li>
            <li><FaArrowRightLong /></li>
            <li>
              <span className="font-bold">Contact us</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="bg-white sm:p-8 p-5 mt-14 lg:grid grid-cols-12 gap-6">
        <div  className="col-span-3">
        {contactDetails.map((contact, index) => (
            <div key={index} className="flex pb-2">
            <div className="mr-[30px] text-hover">{contact.icon}</div>
            <div>
              <h5 className="font-light text-base mb-1">{contact.title}</h5>
              <p className="text-[#777] pb-4">{contact.description}</p>
            </div>
            </div>
        ))}
        </div>
        {/* Contact Form */}
        <div className="col-span-9">
          <div className="md:grid grid-cols-12 md:gap-6">
            <div className="col-span-6">
              {inputform.map((input, index) => (
                <div key={index} className="mb-5">
                  <input type="text" placeholder={input.placeholder} className="w-full border border-[#ced4da] leading-[1.5] text-[#495057] p-3" />
                </div>
              ))}
            </div>
            <div className="col-span-6">
              <textarea placeholder="Type your message here..." className="w-full border border-[#ced4da] leading-[1.5] text-[#495057] p-3 h-[180px]"/>
            </div>
          </div>
          <div className="text-end md:mt-0 mt-3">
             <button className="bg-hover font-semibold text-sm uppercase text-white leading-[48px] px-[30px] border border-hover hover:bg-white hover:text-hover duration-300">Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
}
