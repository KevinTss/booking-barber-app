import {useAuth} from '../hooks/useAuth'

export default function Page() {
  const a = useAuth()
  console.log('use auth', a)

    return (
      <main>
        <h2>Page</h2>
      </main>
    );
  }