import { css } from '@emotion/css'
import { BACKGROUND_TEXTURE } from 'constants/background'
import { NN0 } from 'constants/colors'

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

export const wave = css`
  width: 35%;
  position: absolute;
  z-index: -1;
  opacity: 0;
  transform: translateY(-100%);
  animation: slide-in 1s ease-out forwards;

  @media all and (max-width: 768px) {
    width: 55%;
  }
  @media all and (max-width: 480px) {
    width: 75%;
  }

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
`
export const logoWrapper = css``
export const logo = css`
  width: 128px;
  opacity: 0;
  animation: fade-in 0.5s ease-in-out 0.75s forwards;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
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
