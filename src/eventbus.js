const eventMap = {}

/**
 * observer
 * @param {*} key 
 * @param {*} callback 
 */
export function on(key, callback) {
  if (!key || !callback) return

  const event = eventMap[key]
  if (!!event) {
    event.queue.push(callback)
  } else {
    eventMap[key] = { queue: [callback] }
  }
}

/**
 * trigger observer
 * @param {*} key 
 * @param {*} params 
 * @returns 
 */
export function emit(key, params) {
  if (!key || !params) return

  for (const eventKey in eventMap) {
    if (eventKey === key) {
      eventMap[eventKey].queue.forEach(c=>{
        c(params)
      })
      return 
    }
  }
}

/**
 * remove observer
 * @param {*} key 
 * @param {*} callback 
 * @returns 
 */
export function remove(key, callback) {
  if (!key || !callback) return

  for (const eventKey in eventMap) {
    if (eventKey === key) {
      const val = eventMap[eventKey]
      val.queue = val.queue.filter(c=>c!==callback)
      return 
    }
  }
}