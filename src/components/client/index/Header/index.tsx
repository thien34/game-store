import HeaderCta from './HeaderCta'
import HeaderImage from './HeaderImage'
import HeaderTechStack from './HeaderTechStack'
import HeaderTitle from './HeaderTitle'
import { cn } from '@/lib/utils'

function Header() {
  return (
    <header className={cn('background-grid background-grid--fade-out pt-36 pb-20', 'lg:pt-52 lg:pb-28')}>
      <div className={cn('content-wrapper')}>
        <div className={cn('relative')}>
          <div className={cn('relative z-10')}>
            <HeaderTitle />
          </div>
          <div className={cn('mt-6', 'md:mt-8')}>
            <HeaderCta />
          </div>
          <div className={cn('mt-20', 'lg:mt-36')}>
            <HeaderTechStack />
          </div>
          <div className={cn('pointer-events-none absolute -top-36 right-0 z-0 hidden select-none', 'lg:block')}>
            <HeaderImage />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
