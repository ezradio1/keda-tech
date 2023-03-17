import { css } from '@emotion/css'
import { NN100, NN200 } from 'constants/colors'

export const wrapper = (isVisible: boolean) => css`
  border: 1px solid ${NN100};
  border-radius: 8px;
  padding: 24px;
  ${isVisible &&
  `
    animation: bounce 1.25s;
    animation-fill-mode: forwards;
  `}
  @keyframes bounce {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`

export const container = css`
  height: 280px;
  @media all and (min-width: 768px) {
    height: 340px;
  }
  @media all and (min-width: 1024px) {
    height: 280px;
  }
`

export const name = css`
  color: ${NN100};
  font-size: 24px;
  font-weight: 700;
  @media all and (min-width: 768px) {
    font-size: 18px;
  }
  @media all and (min-width: 1024px) {
    font-size: 24px;
  }
`

export const price = css`
  color: ${NN200};
  font-size: 24px;
  font-weight: 800;
  span {
    font-size: 18px;
    font-weight: 600;
    color: ${NN100};
  }
  @media all and (min-width: 768px) {
    font-size: 18px;
  }
  @media all and (min-width: 1024px) {
    font-size: 24px;
  }
`

export const checkIcon = css`
  width: 16px;
`
