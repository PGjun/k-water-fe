import { revalidatePath } from 'next/cache'
import { createNotice, readNotices } from '../../../actions/notice'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/authOptions'

export default async function Page() {
  const notices = await readNotices()
  const session: any = await getServerSession(authOptions)

  async function create(formData: FormData) {
    'use server'

    const title = formData.get('title') as string
    const content = formData.get('content') as string
    if (!session) return

    const resData = await createNotice({
      userId: session?.user?.id as number,
      title,
      content,
    })
    if (resData) {
      revalidatePath('/notice')
    }
  }

  return (
    <div>
      {notices &&
        notices.map(({ title, content, created_at }, idx) => (
          <div className="border" key={idx}>
            <div>{title}</div>
            <div>{content}</div>
            <div>{created_at}</div>
          </div>
        ))}

      <form action={create}>
        <input type="text" name="title" placeholder="제목" required />
        <input type="text" name="content" placeholder="내용" required />
        <button type="submit">추가</button>
      </form>
    </div>
  )
}
