import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
 const supabase = await createClient()
 const { data: { user }, error } = await supabase.auth.getUser()
 if (error || !user) {
 redirect('/login')
 }
 // Fetch data announcements
 const { data: notes } = await supabase.from('announcements').select()
 return (
 <div className="p-8">
 <h1>Welcome, {user.email}</h1>
 {/* Render notes here */}
 </div>
 )
}