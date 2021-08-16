let isOn = true
let _prefix = ''

export function on() {
  isOn = true
}

export function off() {
  isOn = false
}

export function config(prefix) {
  _prefix = prefix + '>>>'
}

export function log(message, ...optionalParams) {
  if (isOn) {
    console.log(_prefix + message, ...optionalParams)
  }
}

export function error(message, ...optionalParams) {
  if (isOn) {
    console.error(_prefix + message, ...optionalParams)
  }
}
