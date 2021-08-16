import { encode, decode } from 'js-base64'

let storeMap = {}
let storeKey

export function config(key) {
  storeKey = key
  init()
}

function init() {
  const cachedValue = localStorage.getItem(storeKey)
  if (!!cachedValue) {
    try {
      const decodeCachedValue = decode(cachedValue)
      storeMap = JSON.parse(decodeCachedValue)
    } catch {
      console.error('store localStorage parse fail.')  
    }
  }
}

function autoStored() {
  setTimeout(() => {
    const storeMapStr = JSON.stringify(storeMap)
    sessionStorage.setItem(storeKey, encode(storeMapStr)) 
  }, 0)
}

export function set(key, value) {
  if (!storeKey || !key || !value) return 
  storeMap[key] = value
  autoStored()
}

export function get(key) {
  if (!storeKey || !key) return 
  return storeMap[key]
}

export function remove(key) {
  if (!storeKey || !key) return 
  delete storeMap[key]
}