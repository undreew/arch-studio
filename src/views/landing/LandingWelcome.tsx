const LandingWelcome = () => {
  return (
    <section className="min-h-full my-25">
      <div className="max-container flex relative">
        <div className="w-full sm:max-w-3xl mx-auto flex-2/3">
          <h1 className="heading-xl z-10 text-light-gray-2 -tracking-[3px] md:-tracking-[5px] w-full lg:max-w-sm max-lg:mx-auto hidden sm:block">
            Welcome
          </h1>

          <div className="w-full lg:max-w-sm mx-auto">
            <h3 className="heading-md">
              Welcome to <br /> Arch Studio
            </h3>

            <div className="flex flex-col gap-10 mt-10 text-dark-gray">
              <p>
                We have a unique network and skillset to help bring your
                projects to life. Our small team of highly skilled individuals
                combined with our large network put us in a strong position to
                deliver exceptional results.
              </p>

              <p>
                Over the past 10 years, we have worked on all kinds of projects.
                From stations to high-rise buildings, we create spaces that
                inspire and delight.
              </p>

              <p>
                We work closely with our clients so that we understand the
                intricacies of each project. This allows us to work in harmony
                the surrounding area to create truly stunning projects that will
                stand the test of time.
              </p>
            </div>
          </div>
        </div>

        <img
          alt="Welcome"
          src="/welcome.jpg"
          className="w-auto -z-10 hidden lg:block flex-1/3"
        />
      </div>
    </section>
  );
};

export default LandingWelcome;
