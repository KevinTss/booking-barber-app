import { useLogin } from "../hooks";


export const LoginForm = () => {
    const login = useLogin()
    
  return (
    <div>
    <button type="button" onClick={() => login('test@email.com', 'password')} >
      connect
    </button>
  </div>
  )
}
