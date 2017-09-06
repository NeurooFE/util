/**
 * 获取对象（包含 parse 对象） object 深层属性
 * @param obj {object}  对象(含parse对象)
 * @param key {string} keys, 如key1.key2.key3
 * @param defaultVal {*} 当属性不存在时，默认的返回值
 * @returns {*}
 */
export default (obj, key, defaultVal = undefined) => {
  const keys = key.split('.')
  let temp = obj
  for (let i = 0, len = keys.length; i < len; i++) {
    if (temp) {
      if (temp[keys[i]]) {
        temp = temp[keys[i]]
      } else {
        try {
          temp = temp.get(keys[i])
          console.log(temp)
        } catch (err) {
          temp = temp[keys[i]]
        }
      }
    } else {
      break
    }
  }
  return typeof temp === 'undefined' ? defaultVal : temp
}