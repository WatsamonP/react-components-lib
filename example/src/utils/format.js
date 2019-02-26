import * as R from 'ramda'
import { CURRENCY_FORMAT } from './regex'

/* eslint import/prefer-default-export: 0 */

export const currency = (number = '') => {
  const amount = R.is(Number, number) ? R.toString(number) : number
  if (!R.isEmpty(amount) || !R.isNil(amount)) {
    return R.replace(CURRENCY_FORMAT, ',')(amount)
  }
  return number
}
