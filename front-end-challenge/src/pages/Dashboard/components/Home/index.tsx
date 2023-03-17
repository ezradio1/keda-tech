import FlexLayout from "components/FlexLayout";
import * as css from "./index.styles";
import WaveBottom from "assets/img/wave-bottom.png";
import Container from "components/Container";
import WelcomeIllustration from "assets/svgComponent/Welcome";

const Home = () => {
  return (
    <FlexLayout
      direction='column'
      width='100%'
      align='flex-end'
      className={css.wrapper}
      id='home'
    >
      <Container>
        <FlexLayout
          direction='column'
          width='100%'
          padding='54px 0'
          className={css.textWrapper}
        >
          <p className={css.welcomeText}>Welcome to our platform!</p>
          <p className={css.welcomeTextDesc}>
            We believe that keeping track of every business transaction is the
            key to success for entrepreneurs. That's why we're here to provide
            the best service to help entrepreneurs manage their businesses.
          </p>
        </FlexLayout>
        <FlexLayout
          direction='column'
          className={css.welcomeIllustrationWrapper}
        >
          <p className={css.slogan}>
            "Control your inventory, conquer your business: with our IT
            solutions."
          </p>
          <WelcomeIllustration />
        </FlexLayout>
      </Container>
      <img className={css.wave} src={WaveBottom} alt='logo.png' />
    </FlexLayout>
  );
};

export default Home;
