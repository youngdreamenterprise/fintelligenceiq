import '../styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

// Real Clerk publishable keys are always 32+ chars (pk_test_<base64-encoded-domain>).
// Short/dummy/missing keys would cause ClerkProvider to throw during Next.js static
// page prerendering (forced for /404 and /500), breaking the entire build.
function isValidClerkKey(key) {
  return typeof key === 'string' && key.length > 30 &&
    (key.startsWith('pk_test_') || key.startsWith('pk_live_'))
}

export default function App({ Component, pageProps }) {
  if (!isValidClerkKey(PUBLISHABLE_KEY)) {
    // No valid key: skip ClerkProvider so static pages (/404, /500) can prerender.
    // Clerk UI components (SignedIn/SignedOut/UserButton) gracefully return null
    // without context, so pages still render — just without auth-dependent UI.
    return <Component {...pageProps} />
  }
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} signInUrl="/sign-in" signUpUrl="/sign-up" signInFallbackRedirectUrl="/dashboard" signUpFallbackRedirectUrl="/dashboard" {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  )
}
