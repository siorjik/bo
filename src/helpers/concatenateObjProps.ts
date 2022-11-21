type ObjType = {
  [key: string]: {
    [prop: string]: string
  } | string | number | boolean
}

export default (obj: ObjType) => {
  let resObj: ObjType = {}

  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object') {
      for (const [prop, val] of Object.entries(obj[key])) {
        resObj[`${key}.${prop}`] = val
      }
    } else resObj[key] = obj[key]
  })

  return resObj
}
