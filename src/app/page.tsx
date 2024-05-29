import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/authOptions'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session?.user?.name}
    </main>
  )
}