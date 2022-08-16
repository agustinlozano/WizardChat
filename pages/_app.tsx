import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from 'context'
import Head from 'next/head'

const MyApp: React.FC<any> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>WizardChat</title>
        <meta name="description" content="secret chat by Yhan \& Reynaldo" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default MyApp
