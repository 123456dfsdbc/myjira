// 当请求时地址栏中数据项name为空时，删除掉name请求
export const isFalsy = (value) => value === 0 ? false : !value;

export const cleanObject = (object) => {
  const result = { ...object }
  Object.keys(result).forEach(key => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key]
    }
  })
  return result;
}
