import { css } from '@emotion/css'

export const wrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const container = css`
  width: 100%;
  padding: 0 24px;
  @media (max-width: 768px) {
    padding: 0 8px;
    max-width: 760px;
  }
  @media (min-width: 1024px) {
    max-width: 1000px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`
