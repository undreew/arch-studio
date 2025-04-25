import React from "react";
import { Portfolio } from "../../models/portfolio";

interface CardProps {
  image: string;
  imageAlt: string;
  hasLink: boolean;
}

const PortfolioCard: React.FC<Portfolio & Partial<CardProps>> = (props) => {
  const { title, date, image, imageAlt, hasLink } = props;

  return (
    <div className="relative">
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-[240px] lg:h-full object-cover"
      />

      <div className="absolute bottom-[25px] left-[25px]">
        <h1 className="heading-sm text-white">{title}</h1>
        {date && <p className="text-white">{date}</p>}
        {hasLink && (
          <a
            href="/projects"
            className="text-white hover:underline underline-offset-2"
          >
            View All Projects
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
