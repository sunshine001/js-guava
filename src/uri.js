export function getVars(url=null) {
  const vars = {}
  const varUrl = url || window.location.href
  varUrl.replace(/[?&]+([^=&]+)=([^&]*)/gi,
    (m, key, value) => vars[key] = value
  )
  return vars
}

export function getVar(key, url=null) {
  const vars = getVars(url)
  for (const k in vars) {
    if (k === key) return vars[k]
  }
  return null
}

export function joinVars(url, params) {
  if (!url || !params) return url

  url += url.indexOf('?') > -1 ? '' : '?'
  for (const k in params) {
    const separator = url.endsWith('?') ? '' : '&'
    const v = encodeURIComponent(params[k] || '')
    url += separator + `${k}=${v}`
  }
  return url
}