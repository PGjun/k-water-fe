export const queryStringToObject = (
  queryString: string,
): Record<string, any> => {
  const params: any = new URLSearchParams(queryString)
  const obj: Record<string, any> = {}

  // params 객체의 모든 키-값 쌍을 순회하며 객체에 추가
  for (let [key, value] of params.entries()) {
    obj[key] = value
  }

  return obj
}
