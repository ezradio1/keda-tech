import { css } from '@emotion/css'
import { NN0 } from 'constants/colors'

export const wrapper = (color: string, disabled: boolean, width: string) => css`
  display: flex;
  gap: 14px;
  border-radius: 8px;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  background-color: ${NN0};
  color: ${color};
  border: 1px solid ${color};
  transition: opacity 0.3s ease;
  :hover {
    ${!disabled &&
    `
    opacity: 0.7;
    cursor: pointer;
    background-color: ${color};
    p{
      color: ${NN0}
    }
    `}
  }
  min-width: 130px;
  width: ${width};
  height: 42px;

  ${disabled &&
  `
  opacity: 0.4;
  :hover {
    cursor: not-allowed;

  }
  
  `}
`

export const text = (color: string) => css`
  font-weight: 600;
  font-size: 18px;
  color: ${color};
`
