import { queryStringToObject } from './queryStringToObject'

export const getSearch = () => {
  return queryStringToObject(window.location.search.slice(1))
}
