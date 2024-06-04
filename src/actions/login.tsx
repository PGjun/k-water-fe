'use server'

import axios from 'axios'

const baseUrl = 'http://jdi-global.com:35003'

export async function login(username: string, password: string) {
  const res = await axios.post(`${baseUrl}/api/users/login`, {
    username,
    password,
  })

  if (res.status === 200) {
    const data = res.data
    return data
  } else {
    return null
  }
}

export async function getUser(userId: string) {
  const response = await fetch('http://jdi-global.com:35003/api/users/1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (response.ok) {
    const data = await response.json()
    return data
  } else {
    return null
  }
}
