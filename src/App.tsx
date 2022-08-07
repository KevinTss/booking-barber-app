import { Routes, Route, Link } from "react-router-dom";
import { useAuth, useLogout } from "./hooks";
import {LoginPage, SignUpPage} from './routes'

export const App = () => {
  const auth = useAuth()
  const logout = useLogout()

  if (auth.isLoading) return <p>loading</p>
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<>
          <p>coucou</p>
          {!auth.user && <Link to='/login'>Login</Link>}
          {auth.user && <button onClick={logout}>Logout</button>}
        </>}  />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/sign-up" element={<SignUpPage/>} />
      </Routes>
    </div>
  );
}

 
