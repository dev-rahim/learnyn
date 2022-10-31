import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import NotFound from './Components/Home/NotFound/NotFound';
import About from './Components/About/About';
import Courses from './Components/Courses/Courses';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Contacts from './Components/Contacts/Contacts';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='courses' element={<Courses />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
