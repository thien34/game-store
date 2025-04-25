import Footer from '@/components/client/layouts/footer'
import Header from '@/components/client/layouts/navbar'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
