import { css } from '@emotion/css'
import { CONTACT_BACKGROUND_TEXTURE } from 'constants/background'
import { NN50 } from 'constants/colors'

export const wrapper = css`
  background-color: ${NN50};
  background-image: url(${CONTACT_BACKGROUND_TEXTURE});
  padding: 24px 0;
  @media all and (max-width: 768px) {
    padding-bottom: 0;
  }
`

export const subscribeText = css`
  font-weight: 800;
  @media all and (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`

export const subscribeBtn = css`
  @media all and (max-width: 768px) {
    width: 100%;
  }
`

export const textButton = css`
  align-items: flex-start;
  p {
    width: fit-content;
    font-size: 14px;
    cursor: pointer;
    :hover {
      font-weight: 700;
    }
  }
  justify-content: flex-start;
  @media all and (max-width: 768px) {
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    p {
      width: 100%;
    }
  }
`

export const appVersion = css`
  font-size: 14px;
`

export const socialMediaWrapper = css`
  padding: 12px 0;
  align-items: flex-end;
  justify-content: flex-end;
  @media all and (max-width: 768px) {
    justify-content: space-evenly;
    align-items: center;
  }
`

export const socialMediaLogo = css`
  width: 48px;
  cursor: pointer;
  transition: opacity 0.15s ease-in-out;

  :hover {
    opacity: 0.5;
  }
`

export const iconWrapper = css`
  @media all and (max-width: 768px) {
    width: 100%;
  }
`
