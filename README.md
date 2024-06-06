This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev

```

## BASICS INFORMATIONS

<a href="https://www.youtube.com/watch?v=1MTyCvS05V4&ab_channel=CodeWithAntonio">NextAuth V5</a>

<a href="https://youtu.be/1MTyCvS05V4?si=cFUXA6nOxaB6ie9m">LINK</a>

### PACKAGES:

<a href='https://ui.shadcn.com/docs/installation/next'> Shadcn/UI</a>

Auth.js: https://authjs.dev/
Middleware config: https://dub.sh/Apr6dvD
Resend: https://resend.com/
Node.js: https://nodejs.org/en
ShadcnUI: https://ui.shadcn.com/
Clerk: https://dub.sh/SdVFxFU

Learn how to add advanced authentication to your NextJS App.

- Server Actions

### Key Features:

- 🔐 Next-auth v5 (Auth.js)
- 🚀 Next.js 14 with server actions
- 🔑 Credentials Provider
- 🌐 OAuth Provider (Social login with Google & GitHub)
- 🔒 Forgot password functionality
- ✉️ Email verification
- 📱 Two factor verification (2FA)
- 👥 User roles (Admin & User)
- 🔓 Login component (Opens in redirect or modal)
- 📝 Register component
- 🤔 Forgot password component
- ✅ Verification component
- ⚠️ Error component
- 🔘 Login button
- 🚪 Logout button
- 🚧 Role Gate
- 🔍 Exploring next.js middleware
- 📈 Extending & Exploring next-auth session
- 🔄 Exploring next-auth callbacks
- 👤 useCurrentUser hook
- 🛂 useRole hook
- 🧑 currentUser utility
- 👮 currentRole utility
- 🖥️ Example with server component
- 💻 Example with client component
- 👑 Render content for admins using RoleGate component
- 🛡️ Protect API Routes for admins only
- 🔐 Protect Server Actions for admins only
- 📧 Change email with new verification in Settings page
- 🔑 Change password with old password confirmation in Settings page
- 🔔 Enable/disable two-factor auth in Settings page
- 🔄 Change user role in Settings page (for development purposes only)

## DEPENDENCIES:

### PRISMA

Link: <a href="https://www.prisma.io/docs/getting-started"> PRISMA </a>

```
yarn add -D prisma
```

```
yarn add @prisma/client
```

```
yarn prisma init
```

- Go to https://console.neon.tech/app/projects/weathered-grass-17092104/quickstart

```
yarn prisma generate
```

```
yarn prisma db push
```

## Next Auth js

Link: <a href="https://next-auth.js.org/getting-started/example">NextAuthJs</a>

Link: <a href="https://authjs.dev/getting-started/adapters/prisma?_gl=1*9xzmmg*_gcl_au*MTgxNjg1MDM5OS4xNzE2OTcwNjc2">Prisma Adapter </a>

run:

```
yarn prisma generate
```

```
yarn prisma db push
```

```
npx prisma studio
```

## Password Cryptography

```
yarn add bcrypt
```

```
yarn add -D @types/bcrypt
```

## ISUES

- Got some problems when I create a user and the solution was:

* Add this package in package.json

```
"string-width": "4.2.3"
```

- Or install the bcryptjs package

* Then Remove node_modules folder and yarn.lock package.lock files. Run yarn install.
