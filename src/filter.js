export function ignoreNull(obj) {
  const temp = {}
  for (const key in obj) {
    const v = obj[key]
    if (!!v) {
      temp[key] = v
    }
  }
  return temp
}