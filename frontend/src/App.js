import { BrowserRouter, Route, Routes, Navigate, useParams } from 'react-router-dom';
import Home from './pages/home';
import { Navbar } from './components/navbar';
import Login from './pages/login';
import Signup from './pages/signup';
import List from './pages/blog-list';
import { useAuthContext } from './hooks/useAuthContext';
import CreateBlog from './pages/create-blog';
import BlogDetailPage from './pages/blogs/[id]';

function App() {
  const { user } = useAuthContext();
  function reveal() {
    const reveals = document.querySelectorAll('.scroll-anim');
    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 400;
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      }
    });
  }
  if (typeof window !== 'undefined') {
    window.addEventListener("scroll", reveal);
  }
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className='app__main'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
             <Route
              path='/create-blog'
              element={user ? <CreateBlog /> : <Navigate to="/login" />}
            />
            <Route
              path='/blog-list'
              element={<List />}
            />
            {/* <Route
              path='/blog-list'
              element={user ? <List /> : <Navigate to="/login" />}
            /> */}
            <Route
              path='/login'
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route  
              path='/signup'
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path='/blogs/:id'
              element={<BlogDetailPage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
