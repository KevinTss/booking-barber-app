import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Page from './routes/page'

function App() {
  return (
    <div className="App">
        <Router>
      <Routes>
        <Route path="/" element={<>
          <p>coucou</p>
          <Link to='/login'>Login</Link>
        </>}  />
        <Route path="/login" element={<Page />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
