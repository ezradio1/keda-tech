import { css } from '@emotion/css'
import { BACKGROUND_TEXTURE } from 'constants/background'
import { NN0 } from 'constants/colors'

const slideTransition = (isShow: boolean) => css`
  transform: translateY(-100%);
  opacity: 0;
  animation: slide-in 0.75s ease-out forwards;

  ${!isShow &&
  `
    animation: slide-out 0.75s ease-out forwards;
  `}

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;

      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-100%);
    }
  }
`
export const wrapper = (showShadow: boolean) => css`
  background-image: url(${BACKGROUND_TEXTURE});
  position: fixed;
  top: 0;
  width: 100%;
  background: ${NN0};
  z-index: 4;
  transition: box-shadow 0.4s ease-in-out;
  ${showShadow &&
  `
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  `}
`

export const container = css`
  @media all and (max-width: 768px) {
    display: none;
  }
`

export const wave = (isScroll: boolean) => css`
  width: 35%;
  position: absolute;
  z-index: -1;
  ${slideTransition(!isScroll)}

  @media all and (max-width: 768px) {
    width: 55%;
  }
  @media all and (max-width: 480px) {
    width: 75%;
  }
`
export const logo = (isShow: boolean) => css`
  width: 128px;
  ${slideTransition(isShow)}
`

export const logoPrimary = (isShow: boolean) => css`
  position: absolute;
  width: 128px;
  ${slideTransition(isShow)}
`
export const menu = css`
list-style: none;
display: flex;
gap: 24px;
a {
    list-style: none;
    font-weight: 800;
    cursor: pointer;
    text-decoration: none;
    color: #000;
    :hover {
        text-decoration: underline;
      }

  }
}
`
