import { Routes, Route, Link } from "react-router-dom";
import { useAuth, useLogout } from "./hooks";
import {LoginPage, SignUpPage, AdminPage} from './routes'

export const App = () => {
  const { isLoading, user, called } = useAuth()
  const logout = useLogout()

  if (!called || isLoading) return <p>loading</p>
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<>
          {!user && <Link to='/login'>Login</Link>}
          <button onClick={logout}>Logout</button>
        </>} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}
