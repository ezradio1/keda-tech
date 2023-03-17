import { Col, Row } from "antd";
import Container from "components/Container";
import FlexLayout from "components/FlexLayout";
import CardPricing from "./components/CardPricing";
import { SERVICES } from "./index.constants";
import * as css from "./index.styles";

const Pricing = () => {
  return (
    <FlexLayout
      direction='column'
      width='100%'
      align='flex-end'
      className={css.wrapper}
      id='pricing'
      padding='86px 0'
    >
      <hr className={css.line} />
      <Container>
        <FlexLayout direction='column' width='100%' align='center'>
          <p className={css.title}>Our Services</p>
          <Row gutter={[24, 12]} className={css.row}>
            {SERVICES.map((service, key) => (
              <Col key={key} lg={8} md={8} sm={24} xs={24}>
                <CardPricing {...service} />
              </Col>
            ))}
          </Row>
        </FlexLayout>
      </Container>
    </FlexLayout>
  );
};

export default Pricing;
