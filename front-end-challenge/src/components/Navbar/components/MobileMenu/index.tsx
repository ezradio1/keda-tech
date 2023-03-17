import { Button, Dropdown, MenuProps } from "antd";
import Hamburger from "assets/img/hamburger.png";
import * as css from "./index.styles";
import { MobileMenuProps } from "./index.types";

const MobileMenu = (props: MobileMenuProps) => {
  const { handleLogin } = props;
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <a href='#home'>About</a>,
    },
    {
      key: "2",
      label: <a href='#pricing'>Pricing</a>,
    },
    {
      key: "3",
      label: <a href='#contact-us'>Contact</a>,
    },
    {
      key: "4",
      label: (
        <Button onClick={handleLogin} block type='primary'>
          Login
        </Button>
      ),
    },
  ];
  return (
    <Dropdown
      className={css.dropdown}
      menu={{ items }}
      placement='bottomRight'
      arrow
    >
      <Button>
        <img className={css.hamburger} src={Hamburger} alt='hamburger' />
      </Button>
    </Dropdown>
  );
};

export default MobileMenu;
