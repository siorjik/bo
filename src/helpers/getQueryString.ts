export default (params: { [key: string]: string | number | boolean }) => {
  for (const[key, val] of Object.entries(params)) {
    if (val === '') delete params[key]
  }

  const res = Object.keys(params).reduce((previous: string, current: string) => {
    return `${previous}=${params[previous]}&${current}=${params[current]}`.replace('=undefined', '')
  })

  return res
}
