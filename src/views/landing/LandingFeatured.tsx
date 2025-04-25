import { Button } from "../../components/button";
import { PortfolioCard } from "../../components/card";
import { FEATURED_PROJECTS } from "../../contants/featured";

import useGetWindowSize from "../../utils/useGetWindowSize";

const LandingFeatured = () => {
  const { breakpoint } = useGetWindowSize();

  return (
    <section className="size-full my-25">
      <div className="max-container">
        <div className="flex justify-between items-center mb-15">
          <h1 className="heading-md">Featured</h1>
          <Button className="hidden sm:flex" iconRight>
            See All
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {FEATURED_PROJECTS.map((item) => {
            const { id, title, images } = item;
            const image = images[breakpoint as never] || images.default;
            return (
              <PortfolioCard key={id} image={image} title={title} hasLink />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LandingFeatured;
