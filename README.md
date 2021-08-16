## Summary
js-guava is a browser js tool library for quickly develop.

## Install
```
npm install js-guava --save
```

## Use
### uri
```
import { uri } from 'js-guava'

> uri.getVars([url]) //get url's all params
> uri.getVar(key, [url])  //get given url's param
> uri.joinVars(url, params)
  input: http://www.test.com , {name: 'test'}
  output: http://www.test.com?name=test
```
### check
```
import { check } from 'js-guava'

> check.isEmpty(v) 
> check.isNumber(v)
> check.isMobile(v)
> check.isIdCard(v)
> check.isChinese(v)
> check.reg(v, reg)
```
### eventbus
```
import { eventbus } from 'js-guava'

> eventbus.on(key, (params)=>{})
  # observer
> eventbus.emit(key, [params])
  # trigger observer
> eventbus.remove(key, callback) 
  # remove observer 
```
### format
```
import { format } from 'js-guava'

> format.safeMobile(val) 
  input: 15056121234, output: 150*****1234 
> format.safeIdCard(val) 
  input: 370125199601235212, output: 370***********5212 
> format.date(timestamp, [format])
  default: yyyy-mm-dd hh:mm
  input: format.date(1628733809189)
  output: 2021-08-12 10:03
```
### shared
```
import { shared } from 'js-guava'

# memory store, support refresh page
# storedKey, each project must be unique
> shared.config(storedKey) //Must!!! 
> shared.set(key, value)
> shared.get(key)
> shared.remove(key)
```
### store
```
import { store } from 'js-guava'

# persistence disk store
# storedKey, each project must be unique
> store.config(storedKey) //Must!!! 
> store.set(key, value)
> store.get(key)
> store.remove(key)
```
### logger
```
import { logger } from 'js-guava'

> logger.config(prefix) 
  prefix: com.google.demo
  output: com.google.demo>>>
> logger.on() 
  default: on
> logger.off()
> logger.log(message)
> logger.error(message)
```
### shake
```
import { shake } from 'js-guava'

# apply to network submit
> shake.once(event, [millisecond])
  event: exec fucntion
  millisecond: interval millisecond, default 1500
  shake.once(()=>{})
```
### filter
```
import { filter } from 'js-guava'

# only single layer filtering is supported
> filter.ignoreNull(obj)
  input: { id: 1, name: 'test', mobile: '' }
  output: { id: 1, name: 'test' }
```
### interval
```
import { interval } from 'js-guava'

# interval task
> interval.start(execFunc, [millisecond])
  interval.start(next=>{ next() }, 5000)
```