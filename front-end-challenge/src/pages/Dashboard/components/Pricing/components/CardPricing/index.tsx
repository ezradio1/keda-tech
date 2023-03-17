import { Button } from "antd";
import Check from "assets/img/check.png";
import FlexLayout from "components/FlexLayout";
import useIndex from "./index.hook";
import * as css from "./index.styles";
import { CardPricingProps } from "./index.types";

const CardPricing = (props: CardPricingProps) => {
  const { name, price, description } = props;
  const { isVisible } = useIndex();

  return (
    <div className={css.wrapper(isVisible)} title={name} id='card'>
      <FlexLayout
        direction='column'
        justify='space-between'
        align='start'
        width='100%'
        className={css.container}
      >
        <FlexLayout
          direction='column'
          justify='start'
          align='start'
          width='100%'
          gap='8px'
        >
          <p className={css.name}>{name}</p>
          <p className={css.price}>
            {price} <span> / month</span>
          </p>
          <FlexLayout
            direction='column'
            align='flex-start'
            width='100%'
            gap='4px'
          >
            {description.map((desc, key) => (
              <FlexLayout key={key} gap='8px'>
                <img className={css.checkIcon} src={Check} alt='check.png' />
                <p>{desc}</p>
              </FlexLayout>
            ))}
          </FlexLayout>
        </FlexLayout>
        <Button type='primary' block>
          Choose plan
        </Button>
      </FlexLayout>
    </div>
  );
};

export default CardPricing;
