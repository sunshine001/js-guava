let isDoing = false

export function once(callback, millisecond) {
  if (isDoing || !callback) return 
  isDoing = true
  setTimeout(() => { isDoing = false }, millisecond || 1500)
  callback()
}