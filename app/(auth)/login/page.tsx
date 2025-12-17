import Link from 'next/link'
import { loginUser } from '@/app/actions/auth'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
   const supabase = await createClient()
   const { data: { user }, error } = await supabase.auth.getUser()
   if (!error || user) {
   redirect('/dashboard')
   }

  return (
    <form action={loginUser} className="max-w-md mx-auto mt-20 space-y-4">
      <input name="email" type="email" required className="input" />
      <input name="password" type="password" required className="input" />
      <button className="btn w-full">Login</button>

      <div className="text-center">
        <Link href="/register" className="text-sm text-blue-600 hover:underline">
          Belum punya akun? Daftar
        </Link>
      </div>
    </form>
  )
}
