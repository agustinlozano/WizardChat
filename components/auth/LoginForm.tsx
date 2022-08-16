import { yupResolver } from '@hookform/resolvers/yup'
import { ApiError } from '@supabase/supabase-js'
import { useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { useState } from 'react'

import useAuth from 'hooks/useAuth'
import { Credentials } from 'types/api'

import Alert from 'components/ui/Alert'
import MyButton from 'components/ui/MyButton'
import Input from '../form/Input'
import Feedback from '../form/Feedback'
import GoogleSignIn from './GoolgeSignIn'
import Spinener from 'components/ui/Spinner'

const schema = object({
  email: string().email().required(),
  password: string().required()
})

const LoginFrom = ({ onSuccess }: LoginFormProps) => {
  const { signIn } = useAuth()
  const [error, setError] = useState<ApiError | null>()

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitting }
  } = useForm<Credentials>({ resolver: yupResolver(schema) })

  const onSubmit = async (credentials: Credentials) => {
    const { error } = await signIn(credentials)
    
    if (!error) {
      setTimeout(() => {
        onSuccess()
      }, 1000)
    }

    setError(error)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && (<Alert variant='danger' className='mb-3'>
            {error.message}
          </Alert>
        )}

        <label className="block mb-3">
          <p className="mb-1">Correo electrónico</p>
          <Input {...register('email')}
            isInvalid={!!touchedFields.email && !!errors.email}
          />
          <Feedback>{errors.email?.message}</Feedback>
        </label>

        <label className="block mb-3">
          <p className="mb-1">Contraseña</p>
          <Input
            type='password'
            {...register('password')}
            isInvalid={!!touchedFields.password && !!errors.password}
          />
          <Feedback />
        </label>

        <MyButton
          className="w-full flex items-center justify-center gap-2 mb-2"
          disabled={isSubmitting}
        >{isSubmitting && <Spinener />} Iniciar sesión</MyButton>
      </form>
      <GoogleSignIn />
    </>
  )
}

export default LoginFrom

interface LoginFormProps {
  onSuccess: () => void
}
