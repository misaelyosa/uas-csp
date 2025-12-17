// 'use server'

// import { createSupabaseServer } from '@/lib/supabase/server
// import { revalidatePath } from 'next/cache'

// export async function saveProfile(formData: FormData) {
//   const supabase = createSupabaseServer()

//   const { data: { user } } = await supabase.auth.getUser()
//   if (!user) throw new Error('Unauthorized')

//   await supabase.from('profiles').upsert({
//     id: user.id,
//     full_name: formData.get('full_name'),
//     address: formData.get('address'),
//     ktp_number: formData.get('ktp_number'),
//     updated_at: new Date().toISOString(),
//   })

//   revalidatePath('/profile')
// }

// export async function uploadProfilePhoto(formData: FormData) {
//   const supabase = createSupabaseServer()

//   const { data: { user } } = await supabase.auth.getUser()
//   if (!user) throw new Error('Unauthorized')

//   const file = formData.get('photo') as File
//   if (!file) throw new Error('No file')

//   // 🔒 VALIDATION
//   if (!['image/jpeg', 'image/png'].includes(file.type))
//     throw new Error('Only JPG or PNG allowed')

//   if (file.size > 2 * 1024 * 1024)
//     throw new Error('Max file size 2MB')

//   const filePath = `${user.id}/profile.jpg`

//   const { error } = await supabase.storage
//     .from('profile-photos')
//     .upload(filePath, file, { upsert: true })

//   if (error) throw error

//   // Save path (NOT public URL)
//   await supabase.from('profiles')
//     .update({ photo_url: filePath })
//     .eq('id', user.id)

//   revalidatePath('/profile')
// }
