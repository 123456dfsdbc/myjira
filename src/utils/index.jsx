import { useEffect, useState } from "react";
/* 当请求时地址栏中数据项name为空时，删除掉name请求 */
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

/* 省略useEffect中的[] */
export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, [])
}

/* 实现类似去抖功能，实现输入框数据变化时，只取最后一次 */
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  // 等价于willunmount
  useEffect(() => {
    // 每次在value变化后，设置一个定时器
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    // 每次在上一个useEffect处理完成以后再运行
    return () => {
      clearTimeout(timeout)
    }
  }, [value, delay]);
  return debouncedValue
}




