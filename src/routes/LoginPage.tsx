import {LoginForm} from "../components/LoginForm"
import { FC } from 'react'
import { useAuthOnly } from '../hooks'


export const LoginPage: FC = () => {
  useAuthOnly()

  return (
    <main>
      <h2>Login</h2>
      <LoginForm />
    </main>
  );
}
