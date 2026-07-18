import Link from 'next/link'

export default function AuthPanel({ mode = 'login' }: { mode?: 'login' | 'signup' }) {
  const isSignup = mode === 'signup'

  return (
    <section className={`auth-page auth-page--${mode}`}>
      <div className="store-container auth-page__layout">
        <div className="auth-page__showcase">
          <span className="auth-page__eyebrow">Rijova account</span>
          <h1>{isSignup ? 'Create your account and start your supplement journey.' : 'Welcome back — sign in to continue your orders.'}</h1>
          <p>
            Login aur signup dono pages ko same brand style me rakha gaya hai, lekin layout blocks aur page classes unique rakhe gaye hain taake global CSS me conflict na ho.
          </p>
          <ul>
            <li>Fast order tracking</li>
            <li>Saved address and wishlist</li>
            <li>Better checkout experience</li>
          </ul>
        </div>

        <div className="auth-page__form-card">
          <h2>{isSignup ? 'Create account' : 'Login account'}</h2>
          <div className="auth-page__form-grid">
            {isSignup && <label><span>Full name</span><input type="text" placeholder="Your full name" /></label>}
            <label><span>Email address</span><input type="email" placeholder="you@example.com" /></label>
            <label><span>Password</span><input type="password" placeholder="••••••••" /></label>
            {isSignup && <label><span>Confirm password</span><input type="password" placeholder="••••••••" /></label>}
          </div>
          <button className="auth-page__submit-btn">{isSignup ? 'Create account' : 'Login now'}</button>
          <p className="auth-page__switch-copy">
            {isSignup ? 'Already have an account?' : 'New here?'}{' '}
            <Link href={isSignup ? '/login' : '/signup'}>{isSignup ? 'Login' : 'Create account'}</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
