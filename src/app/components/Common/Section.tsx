import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegUser, FaCalendarDays, FaRegComment } from "react-icons/fa6";

function Section({
  slug,
  path,
  alt,
  button,
  title,
  postname,
  postdate,
  postcomments,
  description,
  class1,
  class2,
  class3,
  class4,
  class5,
  class6,
  class7,
  class8,
  showButton1,
  showButton2,
}: {
  slug: string;
  path: string;
  alt: string;
  button?: string;
  title: string;
  postname?: string;
  postdate?: string;
  postcomments?: string;
  description?: string;
  class1?: string;
  class2?: string;
  class3?: string;
  class4?: string;
  class5?: string;
  class6?: string;
  class7?: string;
  class8?: string;
  showButton1?: boolean;
  showButton2?: boolean;
}) {
  return (
    <div className={`relative group overflow-hidden ${class1}`}>
      <div className={`${class2} relative overflow-hidden`}>
        <div className="relative">
          {/* Link to the blog single page using slug */}
          <Link href={`/blog/${slug}`}>
            <Image
              className={`${class3} w-full h-auto transition-transform duration-500 group-hover:scale-110 cursor-pointer`}
              src={path}
              alt={alt}
              width={560}
              height={360}
            />
          </Link>
          <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-0"></div>

          {showButton1 && button && (
            <button className={`bg-hover text-white py-1 px-7 ${class4}`}>
              {button}
            </button>
          )}
        </div>
      </div>

      <div className={`${class5}`}>
        {showButton2 && button && (
          <button className={`bg-hover text-white py-1 px-7 ${class4}`}>
            {button}
          </button>
        )}
        {/* Link to the blog single page using slug */}
        <Link href={`/blog/${slug}`} className={`block leading-[1.2] ${class6}`}>
          {title}
        </Link>
        <div className={`flex text-center text-xs flex-wrap xl:gap-x-4 md:gap-x-3 gap-x-4 ${class7}`}>
          {postname && (
            <a href="#" className={`flex xs:mb-0 mb-1 h-4 ${class8}`}>
              <FaRegUser className="xl:mr-2 mr-1 text-sm" />
              <span className="h-5">Mark Wiens</span>
            </a>
          )}
          {postdate && (
            <a href="#" className={`flex xs:mb-0 mb-1 h-4 ${class8}`}>
              <FaCalendarDays className="xl:mr-2 mr-1" />
              <span className="h-5">18 April, 2018{postdate}</span>
            </a>
          )}
          {postcomments && (
            <a href="#" className={`flex xs:mb-0 mb-1 h-4 ${class8}`}>
              <FaRegComment className="xl:mr-2 mr-1" size={14} />
              <span className="h-5">{postcomments}</span>
            </a>
          )}
        </div>

        {description && <p className="text-[#777] m-0">{description}</p>}
      </div>
    </div>
  );
}

export default Section;
