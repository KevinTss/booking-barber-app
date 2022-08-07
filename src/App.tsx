import { Routes, Route, Link } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import {useLogin} from './hooks/useLogin'
import Page from './routes/page'

export const App = () => {
  const auth = useAuth()
  const login = useLogin()

  if (auth.isLoading) return <p>loading</p>

  if (!auth.user) return (<div>
    <button type="button" onClick={() => login('test@email.com', 'password')} >
      connect
    </button>
  </div>)
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<>
          <p>coucou</p>
          <Link to='/login'>Login</Link>
        </>}  />
        <Route path="/login" element={<Page />} />
      </Routes>
    </div>
  );
}

 
