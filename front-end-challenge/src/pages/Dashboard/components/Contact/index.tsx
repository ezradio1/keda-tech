import { Button, Col, Row } from "antd";
import Container from "components/Container";
import FlexLayout from "components/FlexLayout";
import { SOCIAL_MEDIA } from "./index.constants";
import * as css from "./index.styles";

const Contact = () => {
  return (
    <FlexLayout
      direction='column'
      width='100%'
      align='flex-end'
      className={css.wrapper}
      id='contact-us'
    >
      <Container>
        <Row>
          <Col md={12} xs={24}>
            <FlexLayout
              direction='column'
              width='100%'
              gap='36px'
              align='flex-start'
            >
              <FlexLayout
                direction='column'
                width='100%'
                gap='12px'
                align='flex-start'
              >
                <p className={css.subscribeText}>
                  Subscribe to keDA Tech Insights and Webinars. <br /> Stay
                  updated to your favorite topics.
                </p>
                <Button className={css.subscribeBtn} type='primary'>
                  Subscribe
                </Button>
              </FlexLayout>
              <FlexLayout width='100%' gap='12px' className={css.textButton}>
                <p>Contact Us</p>
                <p>Location</p>
                <p>Client</p>
              </FlexLayout>
            </FlexLayout>
          </Col>
          <Col md={12} xs={24}>
            <FlexLayout
              direction='column'
              width='100%'
              gap='12px'
              className={css.socialMediaWrapper}
            >
              <FlexLayout
                width='100%'
                className={css.socialMediaWrapper}
                gap='8px'
              >
                {SOCIAL_MEDIA.map((socialMedia, key) => (
                  <FlexLayout
                    key={key}
                    className={css.iconWrapper}
                    justify='center'
                  >
                    <img
                      className={css.socialMediaLogo}
                      src={socialMedia.logo}
                      alt={socialMedia.alt}
                    />
                  </FlexLayout>
                ))}
              </FlexLayout>
              <p className={css.appVersion}>© 2023 keDA-Tech v1.11.12.39</p>
            </FlexLayout>
          </Col>
        </Row>
      </Container>
    </FlexLayout>
  );
};

export default Contact;
