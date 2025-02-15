import { FaFacebookF, FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";
import { LuPhone, LuMail  } from "react-icons/lu";

function Topbar() {
  const navicon = [
    {
      icon: <FaFacebookF className='text-white text-xs hover:text-hover duration-300'/>,
      href: 'https://www.facebook.com/',
    },
    {
      icon: <FaTwitter className='text-white text-xs hover:text-hover duration-300'/>,
      href: 'https://x.com/',
    },
    {
      icon: <FaDribbble className='text-white text-xs hover:text-hover duration-300'/>,
      href: 'https://dribbble.com/',
    },
    {
      icon: <FaBehance className='text-white text-sm hover:text-hover duration-300'/>,
      href: 'https://www.behance.net/',
    },
  ]

  const cusinfo = [
    {
      icon: <LuPhone className='text-sm block md:hidden hover:text-hover duration-300'/>,
      href: 'tel:+4400123654896',
      name: '+440 012 3654 896',
    },
    {
      icon: <LuMail className='text-sm block md:hidden hover:text-hover duration-300'/>,
      href: 'mailto:support@colorlib.com',
      name: 'support@colorlib.com',
    }
  ]
  return (
    <div className='bg-background h-[53.55px] flex items-center'>
      <div className='container sm:px-0 px-[15px]'>
        <div className='flex flex-wrap items-center justify-between'>
          <div className='flex items-center'>
            {navicon.map((nav) => (
              <a
                key={nav.href}
                href={nav.href}
                className='pr-3 font-normal h-4 flex items-center'
              >
                {nav.icon}
              </a>
            ))}
          </div>
          <div className='flex items-center'>
            {cusinfo.map((info) => (
              <a
                key={info.href}
                href={info.href}
                className='text-white text-xs ml-[24px] hover:text-hover font-normal'
              >
                {info.icon} <span className='md:block hidden'>{info.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar