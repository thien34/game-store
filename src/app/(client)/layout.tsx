import Footer from '@/components/client/layouts/footer'
import HeaderWrapper from '@/components/client/layouts/HeaderWrapper'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <div>
      <HeaderWrapper />
      {children}
      <Footer />
    </div>
  )
}
