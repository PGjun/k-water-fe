import axios from 'axios'

const baseUrl = 'http://jdi-global.com:35003'

export const readNotices = async () => {
  const res = await axios.get(`${baseUrl}/api/notices/?page=1&page_size=10`)

  if (res.status === 200) {
    const array: [] = res.data
    return array
  } else return null
}

export const createNotice = async ({
  title,
  content,
  userId,
}: {
  title: string
  content: string
  userId: number
}) => {
  const res = await axios.post(`${baseUrl}/api/notices/?user_id=${userId}`, {
    title,
    content,
  })

  if (res.status === 201) {
    return true
  } else return false
}
