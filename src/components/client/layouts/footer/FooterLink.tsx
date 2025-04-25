import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

type FooterLinkLabel = 'new' | 'soon'

export interface FooterLinkProps {
  title: string
  href: string
  label?: FooterLinkLabel
  isInternal?: boolean
}

export function FooterLink({ title, href, label, isInternal = true }: Readonly<FooterLinkProps>) {
  if (label === 'soon') {
    return (
      <span className={cn('footer-link footer-link--soon')}>
        {title}
        <span className={cn('footer-link__label')}>{label}</span>
      </span>
    )
  }

  return (
    <Link
      href={href}
      className={cn('footer-link')}
      {...(!isInternal && { target: '_blank', rel: 'noreferrer nofollow' })}
    >
      {title}
      {!isInternal && <ExternalLink className={cn('size-3.5')} />}
      {label && <span className={cn('footer-link__label')}>{label}</span>}
    </Link>
  )
}
