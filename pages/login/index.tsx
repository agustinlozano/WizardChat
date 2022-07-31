import AppLogo from 'components/icons/AppLogo'
import { LoginForm } from 'components/auth'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Login: NextPage = () => {
  const router = useRouter()

  return (
    <main className="">
      <AppLogo />
      <LoginForm onSuccess={async () => await router.push('/chat')} />
      <Link href="/register">
        <a>¿No tienes cuenta? ¡Regístrate ahora!</a>
      </Link>
    </main>
  )
}

export default Login
