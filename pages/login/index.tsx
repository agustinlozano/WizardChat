import AppLogo from 'components/icons/AppLogo'
import LoginForm from 'components/auth/LoginForm'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { supabase } from 'utils/supabaseClient'

const Login: NextPage = () => {
  const router = useRouter()

  return (
    <main className="w-full h-full flex flex-col justify-center max-w-sm mx-auto p-5">
      <AppLogo />
      <h1 className="text-center text-2xl font-bold mb-5">SecretChat | Login</h1>

      <LoginForm onSuccess={async () => await router.push('/chat')} />
      
      <Link href="/register">
        <a>¿No tienes cuenta? ¡Regístrate ahora!</a>
      </Link>
    </main>
  )
}

export default Login

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { error } = await supabase.auth.api.getUserByCookie(req)

  if (!error) {
    return {
      redirect: {
        destination: '/chat',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}