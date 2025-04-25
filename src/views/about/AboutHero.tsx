import useGetWindowSize from "../../utils/useGetWindowSize";

const AboutHero = () => {
  const { breakpoint } = useGetWindowSize();
  console.log(breakpoint);

  return (
    <section className="mb-25 mt-10 relative">
      <div className="max-container relative grid grid-cols-1 lg:grid-cols-2">
        <img
          src="/about_hero.jpg"
          alt="About Hero Image"
          className="hidden md:block w-full object-cover -z-20 lg:block"
        />

        <div className="max-w-md lg:max-w-none">
          <div className="hidden md:block absolute right-0 lg:right-30 xl:right-40 top-57 lg:top-12 xl:top-32">
            <h1 className="heading-xl z-10 text-light-gray-2">About</h1>
          </div>

          <div className="hidden md:block -z-15 bg-white absolute md:bottom-0 lg:-bottom-1 md:-right-1 md:pb-0 md:pt-42 xl:pt-55 md:pr-0 xl:pr-35 md:pl-35 lg:pl-45 xl:pl-52">
            <div className="max-w-md mx-auto">
              <h2 className="heading-md">Your team of professionals</h2>
              <p className="body mt-15">
                Our small team of world-class professionals will work with you
                every step of the way. Strong relationships are at the core of
                everything we do. This extends to the relationship our projects
                have with their surroundings.
              </p>
            </div>
          </div>
        </div>
      </div>

      <img
        src="/about_hero.jpg"
        alt="About Hero Image"
        className="w-full h-[400px] block md:hidden object-cover pointer-events-none z-10"
      />

      <div className="bg-white h-100 w-75 absolute bottom-0 left-0 z-0">
        {/* lorem */}
      </div>

      <div className="block md:hidden mt-10">
        <div className="max-w-md mx-auto">
          <h2 className="heading-md">Your team of professionals</h2>
          <p className="body mt-15">
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
