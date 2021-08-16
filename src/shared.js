import { encode, decode } from 'js-base64'

let sharedMap = {}
let sharedKey

export function config(key) {
  sharedKey = key
  init()
}

function init() {
  const cachedValue = sessionStorage.getItem(sharedKey)
  if (!!cachedValue) {
    try {
      const decodeCachedValue = decode(cachedValue)
      sharedMap = JSON.parse(decodeCachedValue)
    } catch {
      console.error('shared sessionStorage parse fail.')  
    }
  }
}

function autoStored() {
  setTimeout(() => {
    const sharedMapStr = JSON.stringify(sharedMap)
    sessionStorage.setItem(sharedKey, encode(sharedMapStr)) 
  }, 0)
}

export function set(key, value) {
  if (!sharedKey || !key || !value) return 
  sharedMap[key] = value
  autoStored()
}

export function get(key) {
  if (!sharedKey || !key) return 
  return sharedMap[key]
}

export function remove(key) {
  if (!sharedKey || !key) return 
  delete sharedMap[key]
}