import authConfig from './auth.config'
import NextAuth from 'next-auth'

export const { auth } = NextAuth(authConfig)

export default auth((req) => {
  console.log('ROUTE: ', req?.nextUrl.pathname)
  console.log('IS LOGGED IN: ', !!req?.auth)
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
