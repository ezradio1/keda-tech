import Container from "components/Container";
import FlexLayout from "components/FlexLayout";
import * as css from "./index.styles";
import Logo from "assets/img/logo.png";
import LogoPrimary from "assets/img/logo-primary.png";
import Wave from "assets/img/wave.png";
import Button from "components/Button";
import ModalLogin from "components/ModalLogin";
import useIndex from "./index.hook";
import MobileMenu from "./components/MobileMenu";

const Navbar = () => {
  const { login, setLogin, showShadow } = useIndex();

  return (
    <FlexLayout
      direction='column'
      width='100%'
      align='start'
      justify='space-between'
      className={css.wrapper(showShadow)}
    >
      <ModalLogin
        title='LOGIN'
        show={login}
        onCloseModal={() => setLogin(false)}
      />
      <img className={css.wave(showShadow)} src={Wave} alt='logo.png' />
      <Container>
        <FlexLayout width='100%' justify='space-between' padding='8px 0'>
          <img className={css.logo(!showShadow)} src={Logo} alt='logo.png' />
          <img
            className={css.logoPrimary(showShadow)}
            src={LogoPrimary}
            alt='logo-primary.png'
          />
          <MobileMenu handleLogin={() => setLogin(true)} />
          <FlexLayout
            width='100%'
            justify='flex-end'
            gap='36px'
            align='center'
            className={css.container}
          >
            <ul className={css.menu}>
              <a href='#home'>ABOUT</a>
              <a href='#pricing'>PRICING</a>
              <a href='#contact-us'>CONTACT</a>
            </ul>
            <Button onClick={() => setLogin(true)}>LOGIN</Button>
          </FlexLayout>
        </FlexLayout>
      </Container>
    </FlexLayout>
  );
};

export default Navbar;
