import { NN0, NN100, NN300 } from 'constants/colors'
export const getTextColor = (color: string) => {
  switch (color) {
    case NN100:
      return NN300
    default:
      return NN0
  }
}
