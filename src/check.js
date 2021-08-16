export function isEmpty(val) {
  return val === undefined || val === '' || val === null 
}

export function isNumber(val) {
  return typeof(val) === 'number'
}

export function isMobile(val) {
  return /^1[3-9]\d{9}$/.test(val)
}

export function isIdCard(val) {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(val)
}

export function isChinese(val) {
  return /.*[\u4e00-\u9fa5]+.*$/.test(val)
}

export function reg(val, reg) {
  return reg.test(val)
}