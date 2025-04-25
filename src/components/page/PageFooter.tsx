import { Button } from "../button";

const items = ["Portfolio", "About Us", "Contact"];

const PageFooter = () => {
  return (
    <footer className="w-full md:max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center relative">
        <Button iconRight={false} className="absolute sm:relative -top-[20%]">
          <img
            src="/Arch 3.svg"
            alt="Arc Logo"
            className="py-5 sm:py-10 px-3 sm:px-5"
          />
        </Button>

        <ul className="bg-light-gray-2 self-stretch flex flex-col sm:flex-row flex-1 justify-start items-center gap-10 sm:pl-10 md:pl-20 sm:mr-20 max-sm:py-25">
          {items.map((item, index) => {
            return (
              <li key={index} className="font-bold text-dark-gray sm:body">
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ul>

        <div className="absolute bottom-0 sm:top-1/3 sm:right-0 max-sm:mb-5">
          <Button iconRight>See Our Portfolio</Button>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
