import { css } from '@emotion/css'
import { BACKGROUND_TEXTURE } from 'constants/background'

const opacityTransition = css`
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

export const wrapper = css`
  height: calc(100vh - 100px);
  padding: 102px 0 0 0;
  background-image: url(${BACKGROUND_TEXTURE});
  @media all and (max-width: 768px) {
    padding: 120px 0 8px 0;
    height: fit-content;
  }
`

export const welcomeText = css`
  overflow: hidden;
  font-size: 24px;
  font-family: monospace;
  white-space: nowrap;
  border-right: 0.15em solid black;
  animation: typing 2s steps(30, end), blink-caret 0.75s step-end infinite;

  text-align: right;
  font-size: 24px;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: black;
    }
  }

  @media all and (max-width: 768px) {
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 48px;
  }
`

export const welcomeTextDesc = css`
  max-width: 800px;
  text-align: right;
  font-size: 24px;
  ${opacityTransition}
  animation-delay: 1s;
  @media all and (max-width: 768px) {
    max-width: 92vw;
    text-align: center;
    font-size: 18px;
  }
`

export const textWrapper = css`
  align-items: flex-end;
  @media all and (max-width: 768px) {
    align-items: center;
  }
`

export const wave = css`
  width: 40%;
  position: absolute;
  bottom: 0;
  z-index: -1;
  @media all and (max-width: 768px) {
    display: none;
  }

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

export const slogan = css`
  font-style: italic;
  font-weight: 600;
  margin-top: 24px;
  ${opacityTransition}
  @media all and (max-width: 768px) {
    text-align: center;
  }
  animation-delay: 1.2s;
`

export const welcomeIllustrationWrapper = css`
  margin-top: 2em;
  animation-delay: 1.4s;
  svg {
    width: 30em;
    height: fit-content;
    ${opacityTransition}
    animation-delay: 1.5s;
    @media all and (max-width: 768px) {
      width: 92vw;
    }
  }
`
