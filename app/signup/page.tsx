import PageShell from '@/components/shared/PageShell'
import AuthPanel from '@/components/auth/sections/AuthPanel'

export default function Page() {
  return (
    <PageShell>
      <AuthPanel mode="signup" />
    </PageShell>
  )
}
