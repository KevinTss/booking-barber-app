import { useSignUp } from "../hooks";


export const SignUpForm = () => {
    const signUp = useSignUp()

  return (
    <div>
    <button type="button" onClick={() => signUp('test@email.com', 'password')} >
      singup
    </button>
  </div>
  )
}
