import Container from "components/Container";
import FlexLayout from "components/FlexLayout";
import * as css from "./index.styles";
import Logo from "assets/img/logo.png";
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
      height='105px'
      align='start'
      justify='space-between'
      className={css.wrapper(showShadow)}
    >
      <ModalLogin
        title='LOGIN'
        show={login}
        onCloseModal={() => setLogin(false)}
      />
      <img className={css.wave} src={Wave} alt='logo.png' />
      <Container>
        <FlexLayout width='100%' justify='space-between' padding='16px 0'>
          <div className={css.logoWrapper}>
            <img className={css.logo} src={Logo} alt='logo.png' />
          </div>
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
