import { createClient } from '@/lib/supabase/server'
import {logoutUser} from '@/app/actions/auth'
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

    {notes?.map((note) => (
        <div key={note.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-700 my-5">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{note.title}</div>
            <p className="text-white text-base">
            {note.content}
            </p>
        </div>
    </div>))}
    
    <form action={logoutUser}>
    <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
        Sign Out
    </button>
    </form>
</div>
 )
}