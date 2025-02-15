import Image from 'next/image';
import Logo from '/public/img/logo.png.webp'
import Link from 'next/link';
function Logoweb() {
  return (
    <div className='bg-white'>
      <div className='container py-5 sm:px-0 px-[15px]'>
        <Link href='/'>
          <Image
            src={Logo}
            alt="Logo"
            className='max-w-full h-auto'
          />
        </Link>
      </div>
    </div>
  )
}

export default Logoweb