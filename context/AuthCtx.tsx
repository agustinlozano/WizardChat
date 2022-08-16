import { useRouter } from "next/router"
import React, { ReactNode, useCallback, useEffect, useState } from "react"
import { Credentials } from "types/api";
import { supabase } from "utils/supabaseClient"
import getAvatarUrl from "services/getAvatarUrl"
import setAuthToken from "services/setAuthToken"

const AuthCtx = React.createContext<ReturnType<typeof useAuthCtx> | undefined>(undefined);

function AuthProvider({ children }: { children: ReactNode }) {
  const authUtils = useAuthCtx();
  return <AuthCtx.Provider value={authUtils}>{children}</AuthCtx.Provider>;
}

const useAuthCtx = () => {
  const router = useRouter();
  const user = supabase.auth.user()
  const [userData, setUserData] = useState<UserData>()

  const signIn = useCallback(async (credentials: Credentials) => {
    return await supabase.auth.signIn(credentials)
  }, [])

  const signInWithGoogle = useCallback(async () => {
    return await supabase.auth.signIn(
      {
        provider: "google",
      },
      {redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/redirecting`}
    )
  }, [])

  const signUp = useCallback(async (credentials: Credentials) => {
    return await supabase.auth.signUp(credentials)
  }, [])

  const signOut = useCallback(async () => {
    await supabase.auth.signOut()
    router.push("/login")
  }, [router])

  const updateUserData = useCallback(async (userData: UserData) => {
    const { error } = await supabase
      .from("proiles")
      .upsert({
        id: user?.id,
        ...userData
      })
      .eq('id', user?.id)
      
      if (error) {
        setUserData((prev) => ({ ...prev, ...userData }))
      }

      return {
        error
      }
  }, [user?.id])

  useEffect(() => {
    const subscription = supabase.auth.onAuthStateChange(
      async (event, session) => await setAuthToken(event, session)
    )
  }, [user])

  return {
    signIn,
    signUp,
    signOut,
    updateUserData,
    signInWithGoogle,
    jwt: supabase.auth.session()?.access_token,
    user: userData && {
      ...userData,
      avatar_url: userData.avatar_url && getAvatarUrl(userData.avatar_url),
      email: user?.email
    }
  }
}

interface UserData {
  username?: string
  avatar_url?: string
}

export { AuthCtx, AuthProvider };