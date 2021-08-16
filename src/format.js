export function safeMobile(val) {
  if (!val) return val

  if (typeof(val) !== 'string') {
    val = String(val)
  }

  if (val.length !== 11) return val

  return `${val.substr(0, 3)}****${val.substr(7)}`
}

export function safeIdCard(val) {
  if (!val) return val

  if (typeof(val) !== 'string') {
    val = String(val)
  }

  if (val.length !== 15 && val.length !== 18) return val

  if (val.length === 15) {
    return `${val.substr(0, 3)}********${val.substr(11)}`
  } else {
    return `${val.substr(0, 3)}***********${val.substr(14)}`
  }
}

/**
 * format date
 * @param {*} timestamp 
 * @param {*} format yyyy-mm-dd hh:mm:ss
 */
export function date(timestamp, format='yyyy-mm-dd hh:mm') {
  let temp = ''
  const date = new Date(timestamp)
  if (format.indexOf('yyyy') > -1) {
    temp += date.getFullYear()
  }
  if (format.indexOf('-mm') > -1) {
    temp += !!temp ? '-' : ''
    temp += makeUp10(date.getMonth() + 1)
  }
  if (format.indexOf('dd') > -1) {
    temp += !!temp ? '-' : ''
    temp += makeUp10(date.getDate())
  }
  if (format.indexOf('hh') > -1) {
    temp += !!temp ? ' ' : ''
    temp += makeUp10(date.getHours())
  }
  if (format.indexOf(':mm') > -1) {
    temp += !!temp ? ':' : ''
    temp += makeUp10(date.getMinutes())
  }
  if (format.indexOf('ss') > -1) {
    temp += !!temp ? ':' : ''
    temp += makeUp10(date.getSeconds())
  }
  return temp
}

function makeUp10(val) {
  return val < 10 ? `0${val}` : val
}