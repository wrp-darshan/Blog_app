import Image from "next/image";
import { FaRegHeart, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { ImBehance, ImDribbble } from "react-icons/im";

export default function Footer() {
  const topProduct = [
    {
      link: '#',
      name: 'Managed Website',
    },
    {
      link: '#',
      name: 'Manage Reputation',
    },
    {
      link: '#',
      name: 'Power Tools',
    },
    {
      link: '#',
      name: 'Marketing Service',
    },
  ]

  const quickLinks = [
    {
      link: '#',
      name: 'Jobs',
    },
    {
      link: '#',
      name: 'Brand Assets',
    },
    {
      link: '#',
      name: 'Investor Relations',
    },
    {
      link: '#',
      name: 'Terms of Service',
    },
  ]
  const resources = [
    {
      link: '#',
      name: 'Guides',
    },
    {
      link: '#',
      name: 'Research',
    },
    {
      link: '#',
      name: 'Experts',
    },
    {
      link: '#',
      name: 'Agencies',
    },
  ];
  const instafeed = [
    {
      img: "/img/i1.jpg.webp",
    },
    {
      img: "/img/i2.jpg.webp",
    },
    {
      img: "/img/i3.jpg.webp",
    },
    {
      img: "/img/i4.jpg.webp",
    },
    {
      img: "/img/i5.jpg.webp",
    },
    {
      img: "/img/i6.jpg.webp",
    },
    {
      img: "/img/i1.jpg.webp",
    },
    {
      img: "/img/i2.jpg.webp",
    },
  ];

  const socialMedia = [
    {
      icon: <FaFacebookF/>,
      link: '#',
    },
    {
      icon: <FaTwitter />,
      link: '#',
    },
    {
      icon: <ImDribbble  />,
      link: '#',
    },
    {
      icon: <ImBehance size={15}/>,
      link: '#',
    },
  ]



  return (
    <footer className="bg-background text-white sm:py-[120px] xs:py-20 py-16">
      <div className="container xl:px-0 lg:px-2">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-3 xs:col-span-6 col-span-12 xs:mt-0">
            <h4 className="xs:mb-9 mb-5 text-lg font-semibold">Top Products</h4>
            {topProduct.map((topic, product) => (
              <div key={product}>
                <a href={topic.link} className="block text-[#777] hover:text-hover duration-300 font-normal mb-4">{topic.name}</a>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2 xs:col-span-6 col-span-12 xs:mt-0 mt-6">
            <h4 className="xs:mb-9 mb-5 text-lg font-semibold">Quick Links</h4>
            {quickLinks.map((topic, quicklinks) => (
              <div key={quicklinks}>
                <a href={topic.link} className="block text-[#777] hover:text-hover duration-300 font-normal mb-4">{topic.name}</a>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2 xs:col-span-6 col-span-12 lg:mt-0 xs:mt-10 mt-6">
            <h4 className="xs:mb-9 mb-5 text-lg font-semibold">Features</h4>
            {quickLinks.map((topic, quickLinks) => (
              <div key={quickLinks}>
                <a href={topic.link} className="block text-[#777] hover:text-hover duration-300 font-normal mb-4">{topic.name}</a>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2 xs:col-span-6 col-span-12 lg:mt-0 xs:mt-10 mt-6">
            <h4 className="xs:mb-9 mb-5 text-lg font-semibold">Resources</h4>
            {resources.map((topic, resources) => (
              <div key={resources}>
                <a href={topic.link} className="block text-[#777] hover:text-hover duration-300 font-normal mb-4">{topic.name}</a>
              </div>
            ))}
          </div>
          <div className="lg:col-span-3 sm:col-span-6 xs:col-span-8 col-span-12 lg:mt-0 xs:mt-10 mt-6">
            <h4 className="xs:mb-9 mb-5 text-lg font-semibold">Instragram Feed</h4>
            <ul className="flex flex-wrap">
              {instafeed.map((topic, product) => (
                <li key={product} className="w-1/4 mb-[15px]">
                  <Image src={topic.img} width={58} height={58} alt="instragram Feed" className="xl:w-[58px] lg:w-[50px] m-[5px]" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid items-center sm:mt-[90px] xs:mt-14 mt-11 grid-cols-12">
          <div className="lg:col-span-8 col-span-12">
            <span className="flex items-center gap-1 flex-wrap">Copyright ©2025 All rights reserved | This template is made with <FaRegHeart />  by <a href="#" className="text-hover">Colorlib</a></span>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div className="flex items-center lg:justify-end lg:mt-0 mt-[30px] gap-1">
              {socialMedia.map((topic, social) => (
                <a key={social} className="flex items-center justify-center bg-[#ffffff1a] hover:bg-hover duration-300 h-10 w-10 mr-[5px]" href="#">
                  {topic.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
