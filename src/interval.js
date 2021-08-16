export function start(execFunc, millisecond) {
  if (!execFunc || !millisecond) return 

  const next = () => {
    setTimeout(()=>{
      execFunc(next)
    }, millisecond)
  }

  setTimeout(()=>{ execFunc(next) }, 0)
}