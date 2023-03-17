import { NN50 } from 'constants/colors'
import { css } from '@emotion/css'
import { BACKGROUND_TEXTURE } from 'constants/background'

export const wrapper = css`
  background-color: #ffffff;
  background-image: url(${BACKGROUND_TEXTURE});
  min-height: 70vh;
  @media all and (max-width: 480px) {
    padding: 120px 0 24px 0;
    height: fit-content;
  }
`
export const title = css`
  font-size: 48px;
  font-weight: 700;

  animation-name: from-bottom;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @keyframes from-bottom {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`
export const row = css`
  width: 100%;
  margin-top: 72px;
`

export const line = css`
  width: 30vw;
  margin: 20px auto;
  color: ${NN50};
`
