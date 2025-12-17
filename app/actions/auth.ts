'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function registerUser(formData: FormData) {
  const supabase = createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await (await supabase).auth.signUp({
    email,
    password
  })

  if (error) {NextResponse.json(error.message)
    NextResponse.json(error.message)
    alert('Registration failed: ' + error.message)
    return
  }

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

  if (error) {
    NextResponse.json(error.message)
    alert('Login failed: ' + error.message)
    return
  }

  redirect('/dashboard')
}

export async function logoutUser() {
  const supabase = createClient()
  await (await supabase).auth.signOut()
  redirect('/login')
}
