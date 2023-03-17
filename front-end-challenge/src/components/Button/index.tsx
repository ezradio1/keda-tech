import Loader from "assets/svgComponent/Loader";
import { PRIMARY } from "../../constants/colors";
import { noop } from "../../utils/noop";
import * as css from "./index.styles";
import type { ButtonProps } from "./index.types";

const Button = (props: ButtonProps) => {
  const {
    children,
    icon = null,
    color = PRIMARY,
    disabled = false,
    onClick,
    loading,
    width = "120px",
    type = "button",
  } = props;

  return (
    <button
      onClick={disabled ? noop : onClick}
      disabled={disabled}
      className={css.wrapper(color, disabled, width)}
      type={type}
    >
      {loading && <Loader />}
      {!loading && (
        <>
          {icon}
          <p className={css.text(color)}>{children}</p>
        </>
      )}
    </button>
  );
};

export default Button;
