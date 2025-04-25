import { clsx, type ClassValue } from 'clsx'
import { isValid, parseISO, format, differenceInDays } from 'date-fns'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDateRelative = (date: string) => {
  const parsedDate = parseISO(date)

  if (isValid(parsedDate)) {
    const days = differenceInDays(new Date(), parsedDate)

    if (days > 6) {
      return format(parsedDate, 'dd/MM/yyyy')
    }

    if (days > 1) {
      return `${days} days ago`
    }

    if (days === 1) {
      return `Yesterday`
    }

    if (days === 0) {
      return `Today`
    }
  }

  return date
}
