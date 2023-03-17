import { cx } from "@emotion/css";
import { noop } from "utils/noop";
import * as css from "./index.styles";
import type { FlexLayoutProps } from "./index.types";

const FlexLayout = (props: FlexLayoutProps) => {
  const {
    id = "",
    children,
    justify = "flex-start",
    align = "center",
    gap = "0px",
    width = "fit-content",
    direction = "row",
    padding = "",
    className = "",
    height = "fit-content",
    onClick = noop,
  } = props;

  return (
    <div
      id={id}
      onClick={onClick}
      className={cx(
        css.wrapper(direction, justify, align, gap, width, padding, height),
        className
      )}
    >
      {children}
    </div>
  );
};

export default FlexLayout;
