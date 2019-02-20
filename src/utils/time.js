import moment from 'moment'
import * as R from 'ramda'

export const thaiMonths = [
  'มกราคม',
  'กุมภาพันธ์',
  'มีนาคม',
  'เมษายน',
  'พฤษภาคม',
  'มิถุนายน',
  'กรกฎาคม',
  'สิงหาคม',
  'กันยายน',
  'ตุลาคม',
  'พฤศจิกายน',
  'ธันวาคม',
]

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const momentPreciseDiff = (d1, d2) => {
  const STRINGS = {
    nodiff: '',
    year: 'year',
    years: 'years',
    month: 'month',
    months: 'months',
    day: 'day',
    days: 'days',
    hour: 'hour',
    hours: 'hours',
    minute: 'minute',
    minutes: 'minutes',
    second: 'second',
    seconds: 'seconds',
    delimiter: ' ',
  }

  let m1 = moment(d1)
  let m2 = moment(d2)

  if (m1.isSame(m2)) {
    return STRINGS.nodiff
  }
  if (m1.isAfter(m2)) {
    const tmp = m1
    m1 = m2
    m2 = tmp
  }

  let yDiff = m2.year() - m1.year()
  let mDiff = m2.month() - m1.month()
  let dDiff = m2.date() - m1.date()
  let hourDiff = m2.hour() - m1.hour()
  let minDiff = m2.minute() - m1.minute()
  let secDiff = m2.second() - m1.second()

  if (secDiff < 0) {
    secDiff = 60 + secDiff
    minDiff--
  }
  if (minDiff < 0) {
    minDiff = 60 + minDiff
    hourDiff--
  }
  if (hourDiff < 0) {
    hourDiff = 24 + hourDiff
    dDiff--
  }
  if (dDiff < 0) {
    const daysInLastFullMonth = moment(`${m2.year()}-${m2.month() + 1}`, 'YYYY-MM')
      .subtract(1, 'M')
      .daysInMonth()
    if (daysInLastFullMonth < m1.date()) {
      dDiff = daysInLastFullMonth + dDiff + (m1.date() - daysInLastFullMonth)
    } else {
      dDiff = daysInLastFullMonth + dDiff
    }
    mDiff--
  }
  if (mDiff < 0) {
    mDiff = 12 + mDiff
    yDiff--
  }

  function pluralize(num, word) {
    return `${num} ${STRINGS[word + (num === 1 ? '' : 's')]}`
  }
  const result = []

  result.push(pluralize(yDiff, 'year'))
  result.push(pluralize(mDiff, 'month'))
  result.push(pluralize(dDiff, 'day'))
  result.push(pluralize(hourDiff, 'hour'))
  result.push(pluralize(minDiff, 'minute'))
  result.push(pluralize(secDiff, 'second'))

  return result.join(STRINGS.delimiter)
}

export const calculateAge = (dateString) => {
  const getYears = moment().diff(dateString, 'years', true)

  return {
    age: Math.round(getYears),
    actualAge: Math.floor(getYears),
  }
}

export const buddhistYear = (langauge = 'th', dateString = '') => {
  const date = moment(dateString)

  if (langauge === 'th') {
    const addYears = 543

    return `${date.format('DD')}/${date.format('MM')}/${
      Number(date.format('YYYY')) + addYears
    }`
  }

  return `${date.format('DD')}/${date.format('MM')}/${date.format('YYYY')}`
}

export const getTimestamp = date => Number(moment(date).locale('th').format('x'))

export const getYear = date => moment(date).get('year')
export const yearsRange = date => R.range(getYear(date) - 80, getYear(date) + 20)
export const getMonth = date => moment(date).get('month')
export const getDate = date => moment(date).get('date')

export const getMinDate = minDate => (minDate ? moment(minDate) : moment(minDate).subtract(100, 'years'))
export const getMaxDate = maxDate => (maxDate ? moment(maxDate) : moment(maxDate).add(100, 'years'))
export const getNowDate = date => moment(date).format('YYYY-MM-DD')

export const convertDateSlash = str => buddhistYear('th', moment(str))

export const convertStringDate = (str) => {
  const date = str.slice(0, 2)
  const month = str.slice(2, 4)
  const year = str.slice(4)
  const dateString = moment(`${month}${date}${year - 543}`, 'MMDDYYYY').locale('th').format('x')
  return Number(dateString)
}

export const getDateStringEQ = date => buddhistYear('th', date).split('/').join('')

