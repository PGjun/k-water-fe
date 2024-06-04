import { Header } from '@/app/_components/common/Header'
import { authOptions } from '@/app/api/auth/authOptions'
import { getServerSession } from 'next-auth'

export default async function MainPage() {
  const session = await getServerSession(authOptions)

  return (
    <div>
      <Header />
      {session?.user?.name}
    </div>
  )
}
