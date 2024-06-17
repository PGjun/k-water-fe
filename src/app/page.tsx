import MainPage from './(pages)/_main/page'

export default function Home(props: {
  params: {}
  searchParams: { page_num: '1' }
}) {
  return (
    <main>
      <MainPage page_num={props.searchParams.page_num} />
    </main>
  )
}
