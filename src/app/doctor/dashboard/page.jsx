import { redirect } from 'next/navigation'

// Merged into the admin dashboard.
export default function DoctorDashboardRedirect() {
  redirect('/admin/dashboard')
}
