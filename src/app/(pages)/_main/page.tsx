import { Header } from '@/app/_components/common/Header'
import { Layout } from '@/app/_components/common/layouts'
import { authOptions } from '@/app/api/auth/authOptions'
import { getServerSession } from 'next-auth'

export default async function MainPage() {
  const session = await getServerSession(authOptions)

  return (
    <Layout.Default>
      <Header />
      {session?.user?.name}
    </Layout.Default>
  )
}
