export const getBaseUrl = () => {
  switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    case 'production':
      return 'https://luoi.dev'
    case 'preview':
      return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    default:
      return `http://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  }
}
// Convert object to query string
// getParams({ a: '1', b: ['2', '3'], c: undefined }) => 'a=1&b=2&b=3'
export const getParams = (obj: Record<string, string | Array<string> | undefined>) =>
  Object.entries(obj)
    .filter(entry => entry[1])
    .map(([key, val]) => `${key}=${val}`)
    .join('&')
