import { auth } from '@/auth'

const SettingsPage = async () => {
  const session = await auth()
  return (
    <div>
      <h1>{JSON.stringify(session)}</h1>
    </div>
  )
}

export default SettingsPage

// Access this via `localhost:3000/settings`
