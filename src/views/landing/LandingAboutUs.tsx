import { Button } from "../../components/button";

const LandingAboutUs = () => {
  return (
    <section className="size-full my-20">
      <div className="max-container relative">
        <div className="absolute inset-x-0 sm:inset-x-12 lg:inset-x-45 inset-y-25 sm:inset-y-45 text-white">
          <h1 className="heading-md mb-10">
            Small team, <br /> big ideas
          </h1>
          <Button iconRight>About Us</Button>
        </div>

        <img
          alt="Hero Image"
          src="/about_us.png"
          className="w-full hidden sm:block h-[650px] object-cover"
        />
      </div>

      <img
        alt="About us"
        src="/about_us.png"
        className="w-full h-[520px] block sm:hidden object-cover"
      />
    </section>
  );
};

export default LandingAboutUs;
