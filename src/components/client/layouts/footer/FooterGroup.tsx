import { FooterLink, FooterLinkProps } from './FooterLink'

interface FooterGroupProps {
  title: string
  links: Array<FooterLinkProps>
}

export function FooterGroup({ title, links }: Readonly<FooterGroupProps>) {
  return (
    <div>
      <div className='mb-2 text-[13px] text-slate-600 dark:text-slate-400'>{title}</div>
      <ul className='flex flex-col'>
        {links.map(({ title: linkTitle, href, label, isInternal }) => (
          <li key={href}>
            <FooterLink
              title={linkTitle}
              href={href}
              label={label}
              isInternal={isInternal}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
