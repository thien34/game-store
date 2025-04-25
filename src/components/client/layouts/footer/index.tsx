import { format } from 'date-fns'
import { FooterDescription } from './FooterDescription'
import { FooterGroup } from './FooterGroup'
import { cn } from '@/lib/utils'

const Footer = () => {
  return (
    <footer
      className={cn(
        'background-grid background-grid--fade-in mt-24 pt-16 text-sm text-slate-900',
        'dark:text-slate-200'
      )}
    >
      <div className={cn('content-wrapper')}>
        <div className={cn('py-10 font-semibold')}>
          <div className={cn('flex flex-col-reverse gap-16', 'lg:flex-row')}>
            <div className={cn('flex-1')}>
              <FooterDescription />
            </div>
            <div className={cn('flex flex-wrap gap-8', 'md:gap-16')}>
              <FooterGroup
                title='Work'
                links={[
                  { title: 'Contact', href: '/work/contact' },
                  { title: 'Experience', href: '/work/experience' },
                  {
                    title: 'Services',
                    href: '/work/services',
                    label: 'soon'
                  },
                  {
                    title: 'Skills and Tools',
                    href: '/work/skills-and-tools'
                  }
                ]}
              />
              <FooterGroup
                title='Learn'
                links={[
                  {
                    title: 'Docs',
                    href: '/docs'
                  },
                  {
                    title: 'Personal Blog',
                    href: '/blog'
                  },
                  {
                    title: 'T.I.L',
                    href: '/today-i-learned',
                    label: 'new'
                  }
                ]}
              />
              <FooterGroup
                title='This Site'
                links={[
                  {
                    title: 'Design Concept',
                    href: '#',
                    isInternal: false
                  },
                  {
                    title: 'Source Code',
                    href: '##',
                    isInternal: false
                  },
                  {
                    title: 'Credits',
                    href: '/credits'
                  }
                ]}
              />
            </div>
          </div>
        </div>
        <div className={cn('flex justify-between border-t py-6 text-xs')}>
          <div className={cn('font-semibold')}>&copy; {format(new Date(), 'yyyy')}, Hoàng Duy Khánh</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
