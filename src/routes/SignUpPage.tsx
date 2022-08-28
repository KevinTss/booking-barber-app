import {SignUpForm} from "../components/SignUpForm"
import { useAuthOnly } from '../hooks'

export const SignUpPage = () => {
  useAuthOnly()

  return (
    <main>
      <h2>Sign up</h2>
      <SignUpForm />
    </main>
  );
}
