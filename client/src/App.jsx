import { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import NavbarComponent from './components/navbar/NavbarComponent';
import Main from './components/main/Main';
import PostForm from './pages/PostForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Explore from './components/explore/explore';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Header />
        <NavbarComponent />
        <Routes>
          <Route className="mainSection" path="/" element={<Main />} />
          <Route
            className="postForm"
            path="/pages/postForm"
            element={<PostForm />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
