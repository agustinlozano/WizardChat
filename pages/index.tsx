import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AppLogo from 'components/icons/AppLogo'
import HomeImage from 'public/home.svg'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="flex max-w-md mx-auto py-10 px-5 items-center h-full">
      <Head>
        <title>WizardChat | Home</title>
        <meta name="description" content="secret chat by Agustin B. Lozano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center mx-auto">
        <AppLogo className="w-32 h-32 mx-auto" />
        <h1 className="text-5xl mb-3">
          Bienvenidos a <div className='text-purple-700'>WizardChat!</div>
        </h1>
        <p className='font-medium'>Un lugar donde podras compartir y charlar con tus amigos de forma segura</p>
        <Image
          src={HomeImage}
          priority={true}
          alt="Grupo de personas con burbujas de discurso"
          layout="responsive"
        />
        <Link href='/'>
          <a className='px-3 py-2 bg-purple-700 rounded-md mt-5 font-medium hover:bg-purple-600'>
            <span className='text-white'>Chatear ahora!</span>
          </a>
        </Link>
      </main>
    </div>
  )
}

export default Home
