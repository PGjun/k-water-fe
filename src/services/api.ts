import axios, { AxiosResponse } from 'axios'

const BASE_URL = 'http://jdi-global.com:35003'

const apiClient = axios.create({
  baseURL: BASE_URL,
})

// 공통적인 에러 처리 인터셉터
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // 서버 응답이 있는 경우
      const { status, data } = error.response
      switch (status) {
        case 400:
          console.error('Bad Request:', data.message)
          break
        case 401:
          console.error('Unauthorized:', data.message)
          break
        case 403:
          console.error('Forbidden:', data.message)
          break
        case 404:
          console.error('Not Found:', data.message)
          break
        case 500:
          console.error('Internal Server Error:', data.message)
          break
        default:
          console.error('Error:', data.message)
      }
    } else if (error.request) {
      // 요청이 만들어졌지만 응답을 받지 못한 경우
      console.error('No response received:', error.request)
    } else {
      // 요청을 설정하는 중에 에러가 발생한 경우
      console.error('Error setting up request:', error.message)
    }
    // 공통적으로 에러를 처리한 후, 필요하다면 에러를 다시 던집니다.
    return Promise.reject(error)
  },
)

// API 경로 정의
const API_PATHS = {
  USER: '/api/users',
  EMPLOYEE: '/api/employees',
  NOTICE: '/api/notices',
  VIDEO: '/api/videos',
}

const login = (data: { username: string; password: string }) =>
  apiClient.post(`${API_PATHS.USER}/login`, data)

const verifyUsername = (username: string) =>
  apiClient.post(`${API_PATHS.USER}/verify_username?username=${username}`)

const verifyEmployee = (employeeNumber: string) =>
  apiClient.get(
    `${API_PATHS.EMPLOYEE}/verify?company_id=1&employee_number=${employeeNumber}`,
  )

const createUser = (data: CreatUserSchema) =>
  apiClient.post(`${API_PATHS.USER}`, data)

const readNotices = (): Promise<{
  data: { title: string; content: string; created_at: string }[]
}> => apiClient.get(`${API_PATHS.NOTICE}/?page=1&page_size=10`)

const createNotice = (data: {
  userId: number
  title: string
  content: string
}) =>
  apiClient.post(`${API_PATHS.NOTICE}/?user_id=${data.userId}`, {
    title: data.title,
    content: data.content,
  })

interface Video {
  url: string
  thumbnail: string
  timelines: {
    time: string
    subtitle: string
  }[]
  title: string
  provider: string
  source_site: string
  upload_date: string
  metatext: string[]
  accident_type: {
    id: number
    name: string
  }
  accident_area: {
    id: number
    name: string
  }
}

const readVideos = async (params: {
  keyword?: string
  title?: string
  accident_type_ids?: string
  accident_area_ids?: string
  start_date?: string
  end_date?: string
}): Promise<Video[]> => {
  // URLSearchParams 객체 생성
  const queryParams = new URLSearchParams(params)

  const { data } = await apiClient.get(
    `${API_PATHS.VIDEO}/?${queryParams.toString()}`,
  )

  return data
}

export const api = {
  login,
  verifyUsername,
  verifyEmployee,
  createUser,
  readNotices,
  createNotice,
  readVideos,
}
