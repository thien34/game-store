import Banner from '@/components/client/index/Banner'
import CarouselGame from '@/components/client/index/CarouselGame'
import GameList from '@/components/client/index/GameList'

export default async function Home() {
  return (
    <main className='space-y-8 py-8'>
      <CarouselGame />
      <Banner />
      <GameList />
    </main>
  )
}
