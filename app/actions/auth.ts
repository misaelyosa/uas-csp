'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function registerUser(formData: FormData) {
  const supabase = createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await (await supabase).auth.signUp({
    email,
    password
  })

  if (error) throw new Error(error.message)

  redirect('/login')
}

export async function loginUser(formData: FormData) {
  const supabase = createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await (await supabase).auth.signInWithPassword({
    email,
    password
  })

  if (error) throw new Error(error.message)

  redirect('/dashboard')
}

export async function logoutUser() {
  const supabase = createClient()
  await (await supabase).auth.signOut()
  redirect('/login')
}
