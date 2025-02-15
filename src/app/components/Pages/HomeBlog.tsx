import Section from "../Common/Section";

const sections = [
  {
    slug: "Happiness-2023",
    path: "/img/l1.jpg",
    alt: "home img",
    button: "Lifestyle",
    title: "A Discount Toner Cartridge Is Better Than Ever.",
    postname: " ",
    postdate: " ",
    postcomments: "Comments",
    class1: "md:flex items-center mt-[20px]",
    class2: "md:w-[278px] w-full",
    class4: "absolute bottom-[10px] left-[15px]",
    class5: "md:w-[430px] w-full md:pl-[30px] md:my-0 my-5",
    class6: "text-black hover:text-hover duration-300 font-semibold max-w-[300px] text-lg",
    class7: "text-[#777] my-3 leading-6",
    class8: "items-center",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
    showButton1: true,
  },
  {
    slug: "cince-2023",
    path: "/img/l2.jpg",
    alt: "home img",
    button: "Science",
    title: "A Discount Toner Cartridge Is Better Than Ever.",
    postname: " ",
    postdate: " ",
    postcomments: "Comments",
    class1: "md:flex items-center mt-[20px]",
    class2: "md:w-[278px] w-full",
    class4: "absolute bottom-[10px] left-[15px]",
    class5: "md:w-[430px] w-full md:pl-[30px] md:my-0 my-5",
    class6: "text-black hover:text-hover duration-300 font-semibold max-w-[300px] text-lg",
    class7: "text-[#777] my-3 leading-6",
    class8: "items-center",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
    showButton1: true,
  },
  {
    slug: "places-visit-2023",
    path: "/img/l3.jpg",
    alt: "Travel",
    button: "Food Habit",
    title: "A Discount Toner Cartridge Is Better Than Ever.",
    postname: " ",
    postdate: " ",
    postcomments: "Comments",
    class1: "md:flex items-center mt-[20px]",
    class2: "md:w-[278px] w-full",
    class4: "absolute bottom-[10px] left-[15px]",
    class5: "md:w-[430px] w-full md:pl-[30px] md:my-0 my-5",
    class6: "text-black hover:text-hover duration-300 font-semibold max-w-[300px] text-lg",
    class7: "text-[#777] my-3 leading-6",
    class8: "items-center",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
    showButton1: true,
  },
  {
    slug: "best-places-2023",
    path: "/img/l4.jpg",
    alt: "home img",
    button: "Fashion",
    title: "A Discount Toner Cartridge Is Better Than Ever.",
    postname: " ",
    postdate: "20",
    postcomments: "Comments",
    class1: "md:flex items-center mt-5",
    class2: "md:w-[278px] w-full",
    class4: "absolute bottom-[10px] left-[15px]",
    class5: "md:w-[430px] w-full md:pl-[30px] md:my-0 my-5",
    class6: "text-black hover:text-hover duration-300 font-semibold max-w-[300px] text-lg",
    class7: "text-[#777] my-3 leading-6",
    class8: "items-center",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
    showButton1: true,
  },
];

const SinglesideSections = [
  {
    slug: "best-friend-2023",
    path: "/img/l1.jpg",
    alt: "home img",
    button: "Travel",
    title: "A Discount Toner Cartridge Is Better Than Ever.",
    postname: " ",
    postdate: "20",
    postcomments: " ",
    class1: "mt-[20px]",
    class4: "absolute bottom-[10px] left-[15px]",
    class5: "my-5 ",
    class6: "text-black hover:text-hover duration-300 font-semibold max-w-[300px] text-lg",
    class7: "text-[#777] my-3 leading-6",
    class8: "items-center",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
    showButton1: true,
  },
];
const sideSections = [
  {
    slug: "best-see-2023",
    path: "/img/e2.jpg",
    alt: "home img",
    title: "Help Finding Information Online is so easy",
    postdate: "20",
    postcomments: " ",
    class1: "xs:flex items-center",
    class2: "xs:w-[100px]",
    class4: "absolute bottom-[10px] left-[15px]",
    class5: "xs:pl-5 pt-3 w-full md:w-[200px] xl:w-[220px]",
    class6: "text-black hover:text-hover duration-300 font-semibold text-sm",
    class7: "text-[#777] my-3 leading-6 flex-wrap",
    class8: "items-center",
  },
  {
    slug: "nactural-places-visit-2023",
    path: "/img/e3.jpg",
    alt: "home img",
    title: "Help Finding Information Online is so easy",
    postdate: "20",
    postcomments: " ",
    class1: "xs:flex items-center",
    class2: "xs:w-[100px]",
    class4: "absolute bottom-[10px] left-[15px]",
    class5: "xs:pl-5 pt-3 w-full md:w-[200px] xl:w-[220px]",
    class6: "text-black hover:text-hover duration-300 font-semibold text-sm",
    class7: "text-[#777] my-3 leading-6",
    class8: "items-center",
  },
  {
    slug: "best-places-visit-2022",
    path: "/img/e4.jpg",
    alt: "home img",
    title: "Help Finding Information Online is so easy",
    postdate: "20",
    postcomments: " ",
    class1: "xs:flex items-center",
    class2: "xs:w-[100px]",
    class4: "absolute bottom-[10px] left-[15px]",
    class5: "xs:pl-5 pt-3 w-full md:w-[200px] xl:w-[220px]",
    class6: "text-black hover:text-hover duration-300 font-semibold text-sm",
    class7: "text-[#777] my-3 leading-6",
    class8: "items-center",
  },
];

function HomeBlog() {
  return (
    <div className="">
      <div className="lg:grid lg:grid-cols-3 gap-6 text">
        <div className="col-span-2 bg-white p-5">
          <div className="bg-background text-white font-semibold px-6 py-2">Latest News</div>
          {sections.map((section, index) => (
            <div key={index}>
              <Section {...section} />
            </div>
          ))}
        </div>

        <div className="col-span-1">
          <div className="bg-white p-5 pb-2 lg:mt-0 mt-14">
            <div className="bg-background text-white font-semibold px-6 py-2">Editor’s Pick</div>
            {SinglesideSections.map((section, index) => (
              <div key={index}>
                <Section {...section} />
              </div>
            ))}
            {sideSections.map((section, index) => (
              <div key={index} className="border-t border-t-[#eee] xs:py-[15px] pt-[15px]">
                <Section {...section} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBlog;
