import { useState } from "react";
import { NavLink } from "react-router";
import { Button } from "../../components/button";
import { FaLongArrowAltRight } from "react-icons/fa";

const LandingHero = () => {
  const [activeImg, setActiveImage] = useState<string>("1");

  function handleActiveImgChange(index: string) {
    setActiveImage(index);
  }

  return (
    <section className="mt-5">
      <div className="max-container relative">
        <div className="absolute inset-x-0 sm:inset-x-12 lg:inset-x-45 inset-y-25 sm:inset-y-35 flex flex-col gap-5">
          <h1 className="heading-lg text-white">
            Project <br /> Paramour
          </h1>

          <div>
            <p className="body text-white">
              Project made for an art museum near Southwest London.
            </p>
            <p className="body text-white">
              Project Paramour is a statement of bold, modern architecture.
            </p>
          </div>

          <NavLink to="/portfolio">
            <Button iconRight={<FaLongArrowAltRight />}>
              See Our Portfolio
            </Button>
          </NavLink>
        </div>

        <img
          alt="Hero Image"
          src={`/Bitmap_${activeImg}.png`}
          className="w-full hidden sm:block h-[650px] object-cover"
        />

        <div className="absolute -bottom-0 hidden md:flex">
          <div className="flex bg-white/10 backdrop-blur-sm">
            {["1", "2", "3", "4"].map((num) => (
              <Button
                key={num}
                iconRight={false}
                className={`w-16 h-16 text-white font-semibold transition ${activeImg === num && "bg-black"}`}
                onClick={() => handleActiveImgChange(num)}
              >
                0{num}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <img
        alt="Hero Image"
        src={`/Bitmap_${activeImg}.png`}
        className="w-full h-[520px] block sm:hidden object-cover"
      />
    </section>
  );
};

export default LandingHero;
