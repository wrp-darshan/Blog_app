import Section from "../Common/Section";
import HomeBlog from "./HomeBlog";
import Seo from "./Seo";

const sections = [
  {
    slug: "discount-toner-cartridge",
    path: "/img/top-post1.jpg",
    alt: "home img",
    button: "Food Habit",
    title: "A Discount Toner Cartridge Is Better Than Ever.",
    postname: " ",
    postdate: " ",
    postcomments: "Comments",
    class5: "absolute sm:bottom-[30px] bottom-5 md:left-10 left-5 z-10",
    class6: "text-white sm:my-5 my-3 font-semibold md:text-2xl xs:text-lg text-sm",
    class7: "text-white h-5",
    colSpan: "col-span-2", 
    showButton2: true,
  },
];

const sideSections = [
  {
    slug: "best-places-visit-2023",
    path: "/img/top-post2.jpg",
    alt: "home img",
    button: "Food Habit",
    title: "A Discount Toner Cartridge Is Better Than Ever.",
    postname: " ",
    postdate: " ",
    postcomments: "Comments",
    class5: "absolute xl:bottom-6 lg:bottom-8 sm:bottom-[30px] bottom-5 lg:left-3 md:left-10 left-5 z-10",
    class6: "text-white lg:mt-4 lg:mb-2 sm:my-5 my-3 font-semibold lg:text-lg md:text-2xl xs:text-lg text-sm",
    class7: "text-white h-5 flex-wrap xs:gap-y-2",
    showButton2: true,
  },
  {
    slug: "Traveling-in-2023",
    path: "/img/top-post3.jpg",
    alt: "home img",
    button: "Food Habit",
    title: "A Discount Toner Cartridge Is Better",
    postname: " ",
    postdate: " ",
    postcomments: "Comments",
    class1: "mt-3",
    class5: "absolute xl:bottom-6 lg:bottom-8 sm:bottom-[30px] bottom-5 lg:left-3 md:left-10 left-5 z-10",
    class6: "text-white lg:mt-4 lg:mb-2 sm:my-5 my-3 font-semibold lg:text-lg md:text-2xl xs:text-lg text-sm",
    class7: "text-white h-5 flex-wrap xs:gap-y-2",
    showButton2: true,
  },
];

function HomePage() {
  return (
    <>
    <div className="mt-3 ">
      <Seo title="Home - My Blog" description="Welcome to My Blog!" />
      <div className="lg:grid lg:grid-cols-3 gap-3">
        {sections.map((section, index) => (
          <div key={index} className={section.colSpan}>
            <Section {...section} />
          </div>
        ))}

        <div className="col-span-1 lg:mt-0 mt-3">
          {sideSections.map((section, index) => (
            <Section key={index} {...section} />
          ))}
        </div>
      </div>

      <div className="mt-3 px-[15px] py-3 bg-white text-hover font-medium">
        Breaking News :
        <span className="text-black"> Astronomy Binoculars A Great Alternative</span>
      </div>
    </div>
    <div className=" mt-12 mb-[120px]">
      <HomeBlog/>
    </div>
    </>

  );
}

export default HomePage;
