import Image from 'next/image'

export default function Banner() {
  return (
    <section className='overflow-hidden py-4'>
      <div className='content-wrapper-max px-6'>
        <h2 className='mb-6 text-center text-3xl font-bold'>Game Mới Cập Nhật</h2>
        <div className='relative aspect-video h-[550px] w-full overflow-hidden rounded-xl'>
          <Image
            src='/images/banner.png'
            alt='Game Mới Cập Nhật'
            fill
            className='object-cover'
            priority
          />
        </div>
      </div>
    </section>
  )
}
