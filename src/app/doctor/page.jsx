import { redirect } from 'next/navigation'

// The doctor portal is now the admin portal.
export default function DoctorRedirect() {
  redirect('/admin')
}
