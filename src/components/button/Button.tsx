import cx from "classnames";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

interface Props {
  className?: string;
  children?: React.ReactNode;
  iconRight: React.ReactNode | boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: React.FC<Props> = (props) => {
  const { children, className, iconRight, onClick } = props;
  return (
    <button className={cx("btn", className)} onClick={onClick}>
      {children}
      {iconRight === true ? <FiArrowRight /> : iconRight}
    </button>
  );
};

export default Button;
