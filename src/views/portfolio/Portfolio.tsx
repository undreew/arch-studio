import { PortfolioCard } from "../../components/card";
import { PORTFOLIO_ITEMS } from "../../contants/portfolio";

import useGetWindowSize from "../../utils/useGetWindowSize";

const Portfolio = () => {
  const { breakpoint } = useGetWindowSize();

  return (
    <section className="mt-10 mb-25">
      <div className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {PORTFOLIO_ITEMS.map((item) => {
            const { id, title, images, date } = item;
            const image = images[breakpoint as never] || images.default;
            return (
              <PortfolioCard key={id} image={image} title={title} date={date} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
