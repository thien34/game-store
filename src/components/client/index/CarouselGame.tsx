import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

interface GameCategory {
  id: number
  title: string
  image: string
}

const gameCategories: GameCategory[] = [
  {
    id: 1,
    title: 'Chế tạo',
    image: '/images/che-tao.webp'
  },
  {
    id: 2,
    title: 'Bắn súng',
    image: '/images/ban-sung.webp'
  },
  {
    id: 3,
    title: 'Chặt chém',
    image: '/images/chat-chem.webp'
  },
  {
    id: 4,
    title: 'Chiến lược',
    image: '/images/chien-luoc.webp'
  },
  {
    id: 5,
    title: 'Chiến tranh',
    image: '/images/chien-tranh.webp'
  },
  {
    id: 6,
    title: 'Đi cảnh',
    image: '/images/di-canh.webp'
  },
  {
    id: 7,
    title: 'Đối kháng',
    image: '/images/doi-khang.webp'
  },
  {
    id: 8,
    title: 'Đua xe',
    image: '/images/dua-xe.jpg'
  },
  {
    id: 9,
    title: 'Giả lập',
    image: '/images/gia-lap.webp'
  },
  {
    id: 10,
    title: 'Giải đố',
    image: '/images/giai-do.webp'
  },
  {
    id: 11,
    title: 'Góc nhìn thứ ba',
    image: '/images/goc-nhin-thu-3.webp'
  },
  {
    id: 12,
    title: 'Hài hước',
    image: '/images/hai-huoc.webp'
  },
  {
    id: 13,
    title: 'Hành động',
    image: '/images/hanh-dong.jpg'
  },
  {
    id: 14,
    title: 'Thẻ bài',
    image: '/images/the-bai.jpg'
  },
  {
    id: 15,
    title: 'Thủ thành',
    image: '/images/thu-thanh.webp'
  },
  {
    id: 16,
    title: 'Zombie',
    image: '/images/zombie.webp'
  }
]

export default function CarouselGame() {
  return (
    <section className='py-10'>
      <div className='content-wrapper'>
        <Carousel
          opts={{
            align: 'start',
            loop: true
          }}
          className='w-full'
        >
          <CarouselContent className='-ml-2 md:-ml-4'>
            {gameCategories.map(category => (
              <CarouselItem
                key={category.id}
                className='basis-1/3 pl-2 md:basis-1/6 md:pl-4 lg:basis-1/9'
              >
                <div className='group hover:border-primary cursor-pointer overflow-hidden rounded-xl p-0 transition-colors'>
                  <div className='relative mx-auto aspect-square'>
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className='rounded-xl object-cover transition-transform group-hover:scale-110'
                    />
                  </div>
                  <h3 className='text-center text-sm font-semibold'>{category.title}</h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='hidden md:flex' />
          <CarouselNext className='hidden md:flex' />
        </Carousel>
      </div>
    </section>
  )
}
