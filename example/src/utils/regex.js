// Allow only number.
export const NUMBER_ONLY = /^[0-9]*$/

// Allow number and dot.
export const NUMBER_AND_DOT_ONLY = /^([0-9]|\.)/

// Allow thai and english only.
export const ALPHABET_ONLY = /^[a-zA-Z\u0E01-\u0E5B\s]*$/

// Allow only english.
export const ENGLISH_ALPHABET_ONLY = /^[a-zA-Z\s]*$/

// Example text.toString().replace(CURRENCY_FORMAT, ',') to add comma.
export const CURRENCY_FORMAT = /\B(?=(\d{3})+(?!\d))/g

// Allow only email's key
export const EMAIL_ALLOW_KEYS = /^[a-zA-Z@.\d_+-]*$/

// Validation
export const EMAIL_VALIDATION = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const PHONE_VALIDATION = /^[0].{8}$/
export const MOBILE_VALIDATION = /^[0].{9}$/

export const WEIGHT_VALIDATION = /^(\b\d{2,3}\b)+(\.\d{1,2})?$/
export const HEIGHT_VALIDATION = /^(\b\d{2,3}\b)+(\.\d{1})?$/
export const WEIGHT_CHANGE_VALIDATION = /^(\b\d{1,2}\b)+(\.\d{1,2})?$/
export const MONEY_VALIDATION = /^(\b\d{1,13}\b)+(\.\d{1,2})?$/
export const PERCENTAGE_VALIDATION = /^(\b\d{1,3}\b)+(\.\d{1,2})?$/