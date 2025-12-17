import Link from "next/link";
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function Home() {
   const supabase = await createClient()
   const { data: { user }, error } = await supabase.auth.getUser()
   if (error || !user) {
   redirect('/login')
   }
   else{
    return (redirect('/dashboard'))
   }
}
