import MyButton from "components/ui/MyButton";
// import useAuth from "hooks/useAuth";
import GoogleLogo from "components/icons/GoogleLogo";

const GoogleSignIn = () => {
  // const { signInWithGoogle } = useAuth();
  return (
    <MyButton
      className="flex items-center justify-center gap-2 w-full mb-2"
      variant="black"
      // onClick={signInWithGoogle}
    >
      <GoogleLogo /> Iniciar sesión con Google
    </MyButton>
  )
}

export default GoogleSignIn;