import { registerUser } from '@/app/actions/auth'

export default function RegisterPage() {
  return (
    <form action={registerUser} className="max-w-md mx-auto mt-20 space-y-4">
      <input name="email" type="email" required className="input" />
      <input name="password" type="password" required className="input" />
      <button className="btn w-full">Register</button>
    </form>
  )
}
