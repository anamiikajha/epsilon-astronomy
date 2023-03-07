import '../styles/globals.css'
import NextTopLoader from 'nextjs-toploader'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <NextTopLoader showSpinner={false} />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
