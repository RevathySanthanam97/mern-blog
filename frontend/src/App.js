import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home';
import { Navbar } from './components/navbar';
import Login from './pages/login';
import Signup from './pages/signup';
import List from './pages/list';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext();
  return (
    <>
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className='app__main'>
          <Routes>
            <Route
              path='/'
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path='/list'
              // element={user ? <List /> : <Navigate to="/login" />}
              element={user ? <List /> : <List />}
            />
            <Route
              path='/login'
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route  
              path='/signup'
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
