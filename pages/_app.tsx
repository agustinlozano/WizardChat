import '../styles/globals.css'
import type { AppProps } from 'next/app'

const MyApp: React.FC<any> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
