import * as R from 'ramda'

export const filterOptions = (array = [], options = []) => {
  const match = R.anyPass(array)
  return R.filter(match)(options)
}

export const isContainsStringItem = (path, item) => R.pipe(
  R.pathOr('', path),
  R.toLower,
  R.contains(R.toLower(item)),
)

export const isContainsIntItem = (path, item) => R.pipe(
  R.pathOr('', path),
  R.toString,
  R.toLower,
  R.contains(R.toLower(item)),
)
