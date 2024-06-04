import { authOptions } from '@/app/api/auth/authOptions'
import { getServerSession } from 'next-auth'

export default async function MainPage() {
  const session = await getServerSession(authOptions)

  return <div>{session?.user?.name}</div>
}
